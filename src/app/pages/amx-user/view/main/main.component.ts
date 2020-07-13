import { Component, OnInit } from '@angular/core';
import {Gallery, GalleryItem, ImageItem} from '@ngx-gallery/core';

@Component({
  selector: 'amx-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  items: GalleryItem[];

  constructor(
    public gallery: Gallery
  ) { }

  ngOnInit() {
    // 1. Create gallery items
    this.items = data.map(item =>
      new ImageItem({src: item.srcUrl, thumb: item.previewUrl})
    );
    // Load items into the lightbox
    this.basicLightboxExample();
  }

  basicLightboxExample() {
    this.gallery.ref().load(this.items);
  }

}

const data = [
  {
    srcUrl: '/assets/img/door_map_2.jpg',
    previewUrl: '/assets/img/door_map_2.jpg'
  },
  {
    srcUrl: '/assets/img/hummer.jpg',
    previewUrl: '/assets/img/hummer.jpg'
  },
];
