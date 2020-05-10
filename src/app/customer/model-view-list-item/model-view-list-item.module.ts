import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModelViewListItemPageRoutingModule } from './model-view-list-item-routing.module';

import { ModelViewListItemPage } from './model-view-list-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModelViewListItemPageRoutingModule
  ],
  declarations: [ModelViewListItemPage]
})
export class ModelViewListItemPageModule {}
