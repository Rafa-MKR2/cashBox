import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { AuthProvider } from '../../providers/auth/auth';
import { CadastroProdutosPage } from '../cadastro-produtos/cadastro-produtos';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {
  
  // SideMenu configPage
  rootPage = HomePage;

  usuario :any;

  constructor(public navCtrl: NavController, 
              public providersAuth: AuthProvider,
              public loading : LoadingController,
              public navParams: NavParams,
              public app : App) {

  }

  ionViewDidLoad(){
  this.usuario = this.providersAuth.afAuth.auth.currentUser.displayName;
  
  }


  ProdutosPage(){
    this.app.getRootNav().push(CadastroProdutosPage.name)
  }


  logOut(){

    let load = this.loading.create({ spinner: 'crescent',content: 'Aguarde...'}); load.present()

    this.providersAuth.signOutUser()
    .then(date=>{
      this.app.getRootNavs()[0].setRoot(LoginPage);
      
      window.localStorage.removeItem('usuario');
      console.log('exit');
      load.dismiss();
    })
    .catch(error=>{
      load.dismiss();

      console.log(error);
    })
  
  }

}
