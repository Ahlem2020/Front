import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDonnationComponent } from './event-donnation.component';

describe('EventDonnationComponent', () => {
  let component: EventDonnationComponent;
  let fixture: ComponentFixture<EventDonnationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventDonnationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventDonnationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
