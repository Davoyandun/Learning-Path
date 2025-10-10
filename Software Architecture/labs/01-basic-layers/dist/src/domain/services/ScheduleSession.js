"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulingRules = void 0;
class SchedulingRules {
    static overlaps(a, b) {
        return (a.userId === b.userId &&
            a.createdAt < b.expiredAt &&
            a.expiredAt > b.createdAt);
    }
    static canSchedule(candidate, existing) {
        return !existing.some(s => SchedulingRules.overlaps(candidate, s));
    }
}
exports.SchedulingRules = SchedulingRules;
