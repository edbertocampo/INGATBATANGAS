import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsssPageRoutingModule } from './settingsss-routing.module';

import { SettingsssPage } from './settingsss.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsssPageRoutingModule
  ],
  declarations: [SettingsssPage]
})
export class SettingsssPageModule {}
