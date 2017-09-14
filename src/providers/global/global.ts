import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  constructor(public http: Http) {
    console.log('Hello GlobalProvider Provider');
  }
  RegisterAcount(data): Observable<any> {
    return this.http.post('67.207.78.53/login.php', data)
        .map((res) => res.json())
  }
}
