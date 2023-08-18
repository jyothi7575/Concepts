import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EBMRoutingModule } from './ebm-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    EBMRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class EBMModule { }
