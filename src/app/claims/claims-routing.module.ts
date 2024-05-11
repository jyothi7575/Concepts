import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsProgressComponent } from './claims-progress/claims-progress.component';
import { ClaimsProcessedComponent } from './claims-processed/claims-processed.component';
import { ClaimsRaisedComponent } from './claims-raised/claims-raised.component';
import { ClaimsRejectedComponent } from './claims-rejected/claims-rejected.component';
import { ProgramsRxjsComponent } from './programs-rxjs/programs-rxjs.component';

const routes: Routes = [
  { path: 'ClaimsProgress', component: ClaimsProgressComponent, pathMatch: 'full' },
  { path: 'ClaimsProcessed', component: ClaimsProcessedComponent, pathMatch: 'full' },
  { path: 'ClaimsRaised', component: ClaimsRaisedComponent, pathMatch: 'full' },
  { path: 'ClaimsRejected', component: ClaimsRejectedComponent, pathMatch: 'full' },
  { path: 'programRxjs', component: ProgramsRxjsComponent, pathMatch: 'full' },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimsRoutingModule { }
