import { Component, OnInit, ElementRef } from '@angular/core';
import { MessagingService } from './shared/services/messaging.service';
import { MdSnackBar } from '@angular/material';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  message: any;

  constructor(
    private messagingService: MessagingService,
    private authService: AuthService,
    private snackBar: MdSnackBar,
    private element: ElementRef,
  ) {

  }

  ngOnInit(): void {
    
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
    console.log('in app component', this.authService.authenticated == true);
    //console.log(this.authService.currentUser);
    if (this.authService.authenticated) {
      console.log(this.authService.authenticated);
    }
  }

  login() {
    if (!this.authService.authenticated){
      console.log('logging in');
      this.authService.anonymousLogin();
    }
    else {
      console.log('already logged in. User id is ' + this.authService.currentUser.uid);
      this.snackBar.open("You are already logged in", "", {
        duration: 3000
      });
    }
  }

  loginWithGoogle() {
    console.log('login using Google auth');
    this.authService.googleSignIn();
    
  }

  logout() {
    if (this.authService.authenticated) {
      console.log('logging out');
      this.authService.logout();
    }
  }

  get loggedIn() : Boolean {
    return this.authService.authenticated;
  }
}

