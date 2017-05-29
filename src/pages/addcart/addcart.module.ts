import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddcartPage } from './addcart';

@NgModule({
  declarations: [
    AddcartPage,
  ],
  imports: [
    IonicPageModule.forChild(AddcartPage),
  ],
  exports: [
    AddcartPage
  ]
})
export class AddcartPageModule {}
