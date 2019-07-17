import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerSelectionPage } from './customer-selection';

@NgModule({
  declarations: [
    CustomerSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerSelectionPage),
  ],
})
export class CustomerSelectionPageModule {}
