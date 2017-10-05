import { Component, OnInit, Inject } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase';

@Component({
  selector: 'app-atomic-save',
  templateUrl: './atomic-save.component.html',
  styleUrls: ['./atomic-save.component.css']
})
export class AtomicSaveComponent implements OnInit {

  database: firebase.database.Database;
  event;
  pathToObject = '/events/0';

  constructor(
    private db: AngularFireDatabase,
    @Inject(FirebaseApp) firebaseApp: FirebaseApp) {
      this.database = firebaseApp.database();
  }

  ngOnInit() {
    this.db.list("events", {
      query: {
        limitToLast: 1
      }
    }).subscribe(x => this.event = x[0]);
  }

  like() {
    let likesRef = this.database.ref('likes');
    let likePushKey = likesRef.push().key;

    let eventKey = this.event.$key;
    let likedEvent = { name: this.event.name + ' For Fun & Profit', like: 'someone likes this' };

    let saveObjects = {};
    saveObjects[`events/${eventKey}`] = likedEvent;
    saveObjects[`likes/${likePushKey}/${eventKey}`] = true;
    this.database.ref().update(saveObjects);
  }

}
