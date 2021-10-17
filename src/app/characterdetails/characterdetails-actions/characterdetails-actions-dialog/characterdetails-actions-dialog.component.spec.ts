import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterdetailsActionsDialogComponent } from './characterdetails-actions-dialog.component';

describe('CharacterdetailsActionsDialogComponent', () => {
  let component: CharacterdetailsActionsDialogComponent;
  let fixture: ComponentFixture<CharacterdetailsActionsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterdetailsActionsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterdetailsActionsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
