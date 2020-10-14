import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresEditarComponent } from './jugadores-editar.component';

describe('JugadoresEditarComponent', () => {
  let component: JugadoresEditarComponent;
  let fixture: ComponentFixture<JugadoresEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugadoresEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadoresEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
