import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemdetailsComponent } from './itemdetails/itemdetails.component';


@NgModule({
  declarations: [
    ItemdetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ItemdetailsComponent
  ]
})
export class ItemModule { }
