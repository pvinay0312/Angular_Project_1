import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdminpanelComponent } from './component/adminpanel/adminpanel.component';
import { HomeComponent } from './component/home/home.component';
import { RegisterComponent } from './component/register/register.component';
import { UserSignInComponent } from './component/user-sign-in/user-sign-in.component';
import { UserpanelComponent } from './component/userpanel/userpanel.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "adminSignIn", component: AdminComponent },
  { path: "adminPanel", component: AdminpanelComponent },
  { path: "register", component: RegisterComponent },
  { path: "userSignIn", component: UserSignInComponent },
  { path: "userPanel", component: UserpanelComponent },
  { path: "add", component: AddproductComponent },
  { path: "update", component: UpdateproductComponent },
  { path: "delete", component: DeleteproductComponent },
  { path: "view", component: ViewproductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
