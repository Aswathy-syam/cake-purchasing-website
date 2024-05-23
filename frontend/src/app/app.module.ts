import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { ReviewComponent } from './review/review.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { ItemsComponent } from './items/items.component';
import { SwiperModule } from 'swiper/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FootComponent } from './foot/foot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetComponent } from './reset/reset.component';
import { ItemsnavComponent } from './itemsnav/itemsnav.component';
import { ViewComponent } from './view/view.component';
import { CardComponent } from './card/card.component';
import { PipePipe } from './transform/pipe.pipe';
import { WishlistComponent } from './wishlist/wishlist.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ReviewComponent,
    FooterComponent,
    ProductsComponent,
    ItemsComponent,
    MainNavComponent,
    FootComponent,
    ForgotComponent,
    ResetComponent,
    ItemsnavComponent,
    ViewComponent,
    CardComponent,
    PipePipe,
    WishlistComponent
   
   
  ],
  imports: [
   
    BrowserModule,
    AppRoutingModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
   
   
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
