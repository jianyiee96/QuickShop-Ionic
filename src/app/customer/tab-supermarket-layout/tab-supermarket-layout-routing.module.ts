import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabSupermarketLayoutPage } from './tab-supermarket-layout.page';

const routes: Routes = [
  {
    path: '',
    component: TabSupermarketLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabSupermarketLayoutPageRoutingModule {}
