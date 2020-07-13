import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ContactsComponent,
  FooterComponent,
  HeaderComponent,
  MainComponent,
  PriceComponent,
  WorksComponent
} from './view';

import {WrapperComponent} from './components/wrapper/wrapper.component';
import {RouterModule} from '@angular/router';
import {AmxUserRoutes} from './amx-user-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    WrapperComponent,
    MainComponent,
    WorksComponent,
    PriceComponent,
    ContactsComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AmxUserRoutes),
  ]
})
export class AmxUserModule {
}
