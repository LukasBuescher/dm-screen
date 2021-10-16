import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/interfaces/character';

@Component({
  selector: 'app-characterdetails-stats',
  templateUrl: './characterdetails-stats.component.html',
  styleUrls: ['./characterdetails-stats.component.css']
})
export class CharacterdetailsStatsComponent implements OnInit {

  @Input() character: Character | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
