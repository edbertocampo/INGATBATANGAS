import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome-screen',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./user/usertabs/usertabs.module').then( m => m.UsertabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./user/login/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'welcome-screen',
    loadChildren: () => import('./user/welcome/welcome-screen/welcome-screen.module').then( m => m.WelcomeScreenPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./user/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./user/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'circle',
    loadChildren: () => import('./user/circle/circle.module').then( m => m.CirclePageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./user/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./user/profile/profile.module').then( m => m.ProfilePageModule)
  },  {
    path: 'forgotpass',
    loadChildren: () => import('./user/login/forgotpass/forgotpass.module').then( m => m.ForgotpassPageModule)
  },
  {
    path: 'resetpass',
    loadChildren: () => import('./user/login/resetpass/resetpass.module').then( m => m.ResetpassPageModule)
  },
  {
    path: 'settingsss',
    loadChildren: () => import('./user/login/settingsss/settingsss.module').then( m => m.SettingsssPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
