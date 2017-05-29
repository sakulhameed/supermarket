import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ItemsPage } from '../items/items';

/**
 * Generated class for the CategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  items = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.items = [
      {
        'title': 'Car',
        'icon': 'car',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'Computers',
        'icon': 'desktop',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      },
      {
        'title': 'Motorbikes',
        'icon': 'bicycle',
        'description': 'The latest version of the web\'s markup language.',
        'color': '#F46529'
      },
      {
        'title': 'Electronics',
        'icon': 'phone-portrait',
        'description': 'One of the most popular programming languages on the Web!',
        'color': '#FFD439'
      },
      {
        'title': 'Books & Magazines',
        'icon': 'book',
        'description': 'Syntactically Awesome Stylesheets - a mature, stable, and powerful professional grade CSS extension.',
        'color': '#CE6296'
      },
      {
        'title': 'Sports & Fitness',
        'icon': 'american-football',
        'description': 'An open-source, cross-platform runtime environment for developing server-side Web applications.',
        'color': '#78BD43'
      },
      {
        'title': 'Soft Toys',
        'icon': 'body',
        'description': 'A clear and powerful object-oriented programming language!',
        'color': '#3575AC'
      },
      {
        'title': 'Jewellery & Watches',
        'icon': 'git-network',
        'description': 'A super simple way to add formatting like headers, bold, bulleted lists, and so on to plain text.',
        'color': '#412159'
      },
      {
        'title': 'Home & Garden',
        'icon': 'home',
        'description': 'The official mascot of the Linux kernel!',
        'color': '#000'
      },
    ];
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }
  
  
  openNavDetailsPage(item) {
    this.navCtrl.push(ItemsPage, { item: item });
  }

}

