import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroVendasPage } from './cadastro-vendas';

@NgModule({
  declarations: [
    CadastroVendasPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroVendasPage),
  ],
  exports:[
    CadastroVendasPage
  ]
})
export class CadastroVendasPageModule {}
