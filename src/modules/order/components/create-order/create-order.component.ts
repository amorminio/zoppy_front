import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogHeaderComponent } from '../../../../components/dialog-header/dialog-header.component';
import { DialogActionsComponent } from '../../../../components/dialog-actions/dialog-actions.component';

@Component({
  selector: 'app-create-order',
  imports: [DialogHeaderComponent, DialogActionsComponent, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.scss'
})
export class CreateOrderComponent {

  dialogRef = inject(MatDialogRef<CreateOrderComponent>);

  newOrderForm = new FormGroup({
    client_id: new FormControl('', [Validators.required]),
    product_id: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
  });

  actions: any[] = [
    {
      label: 'Cancelar',
      action: 'cancel'
    },
    {
      label: 'Salvar',
      action: 'save'
    }
  ];

  dialogActionsHandler(action: string) {
    if (action === 'cancel') {
      this.dialogRef.close();
    } else if (action === 'save') {
      this.dialogRef.close(this.newOrderForm.value);
    }
  }

  handleDialogTitleAction(action: string) {
    if (action === 'close') {
      this.dialogRef.close();
    }
  }

}
