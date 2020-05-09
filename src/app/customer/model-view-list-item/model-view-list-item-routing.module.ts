import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelViewListItemPage } from './model-view-list-item.page';

const routes: Routes = [
  {
    path: '',
    component: ModelViewListItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelViewListItemPageRoutingModule {}
