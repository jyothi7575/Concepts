import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrationRoutingModule } from './integration-routing.module';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
   DirectivesComponent
  ],
  imports: [
    CommonModule,
    IntegrationRoutingModule,
  ]
})
export class IntegrationModule { }
