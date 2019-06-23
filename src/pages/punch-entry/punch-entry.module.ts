import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PunchEntryPage } from './punch-entry';

@NgModule({
  declarations: [
    PunchEntryPage,
  ],
  imports: [
    IonicPageModule.forChild(PunchEntryPage),
  ],
})
export class PunchEntryPageModule {}
