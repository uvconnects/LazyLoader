import {NgModule, ModuleWithProviders, Injectable} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
//  import {AuthorizationGuard as AuthGuard } from './Services/authorization.guard';
Injectable();
export const appRoutes: Routes = [
 { path: '', redirectTo: 'Home/index', pathMatch: 'full'},
  { path: 'Home/index', component: HomeComponent},
  { path: 'Home/about', loadChildren: './pages/about/about.module#AboutModule'}
];

NgModule({ imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
  //  providers: [AuthGuard]
});

export const routing: ModuleWithProviders =  RouterModule.forRoot(appRoutes);
