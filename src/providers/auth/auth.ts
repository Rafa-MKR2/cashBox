import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient,
    public afAuth: AngularFireAuth) { }

  
 
    loginUser(logemail,logpass){
      return this.afAuth.auth.signInWithEmailAndPassword(logemail,logpass)
    }

    signOutUser(){
      return this.afAuth.auth.signOut()
    }

  

    cadastarUser(email,pass){
      return this.afAuth.auth.createUserWithEmailAndPassword(email,pass);
    }
}
