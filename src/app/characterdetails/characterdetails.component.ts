import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-characterdetails',
  templateUrl: './characterdetails.component.html',
  styleUrls: ['./characterdetails.component.css']
})
export class CharacterdetailsComponent implements OnInit {

  @Input() character?: Character;
  
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
