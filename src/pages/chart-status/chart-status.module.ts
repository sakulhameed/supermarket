import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChartStatusPage } from './chart-status';

@NgModule({
  declarations: [
    ChartStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(ChartStatusPage),
  ],
  exports: [
    ChartStatusPage
  ]
})
export class ChartStatusPageModule {}
