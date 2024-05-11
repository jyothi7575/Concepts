import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';


const routes: Routes = [
  { path: 'Direvtives', component: DirectivesComponent, pathMatch: 'full' },


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrationRoutingModule { }
