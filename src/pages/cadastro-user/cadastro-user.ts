import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TabsPage } from '../tabs/tabs';
import { authFiebase } from '../../firebaseResponse/xhrFirebase';

/**
 * Generated class for the CadastroUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-user',
  templateUrl: 'cadastro-user.html',
})
export class CadastroUserPage {

 private nome :string = '';
 private email:string = '';
 private senha:string = '';

  constructor(public navCtrl: NavController,
              public alertCtrl :AlertController,
              public toast : ToastController,
              public providerAuth: AuthProvider) {
  }

  cadastrar(){

    if(this.nome==='' || this.email ==='' || this.senha ===''){

      let tost = this.alertCtrl.create(authFiebase.cadastro(undefined)).present();
      return; 
    }
   
    this.providerAuth.cadastarUser(this.email,this.senha)
    .then(date=>{
      let user = this.providerAuth.afAuth.auth.currentUser.updateProfile({
        displayName: this.nome,
        photoURL: "../../assets/img/appicon.png"
         });

         window.localStorage.setItem('usuario', this.nome);
         this.providerAuth.afAuth.auth.currentUser.sendEmailVerification();
          this.navCtrl.setRoot(TabsPage);

    })
    .catch(error=>{
      let alert = authFiebase.cadastro(error);
      let tost = this.alertCtrl.create(alert).present();
      return;

    })
  }

}
