import {Component, OnInit} from '@angular/core';
import {TOP_MENU} from './../../menu-items.config';

@Component({
  selector: 'amx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu = TOP_MENU;

  constructor() {
  }

  ngOnInit(): void {
  }

  get linkActiveClass(): string {
    return 'active';
  }

}
