import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'view-all-supermarkets',
    loadChildren: () => import('./customer/view-all-supermarkets/view-all-supermarkets.module').then(m => m.ViewAllSupermarketsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./customer/tabs/tabs.module').then(m => m.TabsPageModule)
  },  {
    path: 'model-view-list-item',
    loadChildren: () => import('./customer/model-view-list-item/model-view-list-item.module').then( m => m.ModelViewListItemPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
