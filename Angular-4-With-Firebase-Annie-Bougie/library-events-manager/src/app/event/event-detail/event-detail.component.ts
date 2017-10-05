import { Component, OnInit } from '@angular/core';
import { LibraryEvent } from "../../shared/models";
import { ActivatedRoute, Router } from "@angular/router";
import { MdDialog, MdSnackBar } from '@angular/material';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { EventsService } from '../../shared/services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {

  event: LibraryEvent;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      public dialog: MdDialog,
      private eventsService: EventsService,
      private snackbar: MdSnackBar,
      private location: Location
    ) { }

  ngOnInit() {
     this.event = this.route.snapshot.data['event'];
  }

  delete() {
    let dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: { title: 'Delete Event', message: 'Do you want to delete this event?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.eventsService.deleteEvent(this.event.$key)
         .subscribe(
            () => {
              this.snackbar.open('Event was deleted', '', {
                duration: 3000
            });
            this.location.back();
          },
            console.error
        );
      }
    });

  }

}
