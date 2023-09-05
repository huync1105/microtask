import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@mfeng/todo/feature/layout')
          .then(m => m.TodoFeatureLayoutModule)
      }
    ]
  },
];
