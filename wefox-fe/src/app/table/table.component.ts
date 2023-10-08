import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from 'src/types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'title', 'content', 'latitude', 'longitude', 'delete'];
  tableDataSource: CdkTableDataSourceInput<City> = []
  @Input() set dataSource(v: City[]){
    this.tableDataSource = v
  }

  @Output() deleteEntryEvent: EventEmitter<string> = new EventEmitter()
  @Output() selectEntryEvent: EventEmitter<string> = new EventEmitter()

  deleteEntry(id: string, $event: MouseEvent){
    $event?.stopPropagation()
    if(window.confirm(`Do you want to proceed deleting the item with id ${id}?`)){
      this.deleteEntryEvent.emit(id)
    }
  }

  selectRow(id: string){
    this.selectEntryEvent.emit(id)
  }

}
