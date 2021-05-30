import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';
import { CharacterAction } from '../characteraction';

@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {

  @Input() character?: Character;

  otheractions: CharacterAction[] =[
    {"name":"Dash", "text":"Double your Movement"},
    {"name":"Disengage", "text":"Stop provoking Opportunity Attacks"},
    {"name":"Dodge", "text":"Become harder to hit"},
    {"name":"Help", "text":"Give an ally advantage"},
    {"name":"Hide", "text":"Attempt to hide"},
    {"name":"Ready", "text":"Prepare an action"},        
    {"name":"Use Skill", "text":"Attempt to use on of your skills"},        
    {"name":"Shove/Grapple", "text":"Push creature away ore hold them in place"},
    {"name":"Interact with Object", "text":"Interact with an Object in the environment or your inventory "}
  ]            
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
  ) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.characterService.getCharacter(id).subscribe(character => this.character = character);
  }

}
