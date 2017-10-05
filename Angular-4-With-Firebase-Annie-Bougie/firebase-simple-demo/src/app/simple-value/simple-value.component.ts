import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'simple-value',
  templateUrl: 'simple-value.component.html',
  styleUrls: ['simple-value.component.css']
})
export class SimpleValueComponent implements OnInit {
  event$: FirebaseObjectObservable<any>;

  constructor(private db: AngularFireDatabase) {
    
  }

  ngOnInit() {
    const pathToObject = '/events/0';
    this.event$ = this.db.object(pathToObject);
    
    this.event$.subscribe(console.log);
  }
}