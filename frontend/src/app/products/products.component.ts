import { Component, ViewEncapsulation  } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ProductsComponent {

}
