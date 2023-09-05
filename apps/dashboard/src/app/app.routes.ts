import { DashboardLayoutComponent } from '@mfeng/dashboard/feature/layout';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'todo',
        pathMatch: 'full'
      },
      {
        path: 'todo',
        loadChildren: () => import('todo/Module')
          .then((m) => m.RemoteEntryModule)
      }
    ],
  },
];
