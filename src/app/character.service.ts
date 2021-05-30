import { Injectable } from '@angular/core';
import { Observable, of, throwError} from 'rxjs';
import { Character } from './character';
import { HttpClient } from "@angular/common/http";
import { catchError, retry } from 'rxjs/operators';
import { CharacterIds } from './characterids';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  characters: CharacterIds[] = [
    {id:"1", name:"Amé"},
    {id:"2", name:"Bravio"},
    {id:"3", name:"Corgrim"},
    {id:"4", name:"Grigor"}
  ];

  charactersUrl = './assets/characters.json'

  getCharacters(): CharacterIds[] {
    return this.characters;
  }

  getCharacter(id: string): Observable<Character> {
    var characterUrl = './assets/';
    characterUrl = characterUrl.concat(id);
    characterUrl = characterUrl.concat('.json')
    return this.httpClient.get<Character>(characterUrl);
  }

  constructor(private httpClient: HttpClient) { }
}
