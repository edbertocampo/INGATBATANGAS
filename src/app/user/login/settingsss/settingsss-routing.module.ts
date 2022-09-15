import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsssPage } from './settingsss.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsssPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsssPageRoutingModule {}
