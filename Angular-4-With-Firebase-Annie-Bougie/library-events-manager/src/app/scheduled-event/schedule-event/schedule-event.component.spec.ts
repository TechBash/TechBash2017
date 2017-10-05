import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleEventComponent } from './schedule-event.component';

describe('ScheduleEventComponent', () => {
  let component: ScheduleEventComponent;
  let fixture: ComponentFixture<ScheduleEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
