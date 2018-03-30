import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform, Sanitizer, ViewContainerRef, ApplicationRef, Component, Injectable  } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpBackend, HttpHeaders, HttpParams, HttpClient, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import 'hammerjs';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutModule } from './pages/about/about.module';
import { routing } from './router/routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
 ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
