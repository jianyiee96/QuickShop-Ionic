import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabProductsPage } from './tab-products.page';

const routes: Routes = [
  {
    path: '',
    component: TabProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabProductsPageRoutingModule {}
