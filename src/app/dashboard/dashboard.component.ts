import { Component, OnInit } from '@angular/core';
import { CharacterIds } from '../characterids';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  
  characters: CharacterIds[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characters = this.characterService.getCharacters()
  }
}