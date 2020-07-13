
import { MenuData } from '@core/models';

export const TOP_MENU: MenuData[] = [
  {
    title: 'Главная',
    link: ''
  },
  {
    title: 'Работы',
    link: '/works'
  },
  {
    title: 'Цены',
    link: '/price'
  },
  {
    title: 'Контакты',
    link: '/contacts'
  }
];

export const INIT_PAGE = TOP_MENU[0].link || '';
export const ACCESS_DENIED = '/access-denied';
