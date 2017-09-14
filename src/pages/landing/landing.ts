import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateRecipPage } from "../create-recip/create-recip";
import { PreviewPage } from "../preview/preview";
import { GlobalProvider } from '../../providers/global/global';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  recettes: Array<any> = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public global:GlobalProvider) {
    
  }
  ngOnInit() {

 }
  ionViewDidLoad() {
    this.recettes = this.global.GetRecettes();
    console.log(this.recettes);
  }
  openCreateRecip(){
    this.navCtrl.push(CreateRecipPage);
  }
  seePreview(id) {
    console.log(id);
    this.navCtrl.push(PreviewPage, {id: id})
  }
}
