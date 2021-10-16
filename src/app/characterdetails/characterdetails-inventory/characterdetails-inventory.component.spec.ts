import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterdetailsInventoryComponent } from './characterdetails-inventory.component';

describe('CharacterdetailsInventoryComponent', () => {
  let component: CharacterdetailsInventoryComponent;
  let fixture: ComponentFixture<CharacterdetailsInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterdetailsInventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterdetailsInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
