import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import { ScheduledEvent } from '../models';

@Injectable()
export class ScheduleService {

  database: firebase.database.Database;

  constructor(private db: AngularFireDatabase, 
    @Inject(FirebaseApp) firebaseApp: FirebaseApp) {
      this.database = firebaseApp.database();
  }

  save(scheduledEvent: ScheduledEvent) {
    
    const saveitem = Object.assign({}, scheduledEvent);
    let eventKey = scheduledEvent.eventId;
    let instructorKey = scheduledEvent.instructorId;
    let scheduledEventsRef = this.database.ref('scheduledEvents');
    let key = scheduledEventsRef.push().key;
    let saveObjects = {};

    saveObjects["scheduledEvents/" + key] = saveitem;
    saveObjects[`eventsScheduledLink/${eventKey}/${key}`] = true;
    this.database.ref().update(saveObjects);
  }
}
