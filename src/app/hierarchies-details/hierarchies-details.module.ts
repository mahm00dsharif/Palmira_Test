import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HierarchiesDetailsRoutingModule } from './hierarchies-details-routing.module';
import { HierarchiesDetailsComponent } from './hierarchies-details/hierarchies-details.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MenuComponent } from './components/menu/menu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { StatisticsCardComponent } from './components/statistics-card/statistics-card.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { InfoTabComponent } from './components/tabs/info-tab/info-tab.component';
import { UserTabComponent } from './components/tabs/user-tab/user-tab.component';
import { ResponsibilitiesTabComponent } from './components/tabs/responsibilities-tab/responsibilities-tab.component';
import { SubordinatesTabComponent } from './components/tabs/subordinates-tab/subordinates-tab.component';
import { ProfileTabComponent } from './components/tabs/profile-tab/profile-tab.component';


@NgModule({
  declarations: [
    HierarchiesDetailsComponent,
    UserInfoComponent,
    MenuComponent,
    BreadcrumbComponent,
    StatisticsCardComponent,
    TabsComponent,
    InfoTabComponent,
    UserTabComponent,
    ResponsibilitiesTabComponent,
    SubordinatesTabComponent,
    ProfileTabComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    HierarchiesDetailsRoutingModule
  ]
})
export class HierarchiesDetailsModule { }
