import { Component, inject, OnInit } from '@angular/core';
import { DialogHeaderComponent } from '../../../../components/dialog-header/dialog-header.component';
import { DialogActionsComponent } from '../../../../components/dialog-actions/dialog-actions.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Client } from '../../../../models/client.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { Action } from '../../../../models/action.model';

@Component({
  selector: 'app-create-client',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, DialogHeaderComponent, DialogActionsComponent, MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  readonly dialogRef = inject(MatDialogRef<CreateClientComponent>)
  data = inject(MAT_DIALOG_DATA)

  newClient: Client = {
    address: '',
    birthDate: new Date(),
    email: '',
    id: '',
    name: '',
    password: '',
    phoneNumber: ''
  }

  newClientForm: UntypedFormGroup = this._formBuilder.group({
    name: [this.newClient.name],
    email: [this.newClient.email],
    password: [this.newClient.password],
    phoneNumber: [this.newClient.phoneNumber],
    address: [this.newClient.address],
    birthDate: [this.newClient.birthDate],
  });

  actions: Array<Action> = [
    {
      label: 'Cancelar',
      action: 'CLOSE',
      icon: 'close'
    },
    {
      label: 'Salvar',
      action: 'SAVE',
      icon: 'save'
    }
  ]

  constructor(private _formBuilder: UntypedFormBuilder) {

  }

  ngOnInit(): void {
    if(this.data){
      this.newClient = this.data

      this.newClientForm = this._formBuilder.group({
        name: [this.newClient.name],
        email: [this.newClient.email],
        password: [this.newClient.password],
        phoneNumber: [this.newClient.phoneNumber],
        address: [this.newClient.address],
        birthDate: [this.newClient.birthDate],
      });
    }
  }


  handleDialogTitleAction(action: string) {
    if (action === 'CLOSE') {
      this.dialogRef.close()
    }
  }

  dialogActionsHandler(action: string) {
    if (action === 'CLOSE') {
      this.dialogRef.close()
    }
    if (action === 'SAVE' && !this.data) {
      let output: Client = this.newClientForm.value
      this.dialogRef.close(output)
    } else{
      // ! Update
      let output: Client = this.newClientForm.value
      output.id = this.data.id
      this.dialogRef.close(output)
    }
  }

}
