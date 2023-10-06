import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component, Input } from '@angular/core';
import { City } from 'src/types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['id', 'title', 'content', 'latitude', 'longitude'];
  tableDataSource: CdkTableDataSourceInput<City> = []
  @Input() set dataSource(v: City[]){
    this.tableDataSource = v
  }

}
