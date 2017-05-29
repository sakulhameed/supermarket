import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { UserLoginPage } from '../pages/user-login/user-login';
import { UserRegistorPage } from '../pages/user-registor/user-registor';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { CategoryPage } from '../pages/category/category';
import { CategoryDetailsPage } from '../pages/category-details/category-details';
import { UserProfilePage } from '../pages/user-profile/user-profile';
import { UpdateProfilePage } from '../pages/update-profile/update-profile';
import { ItemsPage } from '../pages/items/items';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ChartStatusPage } from '../pages/chart-status/chart-status';
import { AddcartPage } from '../pages/addcart/addcart';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UserLoginPage,
    UserRegistorPage,
    DashboardPage,
    CategoryPage,
    CategoryDetailsPage,
    UserProfilePage,
    UpdateProfilePage,
    ItemsPage,
    ItemDetailsPage,
    ChartStatusPage,
    AddcartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UserLoginPage,
    UserRegistorPage,
    DashboardPage,
    CategoryPage,
    CategoryDetailsPage,
    UserProfilePage,
    UpdateProfilePage,
    ItemsPage,
    ItemDetailsPage,
    ChartStatusPage,
    AddcartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
