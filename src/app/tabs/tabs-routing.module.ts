import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'demand',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../demand/demand.module').then(m => m.DemandPageModule)
          }
        ]
      },
      {
        path: 'supply',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('../supply/supply.module').then(m => m.SupplyPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/demand',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/demand',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
