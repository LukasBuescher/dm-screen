import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Character } from '../character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit, OnDestroy {

  character: Character | undefined;
  private _routerSubscription: Subscription | undefined;
            
  constructor(
    private route: ActivatedRoute,
    private characterService: CharacterService,
  ) { }

  ngOnInit(): void {
    this._routerSubscription = this.route.paramMap.subscribe(
      result => {
        const id = String(result.get('id'));
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
