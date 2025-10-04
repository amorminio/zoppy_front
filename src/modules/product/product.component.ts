import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { phosphorBarcode, phosphorEmpty, phosphorPlusCircle, phosphorUsers } from '@ng-icons/phosphor-icons/regular';
import { NgIconComponent } from "@ng-icons/core";
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { ApiZoppyService } from '../../services/api-zoppy.service';
import { DataTableComponent } from '../../components/data-table/data-table.component';
import { CreateProductComponent } from './components/create-product/create-product.component';

@Component({
  selector: 'app-product',
  standalone: true,
  providers: [ApiZoppyService],
  imports: [NgIconComponent, MatButtonModule, MatRippleModule, MatDialogModule, FormsModule, DataTableComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

  readonly dialog = inject(MatDialog);
  dataSource: any[] = [];
  filteredDataSource: any[] = [];

  // !Icons
  emptyIcon = phosphorEmpty;
  productIcon = phosphorBarcode;
  plusIcon = phosphorPlusCircle;
  searchField: string = '';

  constructor(private apiZoppyService: ApiZoppyService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.apiZoppyService.product_list().subscribe((response: any) => {
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

  addProduct() {
    const dialogRef = this.dialog.open(CreateProductComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiZoppyService.product_insert(result).subscribe((response: any) => {
          this.loadData();
        },err=>{
          console.log(err)
        });
      }
    });
  }

  deleteProduct(id: any) {
    this.apiZoppyService.product_delete(id).subscribe((response: any) => {
      this.loadData();
    },err=>{
      console.log(err)
    });
  }

  updateProduct(product: any) {
    const dialogRef = this.dialog.open(CreateProductComponent, {
      disableClose: true,
      data: product
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.apiZoppyService.product_update(result).subscribe((response: any) => {
          this.loadData();
        },err=>{
          console.log(err)
        });
      }
    });
  }



}
