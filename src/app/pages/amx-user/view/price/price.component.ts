import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'amx-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  fragments = [
    {
      link: 'radio',
      name: 'Магнитола',
    },
    {
      link: 'acoustic',
      name: 'Акустика',
    },
    {
      link: 'subWoofer',
      name: 'Сабвуфер',
    },
    {
      link: 'receiver',
      name: 'Усилитель',
    },
    {
      link: 'soundproofing',
      name: 'Шумоизоляция',
    },
    {
      link: 'project',
      name: 'Проект',
    }
  ];

  constructor(
    private htmlEl: ElementRef
  ) {
  }

  ngOnInit(): void {
  }

  scrollToCurrentAnchor(anchor: string) {
    const container: any = this.htmlEl.nativeElement.querySelector(`.amx-main`);
    const stickyHeader: any = this.htmlEl.nativeElement.querySelector(`.amx-main-price__fast-way`);
    const anchorLink: any = this.htmlEl.nativeElement.querySelector(`#${anchor}`);
    if (anchorLink && container) {
      anchorLink.scrollIntoView();
      container.scrollTop -= stickyHeader.offsetHeight;
      anchorLink.animate([
        {color: '#ababab'},
        {color: '#c7861e'},
        {color: '#f7b448'},
        {color: '#c7861e'},
        {color: '#ababab'},
      ], {
        easing: 'ease',
        duration: 2000,
        iterations: 1
      });
    }
  }

}
