import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

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


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HomePage the root (or first) page
  rootPage = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: DashboardPage },
      { title: 'Category', component: CategoryPage },
      { title: 'History', component: ChartStatusPage },
      { title: 'Add Cart', component: AddcartPage },
      { title: 'My Profile', component: UserProfilePage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
  
}
