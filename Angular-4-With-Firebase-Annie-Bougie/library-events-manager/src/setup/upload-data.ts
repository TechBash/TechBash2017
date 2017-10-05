import { database, initializeApp } from "firebase";
import { environment } from "../environments/environment";
import { libraryData } from "./library-data";

initializeApp(environment.firebaseConfig);

const eventsRef = database().ref('events');
const instructorsRef = database().ref('instructors');
const calendarRef = database().ref('scheduledEvents');
const eventInstructorLinkRef = database().ref('eventInstructorLink');
const eventCalendarLinkRef = database().ref('eventsScheduledLink');
const instructorEventLinkRef = database().ref('instructorEventLink');

libraryData.events.forEach(event => {

    console.log('adding event', event.url);

    const eventRef = eventsRef.push({
        url: event.url,
        name: event.name,
        imageUrl: event.imageUrl,
        description: event.description
    });

    const eventInstructorLink = eventInstructorLinkRef.child(eventRef.key);
    
    const eventCalendarLink = eventCalendarLinkRef.child(eventRef.key);
    event.instructors.forEach((instructor: any) => {

        console.log('adding instructor ', instructor.url);

        const instructorRef = instructorsRef.push({
            name: instructor.name,
            imageUrl: instructor.imageUrl,
            username: instructor.username,
            bio: instructor.bio,
            phone: instructor.phone,
            email: instructor.email,
            startDate: new Date(instructor.startDate),
            likes: instructor.likes
        });

        console.log('creating event -> instructor association');
        const eventKeyToInstructorKey = eventInstructorLink.child(instructorRef.key);
        eventKeyToInstructorKey.set(true);

        console.log('creating instructor -> event association');
        const instructorEventLink = instructorEventLinkRef.child(instructorRef.key);
        const instructorKeyToEventKey = instructorEventLink.child(eventRef.key);
        instructorKeyToEventKey.set(true);

        instructor.scheduledEvents.forEach((scheduled: any) => {
            console.log('adding calendar item ', scheduled.eventDate);

            const scheduledEventRef = calendarRef.push({
                eventDate: scheduled.eventDate,
                branch: scheduled.branch,
                eventId: eventRef.key,
                eventName: event.name,
                instructorId: instructorRef.key,
                instructorName: instructor.name
            });

            const calendarEventLink = eventCalendarLink.child(scheduledEventRef.key);
            calendarEventLink.set(true);
        });
    });
});

