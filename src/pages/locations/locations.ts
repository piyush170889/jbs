import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { ConstantsProvider } from '../../providers/constants/constants';
import { CommonUtilityProvider } from '../../providers/common-utility/common-utility';
import { RestserviceProvider } from '../../providers/restservice/restservice';
import { GeoFence } from '../visit-add-site/domain-geofence';
import { VisitAddSitePage } from '../visit-add-site/visit-add-site';

/**
 * Generated class for the LocationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {

  locationsList: any[] = [];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private databaseProvider: DatabaseProvider,
    private commonUtility: CommonUtilityProvider,
    private restService: RestserviceProvider,
    private modal: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationsPage');
  }

  ionViewDidEnter() {

    console.log('ionViewDidEnter LocationsPage');

    this.updateLocationFromDb();
  }

  // updateLocationFromDb() {
  //   this.databaseProvider.getMetaData(ConstantsProvider.CONFIG_NM_LOCATIONS_DATA)
  //     .subscribe(
  //       (res) => {
  //         if (res && res != undefined) {

  //         if (res.rows.length > 0) {

  //           console.log('Locations Data = ' + res.rows.item(0).data);

  //           this.locationsList = res.rows.item(0).data;
  //         }
  //          }  
  //       }
  //     );
  // }

  updateLocationFromDb() {

    this.locationsList.push({
      geofencingDtlsId: 1,
      geofenceName: "Aaradhya Enterprises",
      cardCode: "C0004",
      geofenceAddr: "1, Mahadev Nagar, Dhayari, Pune, Maharashtra 411041, India",
      latitude: 18.4417531,
      longitude: 73.8145203
    }, {
        geofencingDtlsId: 2,
        geofenceName: "A S Enterprises",
        cardCode: "",
        geofenceAddr: "1, Mahadev Nagar, Dhayari, Pune, Maharashtra 411041, India",
        latitude: 18.4417531,
        longitude: 73.8145203
      })
  }

  addNewLocation() {

    console.log('addNewLocation VisitHistoryPage');

    this.createAddGeoFenceModal(null, true);
  }


  updateLocation(geoFence: GeoFence) {

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
}
