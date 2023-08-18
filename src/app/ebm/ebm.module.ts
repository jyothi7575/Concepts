import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EBMRoutingModule } from './ebm-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientsComponent } from './patients/patients.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PatientsComponent
  ],
  imports: [
    CommonModule,
    EBMRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class EBMModule { }
