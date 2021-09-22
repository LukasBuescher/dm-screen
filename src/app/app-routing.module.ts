import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterdetailsComponent } from './characterdetails/characterdetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'character/:id', component: CharacterdetailsComponent },
  { path: '', redirectTo: '/character/1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
