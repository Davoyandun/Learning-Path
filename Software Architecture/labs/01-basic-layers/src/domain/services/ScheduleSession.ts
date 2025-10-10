import { Session } from "../entities/Session";

export class SchedulingRules {
  static overlaps(a: Session, b: Session) {
    return (
      a.userId === b.userId &&
      a.createdAt < b.expiredAt &&
      a.expiredAt > b.createdAt
    );
  }
  static canSchedule(candidate: Session, existing: Session[]) {
    return !existing.some(s => SchedulingRules.overlaps(candidate, s));
  }
}