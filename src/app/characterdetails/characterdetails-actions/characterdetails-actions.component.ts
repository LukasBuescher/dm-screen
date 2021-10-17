import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/interfaces/character';
import { Input } from '@angular/core';
import { generalActions } from 'src/app/shared/constants/general-actions';
import { CharacterAction } from 'src/app/shared/interfaces/characteraction';
import { MatDialog } from '@angular/material/dialog';
import { CharacterdetailsActionsDialogComponent } from './characterdetails-actions-dialog/characterdetails-actions-dialog.component';

@Component({
  selector: 'app-characterdetails-actions',
  templateUrl: './characterdetails-actions.component.html',
  styleUrls: ['./characterdetails-actions.component.css']
})
export class CharacterdetailsActionsComponent implements OnInit {

  
  generalActions: CharacterAction[] = generalActions;

  @Input() character: Character | undefined;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onAddAction( actions: CharacterAction[] ): void{
    const dialogRef = this.dialog.open(CharacterdetailsActionsDialogComponent, {
      width: '250px',
      height: 'auto',
      data: {editMode: false}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!!result){
        actions.push(result);
      }
    });
  }

  onEditAction (actions: CharacterAction[], index: number ){    
    const dialogRef = this.dialog.open(CharacterdetailsActionsDialogComponent, {
      width: '250px',
      height: 'auto',
      data: {editMode: true, action: actions[index]}
  });

  dialogRef.afterClosed().subscribe(result => {    
    if(!!result){
      actions[index] = result;
    }
  });
    
  }

}
