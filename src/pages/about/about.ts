import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ModalVendasPage } from '../modal-vendas/modal-vendas';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

   vendas: Observable<any>;
   

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public providerDB : FirebaseDbProvider) {

    this.vendas = this.providerDB.getAll('vendas/');

  }

  ItemVendidos(itens:any){
    let itensVendidos = this.modalCtrl.create(ModalVendasPage.name, { itens: itens });
    
        itensVendidos.present();
  }



}
