import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignaturepadPage } from './signaturepad';

@NgModule({
  declarations: [
    SignaturepadPage,
  ],
  imports: [
    IonicPageModule.forChild(SignaturepadPage),
  ],
})
export class SignaturepadPageModule {}
