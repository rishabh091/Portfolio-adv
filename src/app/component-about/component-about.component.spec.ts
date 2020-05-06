import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAboutComponent } from './component-about.component';

describe('ComponentAboutComponent', () => {
  let component: ComponentAboutComponent;
  let fixture: ComponentFixture<ComponentAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
