import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterdetailsActionsComponent } from './characterdetails-actions.component';

describe('CharacterdetailsActionsComponent', () => {
  let component: CharacterdetailsActionsComponent;
  let fixture: ComponentFixture<CharacterdetailsActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterdetailsActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterdetailsActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
