export class ScheduledEvent {
  eventId: string;
  eventName: string;
  instructorId: string;
  instructorName: string;
  branch: string;  
  eventDate: string;

  public static jsonToObject({eventId, eventName, instructorId, instructorName, branch, eventDate}) {
    const scheduledEvent = new ScheduledEvent();
    scheduledEvent.eventId = eventId;
    scheduledEvent.eventName = eventName;
    scheduledEvent.instructorId = instructorId;
    scheduledEvent.instructorName = instructorName;
    scheduledEvent.branch = branch;
    scheduledEvent.eventDate = eventDate;
  }
}