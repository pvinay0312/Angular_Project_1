import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './component/admin/admin.component';
import { AdminpanelComponent } from './component/adminpanel/adminpanel.component';

const routes: Routes = [
  { path: "admin", component: AdminComponent },
  { path: "adminPanel", component: AdminpanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
