import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabProductsPageRoutingModule } from './tab-products-routing.module';

import { TabProductsPage } from './tab-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabProductsPageRoutingModule
  ],
  declarations: [TabProductsPage]
})
export class TabProductsPageModule {}
