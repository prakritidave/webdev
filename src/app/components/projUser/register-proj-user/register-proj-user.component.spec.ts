import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProjUserComponent } from './register-proj-user.component';

describe('RegisterProjUserComponent', () => {
  let component: RegisterProjUserComponent;
  let fixture: ComponentFixture<RegisterProjUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterProjUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProjUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
