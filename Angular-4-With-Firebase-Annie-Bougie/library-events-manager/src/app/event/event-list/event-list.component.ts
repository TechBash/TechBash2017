import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { LibraryEvent } from "../../shared/models/event.model";
import { EventsService } from "../../shared/services/events.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events$: Observable<LibraryEvent[]>;

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.events$ = this.eventsService.getAllEvents();
  }


}
