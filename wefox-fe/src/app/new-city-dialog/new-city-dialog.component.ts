import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { City } from 'src/types';

@Component({
  selector: 'app-new-city-dialog',
  templateUrl: './new-city-dialog.component.html',
  styleUrls: ['./new-city-dialog.component.css']
})
export class NewCityDialogComponent implements OnInit {

  title = 'New city'
  name: string = ''
  imageError = false;
  city = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    lat: new FormControl(''),
    long: new FormControl(''),
    image_url: new FormControl('')
  })

  constructor(
    public dialogRef: MatDialogRef<NewCityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {city:City},
  ){}

  ngOnInit(): void {
    if(this.data){
      this.title = 'Edit city'
      this.city.setValue({
        id: this.data.city?.id,
        title: this.data.city.title,
        content: this.data.city.content,
        lat: this.data.city.lat,
        long: this.data.city.long,
        image_url: this.data.city.image_url
      })
    }
  }

  cancel(){
    this.dialogRef.close(undefined)
  }

}
