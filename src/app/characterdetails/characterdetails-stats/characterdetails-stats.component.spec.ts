import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterdetailsStatsComponent } from './characterdetails-stats.component';

describe('CharacterdetailsStatsComponent', () => {
  let component: CharacterdetailsStatsComponent;
  let fixture: ComponentFixture<CharacterdetailsStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterdetailsStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterdetailsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
