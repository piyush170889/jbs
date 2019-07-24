import { Component } from '@angular/core';
import { NavController, NavParams, Loading } from 'ionic-angular';
// import { VehicleDetailsPage } from "../vehicle-details/vehicle-details";
// import { AddVehiclePage } from "../add-vehicle/add-vehicle";
import { RestserviceProvider } from "../../providers/restservice/restservice";
import { CommonUtilityProvider } from "../../providers/common-utility/common-utility";
import { VehicleTrackingPage } from '../vehicle-tracking/vehicle-tracking';

export class Vehicle {
  vehicleDtlsId: number;
  vin: string;
  vehicleNo: string;
  assignedDrvFNm: string;
  assignedDrvSNm: string;
  firebaseId: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'vehicle-list.html'
})
export class VehicleListPage {

  loader: Loading;

  toastMessage: string;

  showToast: boolean = false;

  private loggedInUsersName: string;


  vehiclesList: Vehicle[] = [];
  // activeVehiclesList : Vehicle[] = [];
  // deactiveVehicleList : Vehicle[] = [];
  currentPageNo: number = 1;
  paginationDetails: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restService: RestserviceProvider,
    public commonUtility: CommonUtilityProvider
  ) {
    // this.loggedInUsersName = this.navParams.get('inputUsername');
    console.log('Logged In username = ' + this.loggedInUsersName);
    this.toastMessage = this.navParams.get('toastMessage');
    this.showToast = this.navParams.get("showToast");

    if (this.commonUtility.isNetworkAvailable()) {

      this.vehiclesList.push({
        vehicleDtlsId: 1,
        vin: '9607123456',
        vehicleNo: 'MH 13 Z 0774',
        assignedDrvFNm: '',
        assignedDrvSNm: '',
        firebaseId: '-LT1WJCwgLaPy_ppqe6j'
      });

      // this.loader = this.commonUtility.createLoader();

      // this.loader.present().then(
      //   () => {

      //   this.restService.getVehiclesList(this.currentPageNo).subscribe(response => {
      //     this.loader.dismiss();
      //     console.log(response);
      //     this.vehiclesList = response.vehiclesList;
      //     this.paginationDetails = response.paginationDetails;

      //     console.log('Final Vehicles List - ' + this.vehiclesList);

      //     if (this.showToast) {
      //       this.commonUtility.presentToast(this.toastMessage, 5000);
      //     }      
      //   },
      //   error => {
      //     this.loader.dismiss();
      //     console.log("Error" + error);
      //   });

      // });

    }

    /*this.vehiclesList.push(
      {
        vin : "#ABC001",
        vehicleNo : "MH 12 A 0001",
        assignedDriver : "John Doe",
      },
      {
        vin : "#ABC002",
        vehicleNo : "MH 12 A 0002",
        assignedDriver : "John Doe",
      },
      {
        vin : "#ABC003",
        vehicleNo : "MH 12 A 0003",
        assignedDriver : "John Doe",
      },
      {
        vin : "#ABC003",
        vehicleNo : "MH 12 A 0003",
        assignedDriver : "John Doe",
      },
      {
        vin : "#ABC003",
        vehicleNo : "MH 12 A 0003",
        assignedDriver : "John Doe",
      },
      {
        vin : "#ABC003",
        vehicleNo : "MH 12 A 0003",
        assignedDriver : "John Doe",
      },
      {
        vin : "#ABC003",
        vehicleNo : "MH 12 A 0003",
        assignedDriver : "John Doe",
      },
      {
        vin : "#ABC003",
        vehicleNo : "MH 12 A 0003",
        assignedDriver : "John Doe",
      },
      {
        vin : "#ABC003",
        vehicleNo : "MH 12 A 0003",
        assignedDriver : "John Doe",
      }
      );*/
  }


  vehicleSelected(vehicleSelected: Vehicle) {

    // let vehicleDriverName: string = vehicleSelected.assignedDrvFNm + " " + vehicleSelected.assignedDrvSNm;
    // console.log("Vehicle Selected Details : " + vehicleSelected.vin + ", " + vehicleSelected.vehicleNo
    //   + ", " + vehicleDriverName);

    // if (this.commonUtility.isNetworkAvailable()) {
    //   this.navCtrl.push(VehicleDetailsPage, {
    //     vehicleDtlsId: vehicleSelected.vehicleDtlsId,
    //     vin: vehicleSelected.vin,
    //     vehicleNo: vehicleSelected.vehicleNo,
    //     assignedDriver: vehicleDriverName
    //   });
    // }

    this.navigateToVehicleTrackingView(vehicleSelected);
  }


  navigateToVehicleTrackingView(vehicleDetails: Vehicle) {

    console.log('firebaseId' + vehicleDetails.firebaseId);

    if (vehicleDetails.firebaseId == '' || vehicleDetails.firebaseId == null) {
      this.showFirebaseIdNotPresentAlert();
    } else {
      if (this.commonUtility.isNetworkAvailable()) {
        this.navCtrl.push(VehicleTrackingPage, {
          firebaseId: vehicleDetails.firebaseId,
          vehicleNo: vehicleDetails.vehicleNo
        });
      }
    }
  }

  showFirebaseIdNotPresentAlert() {
    this.commonUtility.presentToast('No Tracking Data Associated With This Vehicle.', 3000);
  }

  // addVehicle() {
  //   console.log("Add vehicle Called");
  //   this.navCtrl.push(AddVehiclePage);
  // }

  // getVehiclesPaginated(infiniteScrollEvent) {

  //     let currentPageNo : number = this.paginationDetails.currentPageNo;
  //     let totalPages : number = this.paginationDetails.totalPages;

  //     console.log('Called For Page No = ' + currentPageNo);
  //     if (currentPageNo<totalPages) {
  //       setTimeout(() => {
  //         this.restService.getVehiclesList((currentPageNo + 1))
  //           .subscribe(response => {

  //             console.log('Vehicle List Obtained - ' + JSON.stringify(response));
  //             this.vehiclesList = this.vehiclesList.concat(response.vehiclesList);
  //             this.paginationDetails = response.paginationDetails;
  //             console.log('Final Vehicle List Obtained - ' + JSON.stringify(this.vehiclesList));

  //           }, error => {
  //             console.log('Error = ' + error);
  //           });
  //         infiniteScrollEvent.complete();  
  //       }, 500);
  //     } else {
  //       infiniteScrollEvent.enable(false);
  //     }
  //   }
}
