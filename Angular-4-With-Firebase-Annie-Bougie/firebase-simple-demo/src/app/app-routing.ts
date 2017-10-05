import { Route, Routes } from '@angular/router';
import { SimpleValueComponent } from './simple-value/simple-value.component';
import { SimpleListComponent } from './simple-list/simple-list.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ListPushComponent } from './list-push/list-push.component';
import { AtomicSaveComponent } from './atomic-save/atomic-save.component';


export const routes: Routes = [
  { path: 'simple-value', component: SimpleValueComponent },
  { path: 'simple-list', component: SimpleListComponent},
  { path: 'simple-form', component: SimpleFormComponent},
  { path: 'list-push', component: ListPushComponent},
  { path: 'atomic-save', component: AtomicSaveComponent}
];
