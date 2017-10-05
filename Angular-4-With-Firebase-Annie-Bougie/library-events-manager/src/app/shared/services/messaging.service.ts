import { Injectable, Inject } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase';

import { MdSnackBar } from '@angular/material';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessagingService {

  firebaseApp: FirebaseApp;
  messaging = firebase.messaging();
  currentMessage = new BehaviorSubject(null);

  constructor(
    private database: AngularFireDatabase,
    @Inject(FirebaseApp) firebaseApp: FirebaseApp,
    private snackbar: MdSnackBar
  ) {
    this.firebaseApp = firebaseApp;
  }

  getPermission(uid) {
    this.messaging.requestPermission()
      .then(() => {
        console.log("Permission granted")
        this.snackbar.open("You will now receive scheduled event notifications", " ", {
          duration: 3000
        });
        return this.messaging.getToken();
      })
      .then((token) => {
        console.log(token);
        this.saveToken(token, uid);

      })
      .catch(() => {
        console.log("Permission not granted");
      });
  }

  saveToken(token, uid) {
    const data = { userId: uid, token: token }
    const tokenRecord = this.database.list('tokens/', {
      query: {
        orderByChild: 'userId',
        equalTo: uid
      }
    }).subscribe(t => {
      console.log(t);
      if ((t.length == 0)) {
        this.database.list('tokens/').push(data);
      }
    });

    //list.push(data)
  }

  receiveMessage() {
    this.messaging.onMessage((payload: any) => {
      console.log("Message received. ", payload);
      this.snackbar.open(payload.notification.title, payload.notification.body)
      this.currentMessage.next(payload)
    });

  }
}
