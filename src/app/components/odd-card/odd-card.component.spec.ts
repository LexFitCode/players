import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddCardComponent } from './odd-card.component';

describe('OddCardComponent', () => {
  let component: OddCardComponent;
  let fixture: ComponentFixture<OddCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OddCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
