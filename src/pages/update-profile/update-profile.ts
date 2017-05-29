import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {FormBuilder, Validators, FormGroup} from '@angular/forms';

/**
 * Generated class for the UpdateProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-update-profile',
  templateUrl: 'update-profile.html',
})
export class UpdateProfilePage {

  public updateform:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public _form:FormBuilder) {
   this.updateform = this._form.group({
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
  onSubmit(formData) {
    console.log('Form data is ', formData);
  }

}
