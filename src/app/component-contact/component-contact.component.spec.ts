import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentContactComponent } from './component-contact.component';

describe('ComponentContactComponent', () => {
  let component: ComponentContactComponent;
  let fixture: ComponentFixture<ComponentContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
