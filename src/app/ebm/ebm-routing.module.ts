import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';

const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'Patients', component: PatientsComponent, pathMatch: 'full' },
  { path: 'PatientRegistartion', component: PatientRegistrationComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EBMRoutingModule { }
