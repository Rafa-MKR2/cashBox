import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { CadastroUserPage } from '../cadastro-user/cadastro-user';
import { AuthProvider } from '../../providers/auth/auth';
import { authFiebase } from '../../firebaseResponse/xhrFirebase';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private email : string ='carla@gmail.com';
  private password : string='123456';


  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public providerDB: FirebaseDbProvider,
              public alert : AlertController,
              public toast : ToastController,
              public loading : LoadingController,
              public providerAuth : AuthProvider) {

         

       }


  login(){
    if(!this.email || !this.password){
      let lerta = this.alert.create(authFiebase.login(undefined)).present();
      return; 
    }

       let load = this.loading.create({ spinner: 'crescent',content: 'Aguarde...'}); load.present()

    this.providerAuth.loginUser(this.email,this.password)
       .then(date=>{ 
          this.navCtrl.setRoot(TabsPage);
          let user: any = this.providerAuth.afAuth.auth.currentUser.displayName;
          window.localStorage.setItem('usuario', user);

         load.dismiss();

          })
       .catch(error=>{
          load.dismiss();
            let alert = authFiebase.login(error);
            let tost = this.toast.create(alert).present();
            return;
        });
}

  cadastro(){
    this.navCtrl.push(CadastroUserPage.name)
  }

}
