import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ATMComponent } from './atm/atm.component';

const routes: Routes = [
  { path: 'atm', component: ATMComponent },
  { path: '', redirectTo: '/atm', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
