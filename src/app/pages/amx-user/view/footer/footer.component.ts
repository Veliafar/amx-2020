import { Component, OnInit } from '@angular/core';
import {TOP_MENU} from './../../menu-items.config';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'amx-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  menu = TOP_MENU;

  constructor() { }

  ngOnInit(): void {
  }

  get linkActiveClass(): string {
    return 'active';
  }

}
