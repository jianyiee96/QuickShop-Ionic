import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabSupermarketLayoutPageRoutingModule } from './tab-supermarket-layout-routing.module';

import { TabSupermarketLayoutPage } from './tab-supermarket-layout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabSupermarketLayoutPageRoutingModule
  ],
  declarations: [TabSupermarketLayoutPage]
})
export class TabSupermarketLayoutPageModule {}
