import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorEditComponent } from './instructor-edit.component';

describe('InstructorEditComponent', () => {
  let component: InstructorEditComponent;
  let fixture: ComponentFixture<InstructorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
