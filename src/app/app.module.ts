import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from "../pages/register/register";
import { LobbyPage } from "../pages/lobby/lobby";
import { LandingPage } from "../pages/landing/landing";
import { CreateRecipPage } from "../pages/create-recip/create-recip";
import { Camera } from '@ionic-native/camera';
import { PreviewPage } from "../pages/preview/preview";
import { GlobalProvider } from '../providers/global/global';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LobbyPage,
    LandingPage,
    CreateRecipPage,
    PreviewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LobbyPage,
    LandingPage,
    CreateRecipPage,
    PreviewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalProvider,
    HttpModule
  ]
})
export class AppModule {}
