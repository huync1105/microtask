import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertTimeService {

  private readonly days: string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];
  private readonly months: string[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  giveDayFromRawTime(rawTime: Date): string {
    const newDay = rawTime.getDay();
    const index = newDay - 1;
    return this.days[index];
  }

  giveMonthFromRawTime(rawTime: Date): string {
    const newMonth = rawTime.getMonth();
    return this.months[newMonth];
  }

}
