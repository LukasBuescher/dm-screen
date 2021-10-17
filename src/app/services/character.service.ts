import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Character } from '../shared/interfaces/character';
import { HttpClient } from "@angular/common/http";
import { CharacterIds } from '../shared/interfaces/characterids';

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

  storage = window.localStorage

  private readonly _character: ReplaySubject<Character>= new ReplaySubject<Character>();
  private readonly _characterJson: ReplaySubject<string>= new ReplaySubject<string>();

  constructor(private httpClient: HttpClient) { }

  get getCharacter(): Observable<Character>{
    return this._character.asObservable();
  }
  
  get getCharacterJson(): Observable<string>{
    return this._characterJson.asObservable();
  }

  getCharacters(): CharacterIds[] {
    return this.characters;
  }

  fetchCharacter(id: string): void {
    const res = this.storage.getItem(id)
    if(!!res){
      this._characterJson.next( res );
      this._character.next( JSON.parse(res));
    } else{
      var characterUrl = './assets/' + id + '.json';
      this.httpClient.get<Character>(characterUrl).subscribe( 
        res => {
          this._character.next(res)          
          this._characterJson.next( JSON.stringify(res) );
        }
      );
    }
    
  }

  saveCharacter(character: Character): void{
    const savedChar = JSON.stringify(character)
    this.storage.setItem(character.id, savedChar)
  }

}
