import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate } from './resources/services/auth-guard.service';

import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'dashboard', canActivate: [canActivate],
    loadChildren: ()=> import('./views/dashboard/dashboard.module').then(m=> m.DashboardModule)
  },
  { path: '**', redirectTo: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }


