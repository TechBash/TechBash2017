import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorFormComponent } from './instructor-form.component';

describe('InstructorFormComponent', () => {
  let component: InstructorFormComponent;
  let fixture: ComponentFixture<InstructorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
