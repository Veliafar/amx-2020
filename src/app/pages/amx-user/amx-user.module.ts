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
import {LightboxModule} from '@ngx-gallery/lightbox';
import {GalleryModule} from '@ngx-gallery/core';


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
    GalleryModule,
    LightboxModule.withConfig({
      panelClass: 'fullscreen'
    })
  ]
})
export class AmxUserModule {
}
