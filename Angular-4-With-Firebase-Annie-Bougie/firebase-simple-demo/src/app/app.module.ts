import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule }  from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SimpleValueComponent } from './simple-value/simple-value.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app-routing';
import { SimpleListComponent } from './simple-list/simple-list.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ListPushComponent } from './list-push/list-push.component';
import { AtomicSaveComponent } from './atomic-save/atomic-save.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleValueComponent,
    SimpleListComponent,
    SimpleFormComponent,
    ListPushComponent,
    AtomicSaveComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
