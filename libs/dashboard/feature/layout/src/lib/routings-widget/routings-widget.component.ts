import { Component, Input } from '@angular/core';
import { IMenuItem } from '@mfeng/shared/core/interface';

@Component({
  selector: 'mfeng-routings-widget',
  templateUrl: './routings-widget.component.html',
  styleUrls: ['./routings-widget.component.scss'],
})
export class RoutingsWidgetComponent {
  @Input() menuItems!: IMenuItem[];
}
