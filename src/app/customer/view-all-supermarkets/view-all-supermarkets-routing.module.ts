import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllSupermarketsPage } from './view-all-supermarkets.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllSupermarketsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewAllSupermarketsPageRoutingModule {}
