import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileProjUserComponent } from './profile-proj-user.component';

describe('ProfileProjUserComponent', () => {
  let component: ProfileProjUserComponent;
  let fixture: ComponentFixture<ProfileProjUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileProjUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileProjUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
