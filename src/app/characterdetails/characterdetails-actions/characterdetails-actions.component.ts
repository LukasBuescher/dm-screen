import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/character';
import { CharacterAction } from 'src/app/characteraction';
import { Input } from '@angular/core';
import { generalActions } from 'src/app/shared/constants/general-actions';

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
