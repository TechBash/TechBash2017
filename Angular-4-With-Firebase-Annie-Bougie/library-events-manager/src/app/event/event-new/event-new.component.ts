import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EventsService } from '../../shared/services';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'event-new',
  templateUrl: './event-new.component.html',
  styleUrls: ['./event-new.component.scss']
})
export class EventNewComponent implements OnInit {

  constructor(
      private eventsService: EventsService,
      private snackbar: MdSnackBar
    ) {}
  
  ngOnInit() {
  }

  saveEvent() {
    this.snackbar.open('New instructor saved', 'Ok', {
      duration: 3000
    });
  }

  save(form) {
    this.eventsService.addNewEvent(form.value)
      .subscribe(() => 
      {
        form.reset();
        this.snackbar.open('New Event saved', '', {
          duration: 3000
        });
      });
  }
}
