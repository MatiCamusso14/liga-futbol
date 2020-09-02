import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresTablaComponent } from './jugadores-tabla.component';

describe('JugadoresTablaComponent', () => {
  let component: JugadoresTablaComponent;
  let fixture: ComponentFixture<JugadoresTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadoresTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoresTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
