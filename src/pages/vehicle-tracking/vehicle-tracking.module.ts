import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleTrackingPage } from "./vehicle-tracking";

@NgModule({
  declarations: [
    VehicleTrackingPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleTrackingPage),
  ],
})
export class VehicleTrackingPageModule {}
