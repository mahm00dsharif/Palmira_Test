import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { InfoTabComponent } from './components/tabs/info-tab/info-tab.component';
import { ProfileTabComponent } from './components/tabs/profile-tab/profile-tab.component';
import { ResponsibilitiesTabComponent } from './components/tabs/responsibilities-tab/responsibilities-tab.component';
import { SubordinatesTabComponent } from './components/tabs/subordinates-tab/subordinates-tab.component';
import { UserTabComponent } from './components/tabs/user-tab/user-tab.component';
import { HierarchiesDetailsComponent } from './hierarchies-details/hierarchies-details.component';

const routes: Routes = [{
  path: '',
  component: HierarchiesDetailsComponent,
  children: [
    { path: 'infoTab', component: InfoTabComponent },
    { path: 'userTab', component: UserTabComponent },
    { path: 'responsibilitiesTab', component: ResponsibilitiesTabComponent },
    { 
      path: 'subordinatesTab',
      component: SubordinatesTabComponent
    },
    { path: 'profileTab', component: ProfileTabComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HierarchiesDetailsRoutingModule { }
