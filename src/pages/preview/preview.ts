import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the PreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-preview',
  templateUrl: 'preview.html',
})
export class PreviewPage {
  id: string = '';
  recette:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalProvider) {
    this.id = this.navParams.get("id");
    console.log(this.id);
    this.recette = this.global.GetRecette(this.id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreviewPage');
  }

}
