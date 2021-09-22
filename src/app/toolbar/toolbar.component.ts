import { Component, OnInit } from '@angular/core';
import { CharacterIds } from '../characterids';
import { CharacterService } from '../services/character.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
    
  
  characters: CharacterIds[] = [];

  constructor( private characterService: CharacterService
  ) { }

  ngOnInit(): void {
    this.getCharacters()
  }

  
  getCharacters(): void {
    this.characters = this.characterService.getCharacters()
  }

}
