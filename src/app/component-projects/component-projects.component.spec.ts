import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentProjectsComponent } from './component-projects.component';

describe('ComponentProjectsComponent', () => {
  let component: ComponentProjectsComponent;
  let fixture: ComponentFixture<ComponentProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
