import { Injectable, Inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { LibraryEvent } from "../models";
import { Observable } from "rxjs/Rx";
import { EventsService } from "./events.service";


import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';

@Injectable()
export class EventResolver implements Resolve<Observable<LibraryEvent>> {

  firebaseApp: FirebaseApp;

  constructor(private eventsService: EventsService,
    @Inject(FirebaseApp) firebaseApp: FirebaseApp,
    private database: AngularFireDatabase
  ) { 
    this.firebaseApp = firebaseApp;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LibraryEvent>  {
    const url = route.params['url'];
    
    return this.eventsService
    .getEventByUrl(route.params['url'])
    .first();
  }
}
