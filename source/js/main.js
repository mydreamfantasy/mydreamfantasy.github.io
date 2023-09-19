import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';

import {
  getSwiperHero,
  getSwiperProgramms,
  getSwiperNews,
  getSwiperReviews
} from './modules/slider';
import {
  openMenu,
  openDropMenuProgramm,
  openDropMenuNews
} from './modules/open-menu';
import {initAccordions} from './modules/accordion/init-accordion';
import {CustomSelect} from './modules/select/custom-select';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  // Utils
  // ---------------------------------
  iosVhFix();
  getSwiperHero();
  getSwiperProgramms();
  getSwiperNews();
  getSwiperReviews();
  openMenu();
  openDropMenuProgramm();
  openDropMenuNews();
  initAccordions();

  // Modules
  // ---------------------------------

  /* eslint-disable no-undef */
  const map = L.map('map')
      .on('load', () => {})
      .setView(
          {
            lat: 55.028522,
            lng: 82.928281,
          },
          17
      );
  map.on('mouseout', function () {
    map.scrollWheelZoom.disable();
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  }).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: './img/svg/pin.svg',
    iconSize: [38, 50],
    iconAnchor: [30, 55],
  });

  const mainPinMarker = L.marker(
      {
        lat: 55.028522,
        lng: 82.928281,
      },
      {
        icon: mainPinIcon,
      }
  );

  mainPinMarker.addTo(map);

  mainPinMarker.on('moveend', (evt) => {
    evt.target.getLatLng();
  });

  map.setView(
      {
        lat: 55.028522,
        lng: 82.928281,
      },
      17
  );

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();

    const select = new CustomSelect();
    select.init();

    const form = new Form();
    window.form = form;
    form.init();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
