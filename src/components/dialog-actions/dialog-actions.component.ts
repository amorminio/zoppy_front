import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Action } from '../../models/action.model'

@Component({
  selector: 'dialog-actions',
  standalone: true,
  imports: [],
  templateUrl: './dialog-actions.component.html',
  styleUrl: './dialog-actions.component.scss'
})
export class DialogActionsComponent {

  @Input() actions: Array<Action> = [];
  @Output() actionEvent = new EventEmitter<string>();


  emitAction(action: string) {
    this.actionEvent.emit(action);
  }

}
