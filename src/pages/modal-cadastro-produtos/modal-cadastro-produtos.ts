import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, DateTime } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { AuthProvider } from '../../providers/auth/auth';
import { DateHerper } from '../../Helpers/DateHelpers';

/**
 * Generated class for the ModalCadastroProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-cadastro-produtos',
  templateUrl: 'modal-cadastro-produtos.html',
})
export class ModalCadastroProdutosPage {

  private nomeProduto: string;
  private quantidade: number = 0;
  private codigo : string;
  private categoria: string;
  private preco: number = 0.00;
  private autor :string ;



  constructor(public navCtrl: NavController,
              private providerAuth: AuthProvider,
              private providerDB: FirebaseDbProvider,
              public  view: ViewController,
              public  navParams: NavParams) {
  
         this.autor = this.providerAuth.afAuth.auth.currentUser.displayName;
    }



  adicionarProduto(){

    let produto :any= { 
      nome:       this.nomeProduto, 
      quantidade: this.quantidade,
      preco:      this.preco,
      codigo:     this.codigo,
      data:       new Date().getTime(),
      Horaf:      DateHerper.hora(),
      categoria: this.categoria ,
      autor:      this.autor


      }
   
    this.providerDB.save('produtos/', produto).then(()=>{
     
     
      this.limparFormulario();

      }).catch(error=>{
          console.log(error);
      })
    

  }



  limparFormulario(){
    this.nomeProduto = '';
    this.quantidade = 0;
    this.preco = 0.0;
    this.codigo = '';
  }


  voltar(){
    this.view.dismiss()
  }

}
