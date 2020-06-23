import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path:'create',
    loadChildren: () => import('../form/form.module').then( m => m.FormPageModule).catch((ex) => { console.log(ex)})
  },
  {
    path:':id',
    loadChildren: () => import('../form/form.module').then( m => m.FormPageModule).catch((ex) => { console.log(ex)})
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
