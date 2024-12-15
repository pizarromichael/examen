import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarfrutaPage } from './registrarfruta.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarfrutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarfrutaPageRoutingModule {}
