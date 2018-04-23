import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdevMenuComponent } from './webdev-menu.component';

describe('WebdevMenuComponent', () => {
  let component: WebdevMenuComponent;
  let fixture: ComponentFixture<WebdevMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebdevMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebdevMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
