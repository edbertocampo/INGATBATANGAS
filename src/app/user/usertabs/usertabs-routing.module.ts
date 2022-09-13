import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsertabsPage } from './usertabs.page';

const routes: Routes = [
  {
    path: 'usertabs',
    component: UsertabsPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m=> m.HomePageModule)
      },
      {
        path: 'circle',
        loadChildren: () => import('../circle/circle.module').then(m=> m.CirclePageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../notification/notification.module').then(m=> m.NotificationPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m=> m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/usertabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/usertabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class UsertabsPageRoutingModule {}
