import { Injectable, Inject } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/observable/fromPromise';
import { Instructor } from "../models";
import { FirebaseApp } from 'angularfire2';

@Injectable()
export class InstructorsService {

  firebaseApp: FirebaseApp;

  constructor(private db: AngularFireDatabase, 
    @Inject(FirebaseApp) firebaseApp: FirebaseApp) {
      this.firebaseApp = firebaseApp;
  }

  getAllInstructors() : Observable<Instructor[]> {
    return this.db.list('instructors')
      .map(Instructor.jsonArrayToObjectArray);
  }

  getInstructorByUsername(username: string) : Observable<Instructor> {
    return this.db.list('instructors', {
      query: {
          orderByChild: 'username',
          equalTo: username
      }
    })
    .map(results => results[0]);
  }

  addNewInstructor(instructor: any) { 
    return Observable.fromPromise(this.firebaseApp.database().ref().child('/instructors')
       .push(instructor));
  }

  updateInstructor($key: string, instructor: Instructor) : Observable<any> {
    const instructorRef = this.firebaseApp.database().ref().child(`/instructors/${$key}`);
    return Observable.fromPromise(instructorRef.set(instructor));
  }

  deleteInstructor($key: string) : Observable<any> {
     return Observable.fromPromise(this.firebaseApp.database().ref('instructors/' + $key)
     .remove());
  }

  addLike($key: string) {
    this.firebaseApp.database().ref().child('queue/likes/tasks').push({instructorKey: $key}).then(() => {
    });
  }

  // old like method
  like($key: string, likes: number) {
    console.log('likes before : ' + likes);
    likes += 1;

    const instructorRef = this.firebaseApp.database().ref('instructors/' + $key);
      instructorRef.update({likes: likes}).then(() => console.log('instructor liked'));
  }
}
