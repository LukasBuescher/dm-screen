import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterdetailsComponent } from './characterdetails/characterdetails.component';
import { CharactersComponent } from './characters/characters.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent},  
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: CharacterdetailsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
