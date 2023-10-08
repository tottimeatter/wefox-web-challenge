import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { City } from 'src/types';

@Component({
  selector: 'app-city-dialog',
  templateUrl: './city-dialog.component.html',
  styleUrls: ['./city-dialog.component.css']
})
export class CityDialogComponent implements OnInit {

  title = 'New city'
  name: string = ''
  imageError = false;
  city = new FormGroup({
    id: new FormControl('', Validators.required),
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required),
    lat: new FormControl('', Validators.required),
    long: new FormControl('', Validators.required),
    image_url: new FormControl('')
  })

  constructor(
    public dialogRef: MatDialogRef<CityDialogComponent>,
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

  save(){
    this.city.markAllAsTouched()
    if(!this.city.invalid){
      this.dialogRef.close(this.city)
    }
  }

}
