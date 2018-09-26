import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalCadastroProdutosPage } from './modal-cadastro-produtos';

@NgModule({
  declarations: [
    ModalCadastroProdutosPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalCadastroProdutosPage),
  ],
  exports:[
    ModalCadastroProdutosPage
  ]
})
export class ModalCadastroProdutosPageModule {}
