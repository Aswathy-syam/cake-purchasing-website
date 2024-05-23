import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { GraphComponent } from './graph/graph.component';
import { ChartComponent } from './chart/chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPipePipe } from './transform/user.pipe.pipe';
import { ProductsPipe } from './transform/products.pipe';






@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    MainNavComponent,
    DashboardContentComponent,
    GraphComponent,
    ChartComponent,
    AdminProductComponent,
    AdminUsersComponent,
    AdminAddComponent,
    AdminEditComponent,
    UserPipePipe,
    ProductsPipe,
    
    
    
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HighchartsChartModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
