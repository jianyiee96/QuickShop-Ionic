import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAllSupermarketsPageRoutingModule } from './view-all-supermarkets-routing.module';

import { ViewAllSupermarketsPage } from './view-all-supermarkets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAllSupermarketsPageRoutingModule
  ],
  declarations: [ViewAllSupermarketsPage]
})
export class ViewAllSupermarketsPageModule {}
