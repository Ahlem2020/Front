import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackpotDonnationComponent } from './jackpot-donnation.component';

describe('JackpotDonnationComponent', () => {
  let component: JackpotDonnationComponent;
  let fixture: ComponentFixture<JackpotDonnationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JackpotDonnationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JackpotDonnationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
