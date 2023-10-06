import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-city-dialog',
  templateUrl: './new-city-dialog.component.html',
  styleUrls: ['./new-city-dialog.component.css']
})
export class NewCityDialogComponent {

  name: string = ''

  constructor(
    public dialogRef: MatDialogRef<NewCityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ){

  }


  cancel(){
    this.dialogRef.close(this.name)
  }

}
