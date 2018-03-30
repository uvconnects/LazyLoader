
import { NgModule } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';
/*          import {AuthorizationGuard as AuthGuard } from '../Services/authorization.guard';, canActivate: [AuthGuard]  */
         import { AboutComponent } from './about.component';
const routes: Routes = [
  { path: '',
    component: AboutComponent,
    children: [
      { path: 'Home/about',  component: AboutComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
  // providers: [AuthGuard]
})

export class AboutRoutingModule {}
