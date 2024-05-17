import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimsRaisedComponent } from './claims-raised/claims-raised.component';
import { ClaimsProgressComponent } from './claims-progress/claims-progress.component';
import { ClaimsRejectedComponent } from './claims-rejected/claims-rejected.component';
import { ClaimsProcessedComponent } from './claims-processed/claims-processed.component';
import { ClaimsRoutingModule } from './claims-routing.module';
import { ProgramsRxjsComponent } from './programs-rxjs/programs-rxjs.component';
import { SamplePipePipe } from '../pipes/sample-pipe.pipe';

@NgModule({
  declarations: [
    ClaimsRaisedComponent,
    ClaimsProgressComponent,
    ClaimsRejectedComponent,
    ClaimsProcessedComponent,
    ProgramsRxjsComponent,
    SamplePipePipe
  ],
  imports: [
    CommonModule,
    ClaimsRoutingModule,
  ]
})
export class ClaimsModule { }
