import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/interfaces/character';
import { Input } from '@angular/core';
import { generalActions } from 'src/app/shared/constants/general-actions';
import { CharacterAction } from 'src/app/shared/interfaces/characteraction';

@Component({
  selector: 'app-characterdetails-actions',
  templateUrl: './characterdetails-actions.component.html',
  styleUrls: ['./characterdetails-actions.component.css']
})
export class CharacterdetailsActionsComponent implements OnInit {

  
  generalActions: CharacterAction[] = generalActions;

  @Input() character: Character | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
