import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { ConstantsProvider } from '../../providers/constants/constants';
import { CommonUtilityProvider } from '../../providers/common-utility/common-utility';
import { SQLiteObject } from '@ionic-native/sqlite';
import { Network } from '@ionic-native/network';
import { RestserviceProvider } from '../../providers/restservice/restservice';

/**
 * Generated class for the SummaryReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summary-report',
  templateUrl: 'summary-report.html',
})
export class SummaryReportPage {

  isDataSynching = false;
  tillDate: string = 'Not Synced';
  originalSummaryReportList: any[] = [];
  summaryReportList: any[] = [];
  orginalListDuplicate: any[] = [];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private databaseProvider: DatabaseProvider,
    private commonUtility: CommonUtilityProvider,
    private network: Network,
    private restService: RestserviceProvider
  ) {

    this.isDataSynching = false;

    this.updateSummaryReportsDataFromDB();

    this.databaseProvider.getMetaData(ConstantsProvider.CONFIG_NM_LAST_UPDATED_TS_SUMM_RPT)
      .subscribe(response => {
        if (response && response.rows.length > 0) {

          this.tillDate = response.rows.item(0).data;
          console.log('tillDate = ' + this.tillDate + ', Response = ' + JSON.stringify(response));

          let timeSinceLastSync: number = this.commonUtility.calculateDiffInMins(new Date(this.tillDate), new Date());
          console.log('Till Date : ' + this.tillDate + ', Current Date = ' + new Date() + ', timeSinceLastSync = ' + timeSinceLastSync);

          if (timeSinceLastSync >= 30) {
            console.log('Synching Data');
            this.syncSummaryReportsData();
          } else {
            console.log('Not Synching Data');
          }
        } else {
          console.log('Synching Data');
          this.syncSummaryReportsData();
        }
      }
      );
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SummaryReportPage');
  }

  updateSummaryReportsDataFromDB() {

    console.log('updateSummaryReportsDataFromDB SummaryReportPage');

    this.databaseProvider.getMetaData(ConstantsProvider.CONFIG_NM_SUMM_RPT_DATA)
      .subscribe(
        res => {
          if (res.rows.length > 0) {

            console.log('Summary Report Data = ' + res.rows.item(0).data);
            this.originalSummaryReportList = JSON.parse(res.rows.item(0).data);
            this.summaryReportList = this.originalSummaryReportList;
          }

          this.orginalListDuplicate = this.originalSummaryReportList;
        }
        , (e) => {
          console.log(JSON.stringify(e));
        });
  }

  syncSummaryReportsData() {

    console.log('syncSummaryReportsData SummaryReportPage');

    console.log('syncVisitData VisitHistoryPage');

    let summaryReportsDetailsApiEndpoint = ConstantsProvider.API_BASE_URL
      + ConstantsProvider.API_ENDPOINT_CUST_DTLS + ConstantsProvider.URL_SEPARATOR
      + ConstantsProvider.API_ENDPOINT_SUMM_RPT;

    console.log('summaryReportsDetailsApiEndpoint = ' + summaryReportsDetailsApiEndpoint);

    if (this.network.type != "unknown" && this.network.type != "none" && this.network.type != undefined) {

      this.isDataSynching = true;

      this.restService.getDetailsWithoutLoader(summaryReportsDetailsApiEndpoint)
        .subscribe(
          (response) => {
            this.isDataSynching = false;

            console.log('Summary Report Data = ' + JSON.stringify(response.response));
            let summaryReportDetailsList: any[] = response.response;

            this.databaseProvider.initializeSqlLiteDb().then((db: SQLiteObject) => {

              db.executeSql('SELECT data from metadata where configname=?',
                [ConstantsProvider.CONFIG_NM_SUMM_RPT_DATA])
                .then(
                  res => {
                    if (res.rows.length > 0) {
                      this.updateSummaryReportDetailsFromApi(summaryReportDetailsList);
                    } else {
                      db.executeSql('INSERT INTO metadata(configname, data) VALUES(?,?)',
                        [ConstantsProvider.CONFIG_NM_SUMM_RPT_DATA, JSON.stringify(summaryReportDetailsList)])
                        .then(res => {
                          console.log('Inserted summaryReportDetailsList Record');
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

  updateLastUpdatedTs() {

    console.log('updateLastUpdatedTs() SummaryReportPage');

    this.databaseProvider.initializeSqlLiteDb().then((db: SQLiteObject) => {
      let updatedTs = new Date().toISOString();
      this.tillDate = updatedTs;
      db.executeSql('UPDATE metadata set data=? WHERE configname=?', [updatedTs,
        ConstantsProvider.CONFIG_NM_LAST_UPDATED_TS_SUMM_RPT])
        .then(
          res => {
            console.log('Updated Last Updated Ts OF Summary Report');
            this.updateSummaryReportsDataFromDB();
            this.isDataSynching = false;
          }
        )
        .catch(e => {
          console.log(JSON.stringify(e))
        })
    })
      .catch(e => {
        console.log(JSON.stringify(e))
      });
  }

  updateSummaryReportDetailsFromApi(summaryReportDetailsList: any[]) {

    console.log('updateSummaryReportDetailsFromApi SummaryReportPage');

    this.databaseProvider.initializeSqlLiteDb().then((db: SQLiteObject) => {
      db.executeSql('UPDATE metadata set data=? WHERE configname=?', [JSON.stringify(summaryReportDetailsList),
      ConstantsProvider.CONFIG_NM_SUMM_RPT_DATA])
        .then(
          res => {
            console.log('Updated Summary Report Data');

            db.executeSql('SELECT data from metadata where configname=?',
              [ConstantsProvider.CONFIG_NM_LAST_UPDATED_TS_SUMM_RPT])
              .then(
                res => {
                  if (res.rows.length > 0) {
                    this.updateLastUpdatedTs();
                  } else {
                    db.executeSql('INSERT INTO metadata(configname, data) VALUES(?,?)',
                      [ConstantsProvider.CONFIG_NM_LAST_UPDATED_TS_SUMM_RPT, new Date().toISOString()])
                      .then(res => {
                        console.log('Inserted Summary Report Last Updated Ts Record');
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
      });
  }
}