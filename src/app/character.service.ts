import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from './character';
import { MessageService } from './message.service';
import { CHARACTERS } from './mock-characters';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  getCharacters(): Observable<Character[]> {
    const characters = of(CHARACTERS)
    this.messageService.add('CharacterService: fetched characteres')
    return characters;
  }

  getCharacter(id: number): Observable<Character> {
    const character = CHARACTERS.find(h => h.id === id)!;
    this.messageService.add(`CharacterService: fetched character id=${id}`);
    return of(character);
  }

  constructor(private messageService: MessageService) { }
}
