import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { EventListComponent } from "./event/event-list/event-list.component";
import { EventDetailComponent } from "./event/event-detail/event-detail.component";
import { EventResolver } from "./shared/services/event-resolver";
import { InstructorListComponent } from "./instructor/instructor-list/instructor-list.component";
import { InstructorDetailComponent } from "./instructor/instructor-detail/instructor-detail.component";
import { InstructorResolver } from "./shared/services/instructor-resolver";
import { InstructorEditComponent } from "./instructor/instructor-edit/instructor-edit.component";
import { InstructorNewComponent } from "./instructor/instructor-new/instructor-new.component";
import { EventNewComponent } from "./event/event-new/event-new.component";
import { EventEditComponent } from "./event/event-edit/event-edit.component";
import { ScheduleEventComponent } from "./scheduled-event/schedule-event/schedule-event.component";
import { ScheduleNewComponent } from "./scheduled-event/schedule-new/schedule-new.component";
import { CalendarComponent } from "./scheduled-event/calendar/calendar.component";

export const routes: Route[] = [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'events',
      children: [
        {
          path: ':url',
          children: [
            {
              path: '',
              component: EventDetailComponent,
              resolve: {
                event: EventResolver
              }
            },
            {
              path: 'edit',
              component: EventEditComponent,
              resolve: {
                event: EventResolver
              }
            },
            {
              path: 'schedule',
              component: ScheduleEventComponent
            }
          ]
        },
        {
          path: '',
          component: EventListComponent
        }
      ]
    },
    {
      path: 'new-event',
      component: EventNewComponent
    },
    {
      path: 'instructors',
      children: [
        {
          path: ':username',
          children: [
            {
              path: '',
              component: InstructorDetailComponent,
              resolve: {
                 instructor: InstructorResolver
              }
            },
            {
              path: 'edit',
              component: InstructorEditComponent,
              resolve: {
                instructor: InstructorResolver
              }
            }
          ]
        },
        {
          path: '',
          component: InstructorListComponent
        }
      ]
    },
    {
      path: 'new-instructor',
      component: InstructorNewComponent
    },
    {
      path: 'new-schedule',
      component: ScheduleNewComponent
    },
    {
      path: 'calendar',
      component: CalendarComponent
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: 'events'
    }
  ];