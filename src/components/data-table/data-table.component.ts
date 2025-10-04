import { Component, Input, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent } from "@ng-icons/core";
import { phosphorPencil, phosphorTrash } from '@ng-icons/phosphor-icons/regular';

@Component({
  selector: 'data-table',
  standalone: true,
  imports: [CommonModule,NgIconComponent],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements OnInit,OnChanges{
  @Input() dataSource: any[] = [];
  @Output() deleteRecordEvent = new EventEmitter<number>();
  @Output() updateRecordEvent = new EventEmitter<any>();
  columns: any[] = [];

  editIcon = phosphorPencil;
  removeIcon = phosphorTrash;

  ngOnInit(): void {
    if(this.dataSource){
      this.columns = Object.keys(this.dataSource[0]);
    }
  }

  deleteRecord(row: any) {
    this.deleteRecordEvent.emit(row.id);
  }

  updateRecord(row: any) {
    this.updateRecordEvent.emit(row);
  }

  ngOnChanges(): void {
    if(this.dataSource){
      this.columns = Object.keys(this.dataSource[0]);
    }
  }


}
