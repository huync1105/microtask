import { IMenuItem } from '@mfeng/shared/core/interface';
export const menuItems: IMenuItem[] = [
  {
    label: 'todo',
    icon: 'task',
    isActive: false,
    routerLink: '/todo'
  },
  {
    label: 'weather',
    icon: 'thunderstorm',
    isActive: false,
    routerLink: '/weather'
  }
];