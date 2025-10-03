import { Component, inject, OnInit } from '@angular/core';
import { DataTableComponent } from '../../components/data-table/data-table.component';
import { NgIconComponent } from "@ng-icons/core";
import { phosphorUsers, phosphorPlusCircle, phosphorEmpty } from '@ng-icons/phosphor-icons/regular';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { ApiZoppyService } from '../../services/api-zoppy.service';

@Component({
  selector: 'client',
  standalone: true,
  imports: [DataTableComponent, NgIconComponent, MatButtonModule, MatRippleModule, MatDialogModule],
  providers: [ApiZoppyService],
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  readonly dialog = inject(MatDialog);
  dataSource: any[] = [];

  // !Icons
  emptyIcon = phosphorEmpty;
  usersIcon = phosphorUsers;
  plusIcon = phosphorPlusCircle;


  constructor(private apiZoppyService: ApiZoppyService) { }

  ngOnInit(): void {
    this.apiZoppyService.client_list().subscribe((response: any) => {
      if(response){
        this.dataSource = response;
        debugger
      }
    });
  }

  addClient() {
    const dialogRef = this.dialog.open(CreateClientComponent, {
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }
}
