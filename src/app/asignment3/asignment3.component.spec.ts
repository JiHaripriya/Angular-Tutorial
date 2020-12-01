import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asignment3Component } from './asignment3.component';

describe('Asignment3Component', () => {
  let component: Asignment3Component;
  let fixture: ComponentFixture<Asignment3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Asignment3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Asignment3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
