import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
//import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'


//import { Observable } from 'rxjs';

/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

export class FirebaseDbProvider {


  constructor(public http: HttpClient, 
              public db :AngularFireDatabase) {
   
  }



  getAll(PATH:string) {
    return this.db.list(PATH)
      .snapshotChanges()
      .map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      })
  }
 

  get(PATH:string, key: string) {
    return this.db.object(PATH + key).snapshotChanges()
      .map(c => {
        return { key: c.key, ...c.payload.val() };
      });
  }

  save(PATH: string ,produto: any) {
    return new Promise((resolve, reject) => {
      if (produto.key) {
        this.db.list(PATH)
          .update(produto.key, produto)
          .then(() => resolve())
          .catch((e) => reject(e));
      } else {
        this.db.list(PATH)
          .push(produto)
          .then(() => resolve());
      }
    })
  }
 


  remove(PATH , key: string) {
    return this.db.list(PATH).remove(key);
  }

}
