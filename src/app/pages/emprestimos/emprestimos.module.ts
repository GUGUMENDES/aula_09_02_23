import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmprestimosPageRoutingModule } from './emprestimos-routing.module';

import { EmprestimosPage } from './emprestimos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmprestimosPageRoutingModule
  ],
  declarations: [EmprestimosPage]
})
export class EmprestimosPageModule {}
