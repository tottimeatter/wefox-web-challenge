import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ApiService } from 'src/services/api.service';
import { City } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cities?: City[]
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: CdkTableDataSourceInput<City> = []



  constructor(private apiService: ApiService){}

  ngOnInit(){
    this.apiService.getElements().subscribe((cities: City[]) => {
      this.cities = cities
      this.dataSource = this.cities
    })
  }
}
