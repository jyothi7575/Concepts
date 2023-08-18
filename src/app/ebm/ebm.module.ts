import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EBMRoutingModule } from './ebm-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    EBMRoutingModule
  ]
})
export class EBMModule { }
