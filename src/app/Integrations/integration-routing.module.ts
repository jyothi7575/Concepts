import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { ExinjectableComponent } from './exinjectable/exinjectable.component';


const routes: Routes = [
  { path: 'Direvtives', component: DirectivesComponent, pathMatch: 'full' },

  { path: 'injectable', component: ExinjectableComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntegrationRoutingModule { }
