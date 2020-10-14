import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginIncorrectoComponent } from './login-incorrecto.component';

describe('LoginIncorrectoComponent', () => {
  let component: LoginIncorrectoComponent;
  let fixture: ComponentFixture<LoginIncorrectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginIncorrectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginIncorrectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
