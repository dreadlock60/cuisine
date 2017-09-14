import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { LobbyPage } from "../lobby/lobby";
import { GlobalProvider } from '../../providers/global/global';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public rootPage: any = HomePage;
  userName: string = 'me';
  password: string = 'me2';
  userNameInput : string = '';
  alert: boolean = false;
  passwordInput : string = '';
  constructor(public navCtrl: NavController, public global: GlobalProvider) {

  }
goToRegisterPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(RegisterPage);
  }
  goToLobbyPage() {
   let user = {
      email: this.userNameInput,
      password: this.passwordInput
    }
    let gateway = this.global.Login(user);
    if (gateway) {

    this.navCtrl.push(LobbyPage);
    }else {
      this.alert = true;
    }
  }
}
