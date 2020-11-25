import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpulsarJugadorComponent } from './expulsar-jugador.component';

describe('ExpulsarJugadorComponent', () => {
  let component: ExpulsarJugadorComponent;
  let fixture: ComponentFixture<ExpulsarJugadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpulsarJugadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpulsarJugadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
