import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprobarSancionadosComponent } from './comprobar-sancionados.component';

describe('ComprobarSancionadosComponent', () => {
  let component: ComprobarSancionadosComponent;
  let fixture: ComponentFixture<ComprobarSancionadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprobarSancionadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprobarSancionadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
