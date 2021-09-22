import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './component/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminpanelComponent } from './component/adminpanel/adminpanel.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { UserSignInComponent } from './component/user-sign-in/user-sign-in.component';
import { UserpanelComponent } from './component/userpanel/userpanel.component';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './component/addproduct/addproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AdminpanelComponent,
    RegisterComponent,
    HomeComponent,
    UserSignInComponent,
    UserpanelComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
