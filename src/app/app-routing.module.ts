import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';

const routerOptions: ExtraOptions = {
  useHash: true,
  anchorScrolling: 'enabled'
};

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
