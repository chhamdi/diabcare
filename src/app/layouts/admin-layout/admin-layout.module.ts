import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { HomeComponent }       from '../../pages/home/home.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { DailyDietComponent }           from '../../pages/daily-diet/daily-diet.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecommendedDietComponent } from 'app/pages/recommended-diet/recommended-diet.component';
import { RestaurantsListComponent } from 'app/pages/restaurants-list/restaurants-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    DailyDietComponent,
    RecommendedDietComponent,
    RestaurantsListComponent
  ]
})

export class AdminLayoutModule {}
