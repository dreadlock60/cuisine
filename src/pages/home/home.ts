import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { LobbyPage } from "../lobby/lobby";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public rootPage: any = HomePage;
  userName: string = 'me';
  password: string = 'me2';
  userNameInput : string = '';
  passwordInput : string = '';
  constructor(public navCtrl: NavController) {

  }
goToRegisterPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(RegisterPage);
  }
  goToLobbyPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(LobbyPage);
  }
}
