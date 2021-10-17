import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharacterService } from '../services/character.service';
import { CharacterIds } from '../shared/interfaces/characterids';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, OnDestroy {
    
  private _characterSubscription: Subscription | undefined;
  selectedCharId: string = '';
  characters: CharacterIds[] = [];

  constructor( 
    private router: Router,
    private characterService: CharacterService
  ) { }

    
  ngOnInit(): void {
    this.characters = this.characterService.getCharacters()
    this._characterSubscription = this.characterService.getCharacter.subscribe(
      (char) => {        
        this.selectedCharId = char.id;
      }
    )
  }

  routeTo(id: string){
    this.router.navigate( ['/character/', id] )
  }

  ngOnDestroy(): void {
    this._characterSubscription?.unsubscribe();
  }

}
