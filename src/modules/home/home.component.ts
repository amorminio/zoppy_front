
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgIconComponent } from '@ng-icons/core';
import { phosphorHouse, phosphorUsers, phosphorShoppingCart,phosphorBarcode } from '@ng-icons/phosphor-icons/regular';

@Component({
    selector: 'home',
    standalone: true,
    imports: [RouterOutlet, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, NgIconComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {

  // Icons
  homeIcon = phosphorHouse;
  usersIcon = phosphorUsers;
  cartIcon = phosphorShoppingCart;
  productIcon = phosphorBarcode;

  constructor(private router: Router) {}

  navigate(link: any) {
    this.router.navigate([link])
  }
}
