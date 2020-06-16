import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@jctickets/common";

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
