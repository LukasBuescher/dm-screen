import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { Character } from 'src/app/shared/interfaces/character';

@Component({
  selector: 'app-characterdetails-inventory',
  templateUrl: './characterdetails-inventory.component.html',
  styleUrls: ['./characterdetails-inventory.component.css']
})
export class CharacterdetailsInventoryComponent implements OnInit {

  @Input() character: Character | undefined

  constructor() { }

  ngOnInit(): void {
  }

  createItem(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.character?.items.push(value);
    }
    event.chipInput!.clear();
  }

  addItem(item: string): void {
      this.character?.items.push(item);
  }

  remove(item: string): void {
    this.character?.items.splice(this.character?.items.indexOf(item), 1);
  }
  

}
