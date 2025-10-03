import { Component, inject } from '@angular/core';
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
export class CreateClientComponent {

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

  handleDialogTitleAction(action: string) {
    if (action === 'CLOSE') {
      this.dialogRef.close()
    }
  }

}

// @Component({
//   selector: 'general-settings',
//   encapsulation: ViewEncapsulation.None,
//   changeDetection: ChangeDetectionStrategy.OnPush,
//   imports: [
//     FormsModule,
//     ReactiveFormsModule,
//     MatFormFieldModule,
//     MatIconModule,
//     MatInputModule,
//     MatSlideToggleModule,
//     MatButtonModule,
//     TranslocoDirective],

//   templateUrl: './general-settings.component.html',
//   styleUrl: './general-settings.component.scss'
// })
// export class GeneralSettingsComponent implements OnInit {

//   user: User
//   generalForm: UntypedFormGroup;
//   initialValues: any;

//   constructor(
//     private _formBuilder: UntypedFormBuilder,
//     private _userService: UserService,
//     private _toastr: ToastrService,
//     private _transloco: TranslocoService
//   ) { }


//   ngOnInit(): void {
//     this.user = this._userService.user;
//     this.initialFormValues()
//   }

//   private initialFormValues() {

//     let general = this.user.configs?.general || {}

//     let usertimeReconnect: number = general?.timeReconnect || 0
//     let userEventLogs: number = general?.eventLogs || false

//     this.initialValues = {
//       timeReconnect: [usertimeReconnect],
//       eventLogs: [userEventLogs],
//     }

//     this.generalForm = this._formBuilder.group({
//       timeReconnect: [usertimeReconnect],
//       eventLogs: [userEventLogs],
//     });
//   }

//   public saveForm() {
//     const currentFormValues = _.assign({}, this.generalForm.value)
//     let currentConfig = this.user.configs
//     _.assign(currentConfig, { general: currentFormValues })
//     this._userService.updateConfigs(currentConfig).then(response => {
//       if (response) {
//         this._toastr.success(this._transloco.translate('COMMON.CRUD.UPDATE'));
//       }
//       else {
//         this._toastr.error(this._transloco.translate('COMMON.CRUD.FAIL_UPDATE'));
//       }
//     })
//   }

//   public cancel() {
//     this.generalForm = this._formBuilder.group({
//       timeReconnect: [this.initialValues.timeReconnect],
//       eventLogs: [this.initialValues.eventLogs],
//     });
//   }
// }


