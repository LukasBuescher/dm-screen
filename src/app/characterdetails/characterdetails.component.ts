import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Character } from '../character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { CharacterAction } from '../characteraction';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit, OnDestroy {

  character: Character | undefined;
  private _routerSubscription: Subscription | undefined;

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
    this._routerSubscription = this.route.paramMap.subscribe(
      result => {
        const id = String(result.get('id'));
        console.log(id)
        this.characterService.getCharacter(id).subscribe(
          char => this.character = char
        )  
      }
    )
  }

  ngOnDestroy(): void {
    this._routerSubscription?.unsubscribe();
  }

}
