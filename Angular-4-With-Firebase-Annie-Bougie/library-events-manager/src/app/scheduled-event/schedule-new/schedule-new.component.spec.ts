import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleNewComponent } from './schedule-new.component';

describe('ScheduleNewComponent', () => {
  let component: ScheduleNewComponent;
  let fixture: ComponentFixture<ScheduleNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
