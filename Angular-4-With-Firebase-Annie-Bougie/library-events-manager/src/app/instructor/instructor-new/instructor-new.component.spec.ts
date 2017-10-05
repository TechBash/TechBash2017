import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorNewComponent } from './instructor-new.component';

describe('InstructorNewComponent', () => {
  let component: InstructorNewComponent;
  let fixture: ComponentFixture<InstructorNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructorNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
