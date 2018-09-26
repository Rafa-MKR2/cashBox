import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, AlertController } from 'ionic-angular';
import { ModalCadastroProdutosPage } from '../modal-cadastro-produtos/modal-cadastro-produtos';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the CadastroProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-produtos',
  templateUrl: 'cadastro-produtos.html',
})
export class CadastroProdutosPage {

 private produtoUrl:string = 'produtos/';
 private produtos: Observable<any>;

  constructor(public navCtrl: NavController,
              public alert : AlertController,
              public loanding : LoadingController,
              public modalCtrl: ModalController,
             private providerDB: FirebaseDbProvider,
              public navParams: NavParams) {

        this.init();

  }


  init(){
   let load = this.loanding.create({content:'Carregando produtos'}); load.present();

    if(this.produtos = this.providerDB.getAll(this.produtoUrl)){
        console.log('carregado');
        load.dismiss()

    }else{
      let alerta = this.alert.create({title:'Falha', subTitle:'Não foi possive obter lista de Produtos',buttons:['Entendi']})
    
    }
  }
  
  delete(key:string){
    this.providerDB.remove(this.produtoUrl, key).then(()=>{
      console.log('sucesso');
    })
    .catch(error=>{
      console.log(error)
    })
  }

  modalProdutos(){
    let profileModal = this.modalCtrl.create(ModalCadastroProdutosPage.name);

    profileModal.present();
  }

}
