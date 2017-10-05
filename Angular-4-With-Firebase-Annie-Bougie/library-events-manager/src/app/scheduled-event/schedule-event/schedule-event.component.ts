
import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EventsService, InstructorsService } from '../../shared/services';
import { ScheduleService } from '../../shared/services/schedule.service';
import { LibraryEvent, Instructor } from '../../shared/models';

@Component({
  selector: 'schedule-event',
  templateUrl: './schedule-event.component.html',
  styleUrls: ['./schedule-event.component.scss']
})
export class ScheduleEventComponent implements OnInit {

  eventUrl: string;
  instructorUsername: string;


  constructor(
      private route: ActivatedRoute,
      private eventsService: EventsService,
      private instructorsService: InstructorsService,
      private scheduleService: ScheduleService
    ) { 

    route.queryParamMap.subscribe(x => {
      this.eventUrl = x.get('eventUrl');
      this.instructorUsername = x.get('username');
    });
  }

  ngOnInit() {

  }

}
