import { Component, inject } from '@angular/core';
import { DataTableComponent } from '../../components/data-table/data-table.component';
import { NgIconComponent } from "@ng-icons/core";
import { phosphorUsers, phosphorPlusCircle } from '@ng-icons/phosphor-icons/regular';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CreateClientComponent } from './components/create-client/create-client.component';

@Component({
    selector: 'client',
    standalone: true,
  imports: [DataTableComponent, NgIconComponent, MatButtonModule, MatRippleModule, MatDialogModule,CreateClientComponent],
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})
export class ClientComponent {

  readonly dialog = inject(MatDialog);
  // !Icons
  usersIcon = phosphorUsers;
  plusIcon = phosphorPlusCircle;

  constructor() {}

  addClient() {
    const dialogRef = this.dialog.open(CreateClientComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }


}
