import { Component, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../../../models/product.model';
import { Action } from '../../../../models/action.model';
import { DialogActionsComponent } from '../../../../components/dialog-actions/dialog-actions.component';
import { DialogHeaderComponent } from '../../../../components/dialog-header/dialog-header.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  imports: [DialogHeaderComponent, DialogActionsComponent, MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.scss'
})
export class CreateProductComponent {

  readonly dialogRef = inject(MatDialogRef<CreateProductComponent>)
  data = inject(MAT_DIALOG_DATA)

  newProduct: Product = {
    name: '',
    category: '',
    price: 0,
    description: ''
  }

  newProductForm: UntypedFormGroup = this._formBuilder.group({
    name: [this.newProduct.name],
    category: [this.newProduct.category],
    price: [this.newProduct.price],
    description: [this.newProduct.description],
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

  handleDialogTitleAction(action: string){
    if(action === 'CLOSE'){
      this.dialogRef.close()
    }
  }

  dialogActionsHandler(action: string){
    if(action === 'CLOSE'){
      this.dialogRef.close()
    }
    if(action === 'SAVE' && !this.data){
      let output: Product = this.newProductForm.value
      this.dialogRef.close(output)
    }else{
      // ! Update
      let output: Product = this.newProductForm.value
      output.id = this.data.id
      this.dialogRef.close(output)
    }
  }

}
