import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarfrutaPageRoutingModule } from './registrarfruta-routing.module';

import { RegistrarfrutaPage } from './registrarfruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarfrutaPageRoutingModule
  ],
  declarations: [RegistrarfrutaPage]
})
export class RegistrarfrutaPageModule {}
