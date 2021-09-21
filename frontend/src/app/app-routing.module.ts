import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { AdminpanelComponent } from './component/adminpanel/adminpanel.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path: "login", component: AdminComponent },
  { path: "adminPanel", component: AdminpanelComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
