import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentExpertiseComponent } from './component-expertise.component';

describe('ComponentExpertiseComponent', () => {
  let component: ComponentExpertiseComponent;
  let fixture: ComponentFixture<ComponentExpertiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentExpertiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
