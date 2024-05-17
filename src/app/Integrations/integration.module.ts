import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntegrationRoutingModule } from './integration-routing.module';
import { DirectivesComponent } from './directives/directives.component';
import { ExinjectableComponent } from './exinjectable/exinjectable.component';

@NgModule({
  declarations: [
   DirectivesComponent,
   ExinjectableComponent
  ],
  imports: [
    CommonModule,
    IntegrationRoutingModule,
  ]
})
export class IntegrationModule { }
