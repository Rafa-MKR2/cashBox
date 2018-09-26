import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalVendasPage } from './modal-vendas';

@NgModule({
  declarations: [
    ModalVendasPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalVendasPage),
  ],
  exports: [
    ModalVendasPage
  ]
})
export class ModalVendasPageModule {}
