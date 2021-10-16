import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-characterdetails-inventory',
  templateUrl: './characterdetails-inventory.component.html',
  styleUrls: ['./characterdetails-inventory.component.css']
})
export class CharacterdetailsInventoryComponent implements OnInit {

  @Input() items: string[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
