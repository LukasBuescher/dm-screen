import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { Character } from 'src/app/shared/interfaces/character';
import { Item } from 'src/app/shared/interfaces/item';

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
      this.character?.items.push( { description: value, amount:1 } );
    }
    event.chipInput!.clear();
  } 

  addItem(item: Item): void {
      item.amount += 1;
  }

  remove(item: Item): void {
    if(item.amount > 1){
      item.amount -= 1;
    }
    else{      
      this.character?.items.splice(this.character?.items.indexOf(item), 1);
    }
  }
  

}
