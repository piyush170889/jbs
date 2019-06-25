import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SignaturePad } from 'angular2-signaturepad/signature-pad';
import { RestserviceProvider } from '../../providers/restservice/restservice';

/**
 * Generated class for the SignaturepadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signaturepad',
  templateUrl: 'signaturepad.html',
})
export class SignaturepadPage {

  signature = '';
  isDrawing = false;

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  invoiceNo: string = '';

  private signaturePadOptions: Object = { // Check out https://github.com/szimek/signature_pad
    'minWidth': 2,
    'canvasWidth': 400,
    'canvasHeight': 500,
    'backgroundColor': '#f6fbff',
    'penColor': '#666a73'
  };

  constructor(
    private navCtrl: NavController,
    private restService: RestserviceProvider,
    private navParams: NavParams) {

  }

  ionViewDidEnter() {

    console.log('ionViewDidEnter SignaturePad');
    this.signaturePad.clear();

    this.invoiceNo = this.navParams.get('invoiceNo');
    this.signature = this.navParams.get('signature');

    console.log('Invoice No. = ' + this.invoiceNo + ', Signature = ' + this.signature);
  }

  drawComplete() {
    this.isDrawing = false;
  }

  drawStart() {
    this.isDrawing = true;
  }

  savePad() {
    this.signature = this.signaturePad.toDataURL();
    console.log('Signature to Save = ' + this.signature);

    this.signaturePad.clear();

    let toast = this.toastCtrl.create({
      message: 'New Signature saved.',
      duration: 3000
    });
    toast.present();
  }

  clearPad() {
    this.signaturePad.clear();
  }

}
