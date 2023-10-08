import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/services/api.service';
import { City } from 'src/types';
import { CityDialogComponent } from './city-dialog/city-dialog.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wefox web challenge'
  cities: City[] = []
  $getElemensSubs?: Subscription

  constructor(private apiService: ApiService, public dialog: MatDialog){}

  ngOnInit(){
    this.getCities()
  }

  getCities(){
    this.$getElemensSubs = this.apiService.getElements().subscribe({
      next: (cities: City[]) => {
        this.cities = cities
      },
      error: error => {
        alert(error.statusText)
      }
    })
  }

  addCity(){
    const dialogRef = this.dialog.open(CityDialogComponent, {
      height:'auto',
      width: '980px'
    });

    dialogRef.afterClosed().subscribe(formControl => {
      if(formControl){
        this.apiService.createElement(formControl.value).subscribe({
          next: (response) => {
            this.getCities()
          },
          error: error => {
            alert(error.statusText)
          }
        })
      }
    });
  }

  deleteCity(id: string){
    console.log(`Deleting entry with id: ${id}`)
    this.apiService.removeElement(id).subscribe({
      next: (response) => {
        this.getCities()
      },
      error: error => {
        alert(error.statusText)
      }
    })
  }

  selectCity(id: string){
    this.apiService.showElement(id).subscribe((city: City) => {
      this.showCityDetail(city)
    })
  }

  showCityDetail(city: City){
    const dialogRef = this.dialog.open(CityDialogComponent ,{
      height: 'auto',
      width: '980px',
      data:{city: city}
    })

    dialogRef.afterClosed().subscribe(formControl => {
      if(formControl){
        this.apiService.updateElement(formControl.value).subscribe({
          next: (response) => {
            this.getCities()
          },
          error: error => {
            alert(error.statusText)
          }
        })
      }
    })
  }
}
