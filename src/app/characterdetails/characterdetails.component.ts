import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';
import { CharacterService } from '../services/character.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Character } from '../shared/interfaces/character';

@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit, OnDestroy {

  character: Character | undefined;
  private _routerSubscription: Subscription | undefined;
  private _charSubscription: Subscription | undefined;
            
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {    
    this._routerSubscription = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const id = String(params.get('id'));
        this.characterService.fetchCharacter(id);
      }
    )
    this._charSubscription = this.characterService.getCharacter.subscribe(
      char => this.character = char
    )  
  }

  ngOnDestroy(): void {
    this._routerSubscription?.unsubscribe();
    this._charSubscription?.unsubscribe();
  }

  onSave(): void {
    if(!!this.character){
      this.characterService.saveCharacter(this.character);
      this._snackBar.open( 'Saved ' + this.character.name + ' to localstorage' , 'X');
    }
  }

}
