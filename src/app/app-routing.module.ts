import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'contas',
    loadChildren: () => import('./pages/contas/contas.module').then( m => m.ContasPageModule)
  },

  {
    path: 'cartoes',
    loadChildren: () => import('./pages/cartoes/cartoes.module').then( m => m.CartoesPageModule)
  },
  {
    path: 'emprestimos',
    loadChildren: () => import('./pages/emprestimos/emprestimos.module').then( m => m.EmprestimosPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
