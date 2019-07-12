import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import * as moment from 'moment-timezone';
import { VisitAddSitePage } from '../visit-add-site/visit-add-site';
import { CommonUtilityProvider } from '../../providers/common-utility/common-utility';
import { ConstantsProvider } from '../../providers/constants/constants';
import { SQLiteObject } from '@ionic-native/sqlite';
import { RestserviceProvider } from '../../providers/restservice/restservice';
import { Network } from '@ionic-native/network';
import { DatabaseProvider } from '../../providers/database/database';
import { GeoFence } from '../visit-add-site/domain-geofence';
import { PunchEntryPage } from '../punch-entry/punch-entry';
import { PunchExitPage } from '../punch-exit/punch-exit';
import { Diagnostic } from '@ionic-native/diagnostic';
import { GeocoderProvider } from '../../providers/geocoder/geocoder';
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the VisitHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visit-history',
  templateUrl: 'visit-history.html',
})
export class VisitHistoryPage {

  momentjs: any = moment;
  tillDate: string = '';
  isDataSynching: boolean = false;
  visitHistoryList: any[] = [];
  myInput: string = '';
  orginalVisitList: any[] = [];
  orginalListDuplicate: any[] = [];
  locationsList: GeoFence[] = [];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private commonUtility: CommonUtilityProvider,
    private network: Network,
    private restService: RestserviceProvider,
    private databaseProvider: DatabaseProvider,
    private modal: ModalController,
    private diagnostic: Diagnostic,
    private geolocation: Geolocation,
    private geoCoderProvider: GeocoderProvider
  ) {

    this.isDataSynching = false;

    this.updateVisitsDataFromDB();

    this.databaseProvider.getMetaData(ConstantsProvider.CONFIG_NM_LAST_UPDATED_TS_VISITS)
      .subscribe(response => {
        if (response && response.rows.length > 0) {

          this.tillDate = response.rows.item(0).data;
          console.log('tillDate = ' + this.tillDate + ', Response = ' + JSON.stringify(response));

          let timeSinceLastSync: number = this.commonUtility.calculateDiffInMins(new Date(this.tillDate), new Date());
          console.log('Till Date : ' + this.tillDate + ', Current Date = ' + new Date() + ', timeSinceLastSync = ' + timeSinceLastSync);

          if (timeSinceLastSync >= 30) {
            console.log('Synching Data');
            this.syncVisitData();
          } else {
            console.log('Not Synching Data');
          }
        } else {
          console.log('Synching Data');
          this.syncVisitData();
        }
      }
      );
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad VisitHistoryPage');
  }

  addNewLocation() {

    console.log('addNewLocation VisitHistoryPage');

    this.createAddGeoFenceModal(null, true);
  }

  syncVisitData() {

    console.log('syncVisitData VisitHistoryPage');

    let adminUsersLocationDetailsApiEndpoint = ConstantsProvider.API_BASE_URL
      + ConstantsProvider.API_ENDPOINT_USERS + ConstantsProvider.URL_SEPARATOR
      + ConstantsProvider.API_ENDPOINT_ADMIN_USERS + ConstantsProvider.URL_SEPARATOR
      + ConstantsProvider.API_ENDPOINT_SYNC_VISIT_DATA;
    console.log('adminUsersLocationDetailsApiEndpoint = ' + adminUsersLocationDetailsApiEndpoint);

    if (this.network.type != "unknown" && this.network.type != "none" && this.network.type != undefined) {

      this.isDataSynching = true;

      this.restService.getDetailsWithoutLoader(adminUsersLocationDetailsApiEndpoint)
        .subscribe(
          (response) => {
            this.isDataSynching = false;

            console.log('Visit History Data = ' + JSON.stringify(response.response));
            let visitDetailsList: any[] = response.response;

            this.databaseProvider.initializeSqlLiteDb().then((db: SQLiteObject) => {

              db.executeSql('SELECT data from metadata where configname=?',
                [ConstantsProvider.CONFIG_NM_VISITS_DATA])
                .then(
                  res => {
                    if (res.rows.length > 0) {
                      this.updateVisitDetailsFromApi(visitDetailsList);
                    } else {
                      db.executeSql('INSERT INTO metadata(configname, data) VALUES(?,?)',
                        [ConstantsProvider.CONFIG_NM_VISITS_DATA, JSON.stringify(visitDetailsList)])
                        .then(res => {
                          console.log('Inserted Visits Record');
                          this.updateLastUpdatedTs();
                        })
                        .catch(e => {
                          console.log(JSON.stringify(e))
                          this.isDataSynching = false;
                        })
                    }
                  }
                )
                .catch(e => {
                  console.log(JSON.stringify(e))
                  this.isDataSynching = false;
                })
            })
              .catch(e => {
                console.log(JSON.stringify(e))
                this.isDataSynching = false;
              })
          },
          (err) => {
            this.isDataSynching = false;
          }
        );
    } else {
      this.commonUtility.presentErrorToast('No Internet Connection');
      this.isDataSynching = false;
    }
  }

  onInput() {

    console.log('onInput VisitHistoryPage');
    console.log('searchTerm = ' + this.myInput);

    let searchVal = this.myInput;

    // if the value is an empty string don't filter the items
    if (searchVal && searchVal.trim() != '') {

      this.visitHistoryList = this.orginalVisitList.filter((visitDetailsObj: any) => {

        let searchValLowerCase = searchVal.toLowerCase();

        if (visitDetailsObj.siteDtls.geofenceName
          && visitDetailsObj.siteDtls.geofenceName.toLowerCase().indexOf(searchValLowerCase) > -1)
          return true;
        else
          return false;
      });

      console.log('Visits List Length = ' + this.visitHistoryList.length);
    } else {
      this.visitHistoryList = this.orginalListDuplicate;
      this.orginalVisitList = this.orginalListDuplicate;
    }
  }

  updateVisitDetailsFromApi(visitDetailsList: any[]) {

    this.databaseProvider.initializeSqlLiteDb().then((db: SQLiteObject) => {
      db.executeSql('UPDATE metadata set data=? WHERE configname=?', [JSON.stringify(visitDetailsList),
      ConstantsProvider.CONFIG_NM_VISITS_DATA])
        .then(
          res => {
            console.log('Updated Visit History');

            db.executeSql('SELECT data from metadata where configname=?',
              [ConstantsProvider.CONFIG_NM_LAST_UPDATED_TS_VISITS])
              .then(
                res => {
                  if (res.rows.length > 0) {
                    this.updateLastUpdatedTs();
                  } else {
                    db.executeSql('INSERT INTO metadata(configname, data) VALUES(?,?)',
                      [ConstantsProvider.CONFIG_NM_LAST_UPDATED_TS_VISITS, new Date().toISOString()])
                      .then(res => {
                        console.log('Inserted Visit History Last Updated Ts Record');
                        // this.updateLastUpdatedTs();
                      })
                      .catch(e => console.log(JSON.stringify(e)));
                  }
                }
              );
          }
        )
        .catch(e => {
          console.log(JSON.stringify(e))
        });
    })
      .catch(e => {
        console.log(JSON.stringify(e))
      })
  }

  updateLastUpdatedTs() {

    this.databaseProvider.initializeSqlLiteDb().then((db: SQLiteObject) => {
      let updatedTs = new Date().toISOString();
      this.tillDate = updatedTs;
      db.executeSql('UPDATE metadata set data=? WHERE configname=?', [updatedTs,
        ConstantsProvider.CONFIG_NM_LAST_UPDATED_TS_VISITS])
        .then(
          res => {
            console.log('Updated Last Updated Ts OF Visit History');
            this.updateVisitsDataFromDB();
            this.isDataSynching = false;
          }
        )
        .catch(e => {
          console.log(JSON.stringify(e))
        })
    })
      .catch(e => {
        console.log(JSON.stringify(e))
      })
  }

  updateVisitsDataFromDB() {

    // this.putDummyData();

    this.databaseProvider.getMetaData(ConstantsProvider.CONFIG_NM_VISITS_DATA)
      .subscribe(
        res => {
          if (res.rows.length > 0) {
            console.log('Visit Data = ' + res.rows.item(0).data);
            this.visitHistoryList = JSON.parse(res.rows.item(0).data);
          }

          this.orginalVisitList = this.visitHistoryList;
          this.orginalListDuplicate = this.visitHistoryList;
        }
        , (e) => {
          console.log(JSON.stringify(e));
        });
  }

  putDummyData() {

    this.visitHistoryList.push({
      locationName: 'Location 1',
      entryTime: '09:00 AM',
      exitTime: '10:00 AM',
      visitPurpose: 'Payment',
      remarks: 'Done'
    }, {
        locationName: 'Location 2',
        entryTime: '10:00 AM',
        exitTime: '11:00 AM',
        visitPurpose: 'General Visit',
        remarks: 'Done'
      }, {
        locationName: 'Location 3',
        entryTime: '09:00 AM',
        exitTime: '',
        visitPurpose: '',
        remarks: ''
      }, {
        locationName: 'Location 4',
        entryTime: '09:00 AM',
        exitTime: null,
        visitPurpose: null,
        remarks: null
      });

    this.orginalVisitList = this.visitHistoryList;
    this.orginalListDuplicate = this.visitHistoryList;
  }

  updateGeoFence(geoFence: GeoFence) {

    console.log('updateGeoFence() called');

    this.createAddGeoFenceModal(geoFence, false);
  }


  createAddGeoFenceModal(modalData: GeoFence, isAddOperation: boolean) {

    let addUpdateGeoFenceModal: Modal = this.modal.create(VisitAddSitePage, {
      isAddOperation: isAddOperation,
      modalData: modalData
    });

    addUpdateGeoFenceModal.present();

    addUpdateGeoFenceModal.onDidDismiss(
      (addUpdateGeoFenceModalData) => {
        console.log('addUpdateGeoFenceModalData = ' + JSON.stringify(addUpdateGeoFenceModalData));

        if (addUpdateGeoFenceModalData.isAdded) {

          let updatedGeoFenceData: GeoFence = addUpdateGeoFenceModalData.geoFenceData;

          let addLocationApiEndpoint: string = ConstantsProvider.API_BASE_URL + ConstantsProvider.LOCATION_TRACKING_URL;

          this.restService.postDetails(addLocationApiEndpoint, updatedGeoFenceData)
            .subscribe(
              (response) => {

                if (isAddOperation) {

                  console.log('Add Location Response = ' + JSON.stringify(response));
                  updatedGeoFenceData.geofencingDtlsId = response.response;
                  this.locationsList.push(updatedGeoFenceData);
                  console.log('Added Location List with new Added Data');
                  this.commonUtility.presentToast('Added New Location Successfully', 5000);
                } else {

                  console.log('Update Location Response = ' + JSON.stringify(response));
                  let index = this.locationsList.indexOf(modalData);
                  if (index > -1) {
                    this.locationsList[index] = updatedGeoFenceData;
                    console.log('Updated locations List with updated Data');
                    this.commonUtility.presentToast('Updated Location Successfully', 5000);
                  }
                }
              }
            );
        }
      });
  }

  punchEntry() {

    console.log('punchEntry VisitHistoryPage');

    let isExitPending: boolean = false;
    let pendingExit: any;

    this.visitHistoryList.forEach(
      (visitHistory: any) => {

        if (visitHistory.exitDt == null || visitHistory.exitDt == '') {
          isExitPending = true;
          pendingExit = visitHistory;
        }
      }
    );

    if (isExitPending) {
      this.createPunchExitModal(pendingExit, true);
    } else {
      let punchEntryModal: Modal = this.modal.create(PunchEntryPage);

      punchEntryModal.present();

      punchEntryModal.onDidDismiss(
        (punchEntryModalData) => {
          console.log('punchEntryModalData = ' + JSON.stringify(punchEntryModalData));

          if (punchEntryModalData.isAdded) {

            let visitHistorySorted: any[] = [];
            visitHistorySorted.push(punchEntryModalData.punchEntryData);
            this.visitHistoryList = visitHistorySorted.concat(this.visitHistoryList);

            this.databaseProvider.setItem(ConstantsProvider.CONFIG_NM_VISITS_DATA, JSON.stringify(this.visitHistoryList));

            this.commonUtility.presentToast('Entry Punched Successfully', 5000);
          }
        }
      );
    }
  }

  punchExit(visitHistory: any) {

    console.log('punchExit VisitHistoryPage');

    this.createPunchExitModal(visitHistory, false);
  }

  createPunchExitModal(visitHistory: any, isPendingRequest: boolean) {

    this.diagnostic.isLocationEnabled().then((available) => {
      if (available) {
        // Go To Punch Exit Page
        let punchExitModal: Modal = this.modal.create(PunchExitPage, {
          visitHistory: visitHistory,
          isPendingRequest: isPendingRequest
        });

        punchExitModal.present();

        punchExitModal.onDidDismiss(
          (punchExitModalData) => {
            console.log('punchExitModalData = ' + JSON.stringify(punchExitModalData));

            if (punchExitModalData.isAdded) {

              let punchExitData: any = punchExitModalData.punchExitData;

              console.log('punchExitData = ' + JSON.stringify(punchExitData));

              this.getCurrentLatLong()
                .then((resp) => {

                  let userLat = resp.coords.latitude;
                  let userLong = resp.coords.longitude;
                  console.log('exit latitude = ' + userLat + ', exit longitude = ' + userLong);

                  let exitLocation: string = 'NA';
                  this.geoCoderProvider.reverseGeocode(userLat, userLong)
                    .subscribe(
                      (response: any) => {
                        console.log('Response = ' + JSON.stringify(response));
                        exitLocation = response;

                        this.punchExitApiCall(punchExitData, visitHistory, userLat, userLong, exitLocation);
                      },
                      (err: any) => {
                        console.log('Error = ' + JSON.stringify(err));
                        this.punchExitApiCall(punchExitData, visitHistory, userLat, userLong, exitLocation);
                      }
                    );
                })
                .catch(e => {
                  console.log('Error = ' + JSON.stringify(e));
                  this.commonUtility.presentErrorToast('Cannot Capture Location At The Moment');
                });
            }
          }
        );
      } else {
        this.diagnostic.switchToLocationSettings();
      }
    });
  }

  getCurrentLatLong() {

    return this.geolocation.getCurrentPosition();
  }

  punchExitApiCall(punchExitData, visitHistory, userLat, userLong, exitLocation) {

    let punchExitApiEndpoint = ConstantsProvider.API_BASE_URL + ConstantsProvider.API_ENDPOINT_USERS
      + ConstantsProvider.URL_SEPARATOR + ConstantsProvider.API_ENDPOINT_ADMIN_USERS
      + ConstantsProvider.URL_SEPARATOR + ConstantsProvider.API_ENDPOINT_PUNCH_SITE_EXIT;

    let punchExitApiData = {
      siteVisitHistoryId: punchExitData.siteVisitHistoryId,
      remarks: punchExitData.remarks,
      exitLatitude: userLat,
      exitLongitude: userLong,
      exitLocation: exitLocation
    }

    this.restService.putDetails(punchExitApiEndpoint, punchExitApiData)
      .subscribe(
        (response) => {
          console.log('Response = ' + JSON.stringify(response.response));

          let index = this.visitHistoryList.indexOf(visitHistory);
          if (index > -1) {
            this.visitHistoryList[index] = response.response;

            this.databaseProvider.setItem(ConstantsProvider.CONFIG_NM_VISITS_DATA, JSON.stringify(this.visitHistoryList));

            this.commonUtility.presentToast('Exit Punched Successfully', 5000);
          }
        }
      );
  }
}
