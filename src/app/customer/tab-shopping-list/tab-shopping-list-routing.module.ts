import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabShoppingListPage } from './tab-shopping-list.page';

const routes: Routes = [
  {
    path: '',
    component: TabShoppingListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabShoppingListPageRoutingModule {}
