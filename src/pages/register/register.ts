import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { GlobalProvider } from "../../providers/global/global";
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  email: string;
  password: string ;
  name: string;
  rePassword: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalProvider) {
  }

  submitRegister() {
    let dataRe = {
      email: this.email,
      name: this.name,
      password:this.password
    }
    console.log(dataRe);
    this.global.Register(dataRe);
    this.navCtrl.pop();
  }
  goToLoginPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.pop();
  }

}
