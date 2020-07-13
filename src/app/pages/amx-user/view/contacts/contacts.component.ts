import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'amx-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  mediaWidth = 1024;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth > 1024) {
      this.mediaWidth = 1024;
    }
    if (event.target.innerWidth <= 1024 && event.target.innerWidth > 640) {
      this.mediaWidth = 640;
    }
    if (event.target.innerWidth <= 640) {
      this.mediaWidth = 320;
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
