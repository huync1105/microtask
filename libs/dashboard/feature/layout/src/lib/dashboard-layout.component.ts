import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { menuItems } from '@mfeng/shared/core/constant';

@Component({
  selector: 'mfeng-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss'],
})
export class DashboardLayoutComponent implements OnInit {
  menuItems = menuItems;

  constructor(private _router: Router) {}

  ngOnInit(): void {
    this._router.events.subscribe(res => {
      this.checkItemActive();
    });
  }

  private checkItemActive() {
    this.menuItems.forEach(item => {
      item.isActive = this._router.url.includes(item.routerLink)
    })
  }
}
