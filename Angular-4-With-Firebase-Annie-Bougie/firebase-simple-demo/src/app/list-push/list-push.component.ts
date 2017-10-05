import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-list-push',
  templateUrl: './list-push.component.html',
  styleUrls: ['./list-push.component.css']
})
export class ListPushComponent  {

  events$: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase) {
    this.events$ = db.list("events");
  }

  addEvent(name) {
    this.events$.push({name: name});
  }

}
