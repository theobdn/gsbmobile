import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FichefraisProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FichefraisProvider {

  constructor(public http: HttpClient) {
    
  }
 getAll(){
    return this.http.get('http://localhost/AppliWeb%20GSB/gsbMVC%20stable/gsbMVC/fiche_frais.php');
 }
}
