import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoryDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category-details',
  templateUrl: 'category-details.html',
})
export class CategoryDetailsPage {
  item;
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryDetailsPage');
  }

}
