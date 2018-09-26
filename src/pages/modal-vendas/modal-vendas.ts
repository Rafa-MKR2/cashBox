import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalVendasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-vendas',
  templateUrl: 'modal-vendas.html',
})
export class ModalVendasPage {



  itens :any = this.navParams.get('itens');

  constructor(public navCtrl: NavController, 
              public viewCtrl: ViewController,
              public navParams: NavParams) {

        console.log(this.itens)
  }



  voltar(){
    this.viewCtrl.dismiss();

  }

}
