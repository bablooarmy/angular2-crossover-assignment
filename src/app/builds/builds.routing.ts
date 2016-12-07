import { Routes, RouterModule } from '@angular/router';

import { BuildsComponent } from './builds.component';

const buildsRoutes: Routes = [
  { path: 'builds', component: BuildsComponent, pathMatch: 'full' }
];

export const buildsRouting = RouterModule.forChild(buildsRoutes);
