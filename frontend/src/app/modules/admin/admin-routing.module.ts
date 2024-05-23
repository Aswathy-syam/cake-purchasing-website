import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';



const routes: Routes = [{ path: '', component: AdminComponent },

{path:"dashboard",component:AdminDashboardComponent},
{path:"product",component:AdminProductComponent},
{path:"users",component:AdminUsersComponent},
{path:"add",component:AdminAddComponent},
{path:"edit/:id",component:AdminEditComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
