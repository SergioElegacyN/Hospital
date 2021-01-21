import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientGridComponent } from './patient-grid.component';

const routes: Routes = [{ path: '', component: PatientGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientGridRoutingModule { }
