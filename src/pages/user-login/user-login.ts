import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

import { UserRegistorPage } from '../user-registor/user-registor';
import { DashboardPage } from '../dashboard/dashboard';

/**
 * Generated class for the UserLoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
})
export class UserLoginPage {
  
  public loginform:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _form:FormBuilder) {
   this.loginform = this._form.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLoginPage');
  }
  
  signup(){
   this.navCtrl.push(UserRegistorPage);
  }
  
  onSubmit(formData) {
    console.log('Form data is ', formData);
    this.navCtrl.setRoot(DashboardPage);
  }

}

