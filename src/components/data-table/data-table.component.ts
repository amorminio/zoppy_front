import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent implements OnInit,OnChanges{
  @Input() dataSource: any[] = [];
  columns: any[] = [];

  ngOnInit(): void {
    if(this.dataSource){
      this.columns = Object.keys(this.dataSource[0]);
    }
  }

  ngOnChanges(): void {
    if(this.dataSource){
      this.columns = Object.keys(this.dataSource[0]);
    }
  }


}
