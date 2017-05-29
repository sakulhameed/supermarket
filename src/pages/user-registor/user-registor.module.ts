import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserRegistorPage } from './user-registor';

@NgModule({
  declarations: [
    UserRegistorPage,
  ],
  imports: [
    IonicPageModule.forChild(UserRegistorPage),
  ],
  exports: [
    UserRegistorPage
  ]
})
export class UserRegistorPageModule {}
