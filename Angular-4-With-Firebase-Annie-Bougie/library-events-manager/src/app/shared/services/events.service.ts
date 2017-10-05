import { Injectable, Inject } from '@angular/core';
import { Http } from "@angular/http";

import { Observable } from 'rxjs/Rx';
import { AngularFireDatabase } from "angularfire2/database";
import { LibraryEvent } from "../models";
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/switchMap';
import { FirebaseApp } from 'angularfire2';

@Injectable()
export class EventsService {

  firebaseApp: FirebaseApp;

  constructor(
      private db:AngularFireDatabase,
      @Inject(FirebaseApp) firebaseApp: FirebaseApp,
      private http: Http
  ) {
      this.firebaseApp = firebaseApp;
   }

  getAllEvents() : Observable<LibraryEvent[]> {
    return this.db.list('events')
      .map(LibraryEvent.jsonArrayToObjects);
  }

  deleteEvent($key:string): Observable<any> {
    return Observable.fromPromise(this.firebaseApp.database().ref('events/' + $key)
    .remove());
  }

  getEventByUrl(url: string) : Observable<LibraryEvent> {
    return this.db.list('events', {
      query: {
          orderByChild: 'url',
          equalTo: url
      }
    })
    .map(results => LibraryEvent.jsonToObject(results[0]));
  }

  addNewEvent(event: LibraryEvent) : Observable<any> {
     return Observable.fromPromise(this.firebaseApp.database().ref().child('/events')
     .push(event))
  }

  updateEvent($key: string, event: LibraryEvent) : Observable<any> {
    const eventRef = this.firebaseApp.database().ref().child(`/events/${$key}`);
    return Observable.fromPromise(eventRef.set(event));
  }
}
