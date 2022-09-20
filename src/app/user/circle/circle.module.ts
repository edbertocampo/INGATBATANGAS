import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CirclePageRoutingModule } from './circle-routing.module';

import { CirclePage } from './circle.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CirclePageRoutingModule
  ],
  declarations: [CirclePage],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CirclePageModule {}
