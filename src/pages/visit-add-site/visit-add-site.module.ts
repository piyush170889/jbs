import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitAddSitePage } from './visit-add-site';

@NgModule({
  declarations: [
    VisitAddSitePage,
  ],
  imports: [
    IonicPageModule.forChild(VisitAddSitePage),
  ],
})
export class VisitAddSitePageModule {}
