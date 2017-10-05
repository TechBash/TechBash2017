import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LibraryEvent } from '../shared/models';
import { EventsService } from '../shared/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  events$: Observable<LibraryEvent[]>;

  constructor(
    private eventsService: EventsService
  ) { }

  ngOnInit() {
    this.events$ = this.eventsService.getAllEvents();
  }

}
