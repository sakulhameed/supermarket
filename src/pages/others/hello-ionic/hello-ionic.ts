import { Component } from '@angular/core';

import { AlertController, NavController } from 'ionic-angular';
import { UserLoginPage } from '../user-login/pages';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {

  constructor(public alerCtrl: AlertController, public navCtrl: NavController) { }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'New Friend!',
      message: 'Your friend, Obi wan Kenobi, just approved your friend request!',
      buttons: ['Ok']
    });
    alert.present()
  }
  
  nextPage(){
   this.navCtrl.push(UserLoginPage);
  }

}
