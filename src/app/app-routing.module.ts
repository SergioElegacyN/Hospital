import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'content/welcome', loadChildren: () => import('./pages/hospital/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'content/goal', loadChildren: () => import('./pages/hospital/goal/goal.module').then(m => m.GoalModule) },
  { path: 'content/patient-grid', loadChildren: () => import('./pages/hospital/patient-grid/patient-grid.module').then(m => m.PatientGridModule) },
  { path: 'content/history', loadChildren: () => import('./pages/hospital/history/history.module').then(m => m.HistoryModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
