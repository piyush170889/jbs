import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Geolocation } from '@ionic-native/geolocation';
import { CommonUtilityProvider } from '../../providers/common-utility/common-utility';
import { Diagnostic } from '@ionic-native/diagnostic';

declare var google: any;

/**
 * Generated class for the PunchEntryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-punch-entry',
  templateUrl: 'punch-entry.html',
})
export class PunchEntryPage {

  visitPurpose: any;
  selectedLocationDetails: any;
  locationsList: any[] = [];


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private databaseProvider: DatabaseProvider,
    private commonUtility: CommonUtilityProvider,
    private geolocation: Geolocation,
    private diagnostic: Diagnostic) {

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad PunchEntryPage');
  }

  ionViewDidEnter() {

    console.log('ionViewDidEnter PunchEntryPage');

    this.updateLocationFromDb();
  }

  punchEntry() {

    console.log('punchEntry PunchEntryPage');

    console.log('selectedLocationDetails = ' + JSON.stringify(this.selectedLocationDetails) + ', Visit Purpose = ' + this.visitPurpose);

    if (this.selectedLocationDetails && this.visitPurpose
      && this.selectedLocationDetails != undefined && this.visitPurpose != undefined) {

      this.diagnostic.isLocationEnabled().then((available) => {
        if (available) {
          this.getCurrentLatLong()
            .then((resp) => {

              let userLat = resp.coords.latitude;
              let userLong = resp.coords.longitude;
              console.log('this.currentLatitude = ' + userLat + ', currentLongitude = ' + userLong);

              let currentDistanceFromPunchingLocation = this.commonUtility.distance(this.selectedLocationDetails.latitude,
                this.selectedLocationDetails.longitude, userLat, userLong, "K");

              if (currentDistanceFromPunchingLocation <= 1) {

                let punchEntryRequest = {
                  latitude: userLat,
                  longitude: userLong,
                  visitPurpose: this.visitPurpose,
                  geofencingDtlsId: this.selectedLocationDetails.geofencingDtlsId
                }

                console.log('punchEntryRequest = ' + JSON.stringify(punchEntryRequest));
              } else {
                this.commonUtility.presentToast('Please be under atleast 1 KM distance of the location that you are Punching the entry for', 8000);
              }
            }).catch((error) => {
              this.commonUtility.presentErrorToast(JSON.stringify(error));
              console.log('Error getting location', error);
            });
        } else {
          this.diagnostic.switchToLocationSettings();
        }
      }).catch((error) => {
        this.commonUtility.presentErrorToast(JSON.stringify(error));
        console.log('Error getting location', error);
      });
    } else {
      this.commonUtility.presentToast('Please select appropriate values', 5000);
    }
  }

  // updateLocationFromDb() {
  //   this.databaseProvider.getMetaData(ConstantsProvider.CONFIG_NM_LOCATIONS_DATA)
  //     .subscribe(
  //       (res) => {
  //         if (res && res != undefined) {

  //           if (res.rows.length > 0) {

  //             console.log('Locations Data = ' + res.rows.item(0).data);

  //             this.locationsList = res.rows.item(0).data;
  //           }
  //         }
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


  getCurrentLatLong() {

    return this.geolocation.getCurrentPosition();
  }

}
