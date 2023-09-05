import { Component, Input } from '@angular/core';
import { ConvertTimeService } from '@mfeng/todo/data-access';

@Component({
  selector: 'mfeng-time-header',
  templateUrl: './time-header.component.html',
  styleUrls: ['./time-header.component.scss'],
})
export class TimeHeaderComponent {

  private _currentTime = new Date();
  currentDay!: string;
  currentDate!: number;
  currentMonth!: string;
  currentYear!: number;

  constructor(
    private convertTime: ConvertTimeService
  ) {
    const ct = this._currentTime;
    this.currentDay = convertTime.giveDayFromRawTime(ct);
    this.currentMonth = convertTime.giveMonthFromRawTime(ct);
    this.currentDate = ct.getDate();
    this.currentYear = ct.getFullYear();
  }
}
