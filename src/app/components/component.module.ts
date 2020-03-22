import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShowCardComponent } from './show-card/show-card.component';



@NgModule({
  declarations: [ShowCardComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ],
  exports: [ShowCardComponent]
})
export class ComponentModule { }
