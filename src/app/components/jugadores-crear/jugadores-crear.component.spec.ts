import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresCrearComponent } from './jugadores-crear.component';

describe('JugadoresCrearComponent', () => {
  let component: JugadoresCrearComponent;
  let fixture: ComponentFixture<JugadoresCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadoresCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoresCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
