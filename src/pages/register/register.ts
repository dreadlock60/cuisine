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
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  tel: number = 0;
  password: string ;
  rePassword: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalProvider) {
  }

  submitRegister() {
    let dataRe = {
      first_name : this.firstName,
      last_name: this.lastName,
      email: this.email,
      address: this.address,
      tel: this.tel,
      password:this.password,
      password_confir: this.rePassword
    }
    this.global.RegisterAcount(dataRe).subscribe(data => {
      console.log(data);
    });
    this.navCtrl.pop();
  }
  goToLoginPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.pop();
  }

}
