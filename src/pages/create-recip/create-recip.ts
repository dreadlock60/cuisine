import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { GlobalProvider } from '../../providers/global/global';
import { LandingPage } from '../landing/landing';

/**
 * Generated class for the CreateRecipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-recip',
  templateUrl: 'create-recip.html',
})
export class CreateRecipPage {
  captureDataUrl: string = '';
  ingredientName: string = '';
  ingredientPoidsNbr: number = 0;
  title: string = '';
  discription: string = '';
  ingredientPoidsType: string = 'kg';
  ingredients: Array<any> = [];
  constructor(public element:ElementRef,private camera: Camera,public navCtrl: NavController, public navParams: NavParams, public global: GlobalProvider) {
    this.element = element;
  }


capture() {
    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
  getFromGalery() {

    let cameraOptions: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,      
      quality: 50,     
      correctOrientation: true
    }
  
    this.camera.getPicture(cameraOptions)
      .then(file_uri => this.captureDataUrl = 'data:image/jpeg;base64,' + file_uri, 
      err => console.log(err));   
  }
  ngAfterViewInit(){
    this.element.nativeElement.querySelector("textarea").style.height = "100%";
  }
  deleteImg() {
    this.captureDataUrl = '';
  }
  addIngredient() {
    this.ingredients.push({
      name: this.ingredientName,
      poids: this.ingredientPoidsNbr + ' ' + this.ingredientPoidsType
    });
    this.ingredientName = '';
    this.ingredientPoidsNbr = 0;
    this.ingredientPoidsType = 'kg';
  }
  addRecette() {
    let id = Math.round(Math.random() * 10000000)
    let recette = {
      ingredients: this.ingredients,
      title: this.title,
      discription: this.discription,
      creator: this.global.user,
      id: id

    }
    this.global.CreateRecette(recette);
    this.navCtrl.push(LandingPage);
  }
}
