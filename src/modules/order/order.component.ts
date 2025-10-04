import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { phosphorShoppingCart, phosphorEmpty, phosphorPlusCircle } from '@ng-icons/phosphor-icons/regular';
import { NgIconComponent } from "@ng-icons/core";
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

import { CreateOrderComponent } from './components/create-order/create-order.component';
import { ApiZoppyService } from '../../services/api-zoppy.service';
import { DataTableComponent } from '../../components/data-table/data-table.component';


@Component({
  selector: 'app-order',
  standalone: true,
  providers: [ApiZoppyService],
  imports: [NgIconComponent, MatButtonModule, MatRippleModule, MatDialogModule, FormsModule, DataTableComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {

  readonly dialog = inject(MatDialog);
  dataSource: any[] = [];
  filteredDataSource: any[] = [];

  // !Icons
  emptyIcon = phosphorEmpty;
  cartIcon = phosphorShoppingCart;
  plusIcon = phosphorPlusCircle;
  searchField: string = '';

  constructor(private apiZoppyService: ApiZoppyService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.apiZoppyService.order_list().subscribe((response: any) => {
      if (response) {
        this.dataSource = response;
        this.filteredDataSource = response;
      }
    });
  }

  filterData(){
    this.filteredDataSource = this.dataSource.filter((item: any) => {
      return Object.keys(item).some(key => {
        const value = item[key]

        return value && String(value).toLowerCase().includes(this.searchField.toLowerCase())
      })
    })
  }

  addOrder() {
    const dialogRef = this.dialog.open(CreateOrderComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiZoppyService.order_insert(result).subscribe((response: any) => {
          this.loadData();
        },(err:any)=>{
          console.log(err)
        });
      }
    });
  }

  deleteOrder(id: any) {
    this.apiZoppyService.order_delete(id).subscribe((response: any) => {
      this.loadData();
    },(err:any)=>{
      console.log(err)
    });
  }

  updateOrder(order: any) {
    const dialogRef = this.dialog.open(CreateOrderComponent, {
      disableClose: true,
      data: order
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiZoppyService.order_update(result).subscribe((response: any) => {
          this.loadData();
        },(err:any)=>{
          console.log(err)
        });
      }
    });
  }

}
