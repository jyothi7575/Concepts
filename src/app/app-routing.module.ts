import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { PatientsComponent } from './patients/patients.component';
import { ToastpopupComponent } from './Popups/toastpopup/toastpopup.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent, pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'Patients', component: PatientsComponent, pathMatch: 'full' },
  { path: 'PatientRegistartion', component: PatientRegistrationComponent, pathMatch: 'full' },
  {
    path: 'Claims',
    loadChildren: () => import('../app/claims/claims.module').then(m => m.ClaimsModule)
  },
  {
    path: 'Integration',
    loadChildren: () => import('../app/Integrations/integration.module').then(m => m.IntegrationModule)
  },
  { path: 'Toastpopup', component: ToastpopupComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
