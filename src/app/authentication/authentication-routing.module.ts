import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HierarchiesDetailsComponent } from '../hierarchies-details/hierarchies-details/hierarchies-details.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
