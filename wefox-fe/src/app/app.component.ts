import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/services/api.service';
import { City } from 'src/types';
import { NewCityDialogComponent } from './new-city-dialog/new-city-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wefox web challenge'
  cities: City[] = []

  constructor(private apiService: ApiService, public dialog: MatDialog){}

  ngOnInit(){
    this.apiService.getElements().subscribe((cities: City[]) => {
      this.cities = cities
    })
  }

  addCity(){
    const dialogRef = this.dialog.open(NewCityDialogComponent, {
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }
}
