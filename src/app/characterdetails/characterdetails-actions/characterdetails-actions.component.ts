import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/character';
import { CharacterAction } from 'src/app/characteraction';
import { Input } from '@angular/core';

@Component({
  selector: 'app-characterdetails-actions',
  templateUrl: './characterdetails-actions.component.html',
  styleUrls: ['./characterdetails-actions.component.css']
})
export class CharacterdetailsActionsComponent implements OnInit {

  
  otheractions: CharacterAction[] =[
    {"name":"Dash", "text":"Double your Movement"},
    {"name":"Disengage", "text":"Stop provoking Opportunity Attacks"},
    {"name":"Dodge", "text":"Become harder to hit"},
    {"name":"Help", "text":"Give an ally advantage"},
    {"name":"Hide", "text":"Attempt to hide"},
    {"name":"Ready", "text":"Prepare an action"},        
    {"name":"Use Skill", "text":"Attempt to use on of your skills"},        
    {"name":"Shove/Grapple", "text":"Push creature away ore hold them in place"},
    {"name":"Interact with Object", "text":"Interact with an Object in the environment or your inventory" }
  ]

  @Input() character: Character | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
