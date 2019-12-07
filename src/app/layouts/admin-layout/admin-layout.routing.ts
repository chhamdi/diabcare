import { Routes } from '@angular/router';

import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { HomeComponent } from 'app/pages/home/home.component';
import { DailyDietComponent } from 'app/pages/daily-diet/daily-diet.component';
import { RecommendedDietComponent } from 'app/pages/recommended-diet/recommended-diet.component';
import { RestaurantsListComponent } from 'app/pages/restaurants-list/restaurants-list.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'home',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'daily-diet',          component: DailyDietComponent },
    { path: 'recommended-diet',           component: RecommendedDietComponent },
    { path: 'restaurants-list',  component: RestaurantsListComponent },
    { path: 'upgrade',        component: UpgradeComponent },

];
