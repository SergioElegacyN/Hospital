import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientGridRoutingModule } from './patient-grid-routing.module';
import { PatientGridComponent } from './patient-grid.component';


@NgModule({
  declarations: [PatientGridComponent],
  imports: [
    CommonModule,
    PatientGridRoutingModule
  ]
})
export class PatientGridModule { }
