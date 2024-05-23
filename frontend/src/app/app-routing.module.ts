import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ItemsComponent } from './items/items.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { AdminDashboardComponent } from './modules/admin/admin-dashboard/admin-dashboard.component';
import { ViewComponent } from './view/view.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Routes = [
{path:"",component:HomeComponent},
{path:"user/main",component:MainNavComponent},
{path:"user/login",component:LoginComponent},
{path:"user/register",component:RegisterComponent},
{path:"user/items",component:ItemsComponent},
{path:"user/forgot",component:ForgotComponent},
{path:'user/items',component:ItemsComponent},
{path:'user/view/:id',component:ViewComponent},
{path:"reset/:token",component:ResetComponent},
{path:"user/card",component:CardComponent},
{path:"user/footer",component:FooterComponent},
{path:"user/wish",component:WishlistComponent},
{path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
{path:"admin/dashboard",component:AdminDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
