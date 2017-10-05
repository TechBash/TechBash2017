import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.css']
})
export class SimpleListComponent implements OnInit {

  events$: FirebaseListObservable<any>;

  constructor(private db: AngularFireDatabase) { 
    this.events$ = db.list("events");
  }

  ngOnInit() {
  }

}
