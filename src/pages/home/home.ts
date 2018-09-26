import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import { FirebaseDbProvider } from '../../providers/firebase-db/firebase-db';
import { CarrinhoPage } from '../carrinho/carrinho';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  private pesquisaHome:string;
  private produtos: Observable<any>;
  public  resultadosView = [];


  constructor(public navCtrl: NavController,
              public providerDB :FirebaseDbProvider,
              public app: App) {

  }

  buscarItem(){
    
    this.produtos = this.providerDB.getAll('produtos/')
  
    let resultados = [];
    
    this.produtos.subscribe(db=>{
        
          db.map(busca=>{
              if(this.pesquisaHome===''){
                return;
              }
               if(
                  busca.nome.toUpperCase()===this.pesquisaHome.toUpperCase() ||
                  busca.nome.replace(/\s/g, '').toUpperCase()===this.pesquisaHome.replace(/\s/g, '').toUpperCase() ||
                  busca.categoria.toUpperCase()===this.pesquisaHome.toUpperCase() ||
                  busca.codigo==this.pesquisaHome ||
                  busca.codigo==this.pesquisaHome  ||
                  busca.preco ==this.pesquisaHome
                   ){

                  resultados.push(busca)
                 console.log(busca)
                }
            })  
          
          
        
      },
      error => console.log(error));

  
     this.resultadosView = resultados                
      if(this.resultadosView.length===0){
        console.log('Não foi possivel encontrar item')
      }
  }

  carrinho(){
    this.app.getRootNav().push(CarrinhoPage.name)
  }

}
