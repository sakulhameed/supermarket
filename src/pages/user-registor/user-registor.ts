import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

import { UserLoginPage } from '../user-login/user-login';

/**
 * Generated class for the UserRegistorPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user-registor',
  templateUrl: 'user-registor.html',
})
export class UserRegistorPage {

  public registorform:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _form:FormBuilder) {
   this.registorform = this._form.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'username': ['', Validators.required],
      'mobile': ['', Validators.required],
      'repassword': ['', Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserRegistorPage');
  }
  signup(){
   this.navCtrl.push(UserLoginPage);
  }
  
  onSubmit(formData) {
    console.log('Form data is ', formData);
     this.navCtrl.push(UserLoginPage);
  }

}
