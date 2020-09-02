import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposCrearComponent } from './equipos-crear.component';

describe('EquiposCrearComponent', () => {
  let component: EquiposCrearComponent;
  let fixture: ComponentFixture<EquiposCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquiposCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquiposCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
