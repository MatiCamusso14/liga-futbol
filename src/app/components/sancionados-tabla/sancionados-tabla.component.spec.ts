import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SancionadosTablaComponent } from './sancionados-tabla.component';

describe('SancionadosTablaComponent', () => {
  let component: SancionadosTablaComponent;
  let fixture: ComponentFixture<SancionadosTablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SancionadosTablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SancionadosTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
