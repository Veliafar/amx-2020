import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LazyRoutePreloadingStrategy} from '@core/providers/lazy-route.preloading.strategy';

const routes: Routes = [
  {
    path: '',
    loadChildren: './pages/amx-user/amx-user.module#AmxUserModule',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    preloadingStrategy: LazyRoutePreloadingStrategy
  })],
  exports: [RouterModule],
  providers: [LazyRoutePreloadingStrategy]
})
export class AppRoutingModule {
}

