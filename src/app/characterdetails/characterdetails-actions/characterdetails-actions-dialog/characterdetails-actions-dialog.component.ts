import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CharacterAction } from 'src/app/shared/interfaces/characteraction';

@Component({
  selector: 'app-characterdetails-actions-dialog',
  templateUrl: './characterdetails-actions-dialog.component.html',
  styleUrls: ['./characterdetails-actions-dialog.component.css']
})
export class CharacterdetailsActionsDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CharacterdetailsActionsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { editMode:boolean, action: CharacterAction}) {}

    name = new FormControl('', [Validators.required]);
    description =  new FormControl('', [Validators.required]);

  ngOnInit(): void {
    if(this.data.editMode){
      this.name.setValue( this.data.action.name );
      this.description.setValue( this.data.action.text);
    }
  }

  onSubmit(): void {    
    this.dialogRef.close( {name: this.name.value, text: this.description.value} );
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
