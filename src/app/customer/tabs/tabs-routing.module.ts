import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from '../tabs/tabs.page';

const routes: Routes = [
  {
    path: 'customer/tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab-products',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-products/tab-products.module').then(m => m.TabProductsPageModule)
          }
        ]
      },
      {
        path: 'tab-shopping-list',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-shopping-list/tab-shopping-list.module').then(m => m.TabShoppingListPageModule)
          }
        ]
      },
      {
        path: 'tab-supermarket-layout',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab-supermarket-layout/tab-supermarket-layout.module').then(m => m.TabSupermarketLayoutPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'customer/tabs/tab-products',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'customer/tabs/tab-products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
