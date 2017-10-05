import { Component, OnInit, Input } from '@angular/core';
import { EventsService, InstructorsService } from '../../shared/services';
import { Observable } from 'rxjs/Observable';
import { LibraryEvent, Instructor } from '../../shared/models';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MdDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.scss']
})
export class ScheduleFormComponent implements OnInit {

  @Input()
  public selectedEventUrl: string;

  @Input()
  selectedInstructorUsername: string;

  form: FormGroup;
  events$: Observable<LibraryEvent[]>;
  instructors$: Observable<Instructor[]>
  branches: string[] = ["Ashwaubenon", "Central", "De Pere", "East"];
  eventDate: Date;
  eventTime: Date;
  public anyValue: 'whatever';

  constructor(
    private eventsService: EventsService,
    private instructorsService: InstructorsService,
    private formBuilder: FormBuilder
  ) { 
    this.form = this.formBuilder.group({
      event: ['', Validators.required],
      instructor: ['', Validators.required],
      branch: ['', Validators.required],
      eventDate: new FormControl(this.eventDate, Validators.compose([])),
      eventTime: new FormControl(this.eventTime, Validators.required),
      selectedUrl: new FormControl(this.selectedEventUrl)
    });
  }

  ngOnInit() {
    this.events$ = this.eventsService.getAllEvents();
    this.instructors$ = this.instructorsService.getAllInstructors();

    //console.log('in form selectedEventUrl input', this.selectedEventUrl);
  }

  onEventDateChange(e : MdDatepickerInputEvent<Date>) {
    this.eventDate = e.value;
  }

  isSelected (e) {
    //console.log('my only value', e);
    return e.url === this.selectedEventUrl;
  }

  get value() {
    return this.form.value;
  }

}
