import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonUtilityProvider } from '../../providers/common-utility/common-utility';

/**
 * Generated class for the LedgerDateSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ledger-date-selection',
  templateUrl: 'ledger-date-selection.html',
})
export class LedgerDateSelectionPage {

  fromDate: any = '';
  tillDate: any = '';
  ledgerDateSelectionFormGroup: FormGroup;
  currDate: string = '';

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public view: ViewController,
    private formBuilder: FormBuilder,
    private commonUtility: CommonUtilityProvider) {

    this.fromDate = this.navParams.get('fromDate');
    this.tillDate = this.navParams.get('tillDate');

    this.currDate = new Date().toISOString();

    this.ledgerDateSelectionFormGroup = this.formBuilder.group({
      fromDate: [this.fromDate, Validators.required],
      tillDate: [this.tillDate, Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LedgerDateSelectionPage');
  }

  dismissModal() {

    const modalData = {
      isAdded: false
    };
    this.view.dismiss(modalData);
  }

  filterLedgerInvoices() {

    console.log('filterLedgerInvoices() called');

    const modalData = {
      isAdded: true,
      fromDate: this.ledgerDateSelectionFormGroup.controls['fromDate'].value,
      tillDate: this.ledgerDateSelectionFormGroup.controls['tillDate'].value
    };
    this.view.dismiss(modalData);
  }


}
