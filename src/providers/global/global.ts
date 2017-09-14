import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Response, Headers, RequestOptions , Http } from '@angular/http';
import { Observer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
users: Array<any> = [];
user: any = {};
recette: any = {};
recettes: Array<any> = [];
  constructor(public http: Http) {
    console.log('Hello GlobalProvider Provider');
    this.users.push({
      email: 'ghassenjaffel@gmail.com',
      name: 'ghassen',
      password: '123456'
    });
   }

   Register(data) {
     this.users.push(data);
   }
   Login(user): any {
     console.log(this.users);
     
     let logged : boolean;
     this.users.forEach(usr => {
       if (user.email === usr.email && user.password === usr.password) {
        this.user = usr;
         logged = true;
       } else {
         logged = false;
       }
     });
     return logged
   }
  CreateRecette(data) {
    
   this.recettes.push(data);
   console.log(data, this.recettes);
  }
  GetRecettes() {
    return this.recettes
  }
  GetRecette(id) {
    this.recettes.forEach(recette => {
      if (recette.id === id) {
       this.recette = recette
      }
    });
    return this.recette
  }

}
