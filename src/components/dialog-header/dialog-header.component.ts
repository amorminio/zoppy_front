import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIconComponent } from "@ng-icons/core";
import { phosphorXCircle } from '@ng-icons/phosphor-icons/regular';

@Component({
  selector: 'dialog-header',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './dialog-header.component.html',
  styleUrl: './dialog-header.component.scss'
})
export class DialogHeaderComponent {

  @Input() title: string = 'Dialog Header';
  @Output() dialogTitleAction:EventEmitter<string> = new EventEmitter<string>();

  // !Icons
  closeIcon = phosphorXCircle;

  emitAction(action:string) {
    this.dialogTitleAction.emit(action)
  }

}
