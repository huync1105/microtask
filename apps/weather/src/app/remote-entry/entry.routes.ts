import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  { 
    path: '', 
    component: RemoteEntryComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@mfeng/weather/feature/layout')
          .then(m => m.WeatherFeatureLayoutModule)
      }
    ]
  },
];
