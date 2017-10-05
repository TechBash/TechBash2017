import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from './app.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { Route, RouterModule } from "@angular/router";
import { InstructorListComponent } from './instructor/instructor-list/instructor-list.component';

import { EventsService, InstructorsService } from "./shared/services";
import { environment } from '../environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { HomeComponent } from './home/home.component';
import { EventEditComponent } from './event/event-edit/event-edit.component';
import { EventResolver } from "./shared/services/event-resolver";
import { MaterialDesignModule } from './shared/material-design/material-design.module';
import { routes } from './app-routing';
import { InstructorDetailComponent } from './instructor/instructor-detail/instructor-detail.component';
import { InstructorResolver } from './shared/services/instructor-resolver';
import { InstructorEditComponent } from './instructor/instructor-edit/instructor-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InstructorNewComponent } from './instructor/instructor-new/instructor-new.component';
import { ConfirmDialogComponent } from './shared/confirm-dialog/confirm-dialog.component';
import { InstructorFormComponent } from './instructor/instructor-form/instructor-form.component';
import { EventNewComponent } from './event/event-new/event-new.component';
import { EventFormComponent } from './event/event-form/event-form.component';
import { ScheduleEventComponent } from './scheduled-event/schedule-event/schedule-event.component';
import { DragulaModule } from 'ng2-dragula';
import { ScheduleNewComponent } from './scheduled-event/schedule-new/schedule-new.component';
import { ScheduleService } from './shared/services/schedule.service';
import { ScheduleFormComponent } from './scheduled-event/schedule-form/schedule-form.component';
import { MessagingService } from './shared/services/messaging.service';
import { MessageComponent } from './shared/message/message.component';
import { AuthService } from './shared/services/auth.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LinkToEventComponent } from './instructor/link-to-event/link-to-event.component';
import { LinkToInstructorComponent } from './event/link-to-instructor/link-to-instructor.component';
import { CalendarComponent } from './scheduled-event/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    InstructorListComponent,
    EventDetailComponent,
    HomeComponent,
    EventEditComponent,
    InstructorDetailComponent,
    InstructorEditComponent,
    InstructorNewComponent,
    ConfirmDialogComponent,
    InstructorFormComponent,
    EventNewComponent,
    EventFormComponent,
    ScheduleEventComponent,
    ScheduleNewComponent,
    ScheduleFormComponent,
    MessageComponent,
    LoginComponent,
    RegisterComponent,
    LinkToEventComponent,
    LinkToInstructorComponent,
    CalendarComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NoopAnimationsModule,
    RouterModule.forRoot(routes),
    MaterialDesignModule,
    DragulaModule
  ],
  providers: [
    EventsService,
    InstructorsService,
    ScheduleService,
    EventResolver,
    InstructorResolver,
    MessagingService,
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmDialogComponent]
})
export class AppModule { }
