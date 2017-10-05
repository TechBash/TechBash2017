import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkToInstructorComponent } from './link-to-instructor.component';

describe('LinkToInstructorComponent', () => {
  let component: LinkToInstructorComponent;
  let fixture: ComponentFixture<LinkToInstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkToInstructorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkToInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
