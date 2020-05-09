import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabShoppingListPageRoutingModule } from './tab-shopping-list-routing.module';

import { TabShoppingListPage } from './tab-shopping-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabShoppingListPageRoutingModule
  ],
  declarations: [TabShoppingListPage]
})
export class TabShoppingListPageModule {}
