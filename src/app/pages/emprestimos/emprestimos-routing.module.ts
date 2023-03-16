import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmprestimosPage } from './emprestimos.page';

const routes: Routes = [
  {
    path: '',
    component: EmprestimosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmprestimosPageRoutingModule {}
