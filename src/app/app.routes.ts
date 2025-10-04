import { Routes } from '@angular/router';
import { HomeComponent } from '../modules/home/home.component';
import { ClientComponent } from '../modules/client/client.component';
import { ProductComponent } from '../modules/product/product.component';
import { OrderComponent } from '../modules/order/order.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'products', component: ProductComponent },
];
