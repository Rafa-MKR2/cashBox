import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { DateHerper } from '../../Helpers/DateHelpers';


/**
 * Generated class for the CadastroVendasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-vendas',
  templateUrl: 'cadastro-vendas.html',
})
export class CadastroVendasPage {

  cliente:  string;
  dataVenda: any;
  descricao: any;
  

  constructor(public navCtrl: NavController,
              public alert : AlertController,
              public providerAuth: AuthProvider,
              public providerDB: FirebaseDbProvider,
              public navParams: NavParams) {

  }
 
 
  declararVenda(){
    
   let venda : any= {
     Cliente: this.cliente,
     data :   this.dataVenda,
     desc :   this.descricao,
     hora :   DateHerper.hora(),
     Auid :   this.providerAuth.afAuth.auth.currentUser.uid,
     Autor:   this.providerAuth.afAuth.auth.currentUser.displayName
   }
  
  this.providerDB.save("vendas/",venda).then(date=>{

    this.alert.create({title:'Sucesso!', message:'Venda realizada com sucesso!', buttons:['OK']}).present()
    console.log(venda)
   
  })
  .catch(error=>{
    this.alert.create({title:'Falha!', message:'Houve um erro  tente novamente', buttons:['OK']}).present()

    console.log(error);
  })
  
  }

}
