import {Routes} from '@angular/router';

import {
  WrapperComponent
} from './components/wrapper/wrapper.component';
import {
  ContactsComponent,
  MainComponent,
  PriceComponent,
  WorksComponent
} from '@app/pages/amx-user/view';

export const AmxUserRoutes: Routes = [
  {
    path: '',
    component: WrapperComponent,
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'works',
        component: WorksComponent,
      },
      {
        path: 'price',
        component: PriceComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      }
    ]
  }
];
