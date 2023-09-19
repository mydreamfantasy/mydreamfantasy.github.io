import {ScrollLock} from '../utils/scroll-lock';
window.scrollLock = new ScrollLock();

const navMain = document.querySelector('.header__nav');
const navToggle = document.querySelector('.header__nav__btn');

const navDropmenuNews = document.querySelector('.header__nav__item--news');
const navDropmenuProgramms = document.querySelector(
    '.header__nav__item--programms'
);

const navItemProgrammsButton = document.querySelector(
    '.header__nav__item-programms-button'
);
const navItemNewsButton = document.querySelector(
    '.header__nav__item-news-button'
);

export const openMenu = () => {
  navMain.classList.remove('header__nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('header__nav--closed')) {
      navMain.classList.remove('header__nav--closed');
      navMain.classList.add('header__nav--opened');
      window.scrollLock.disableScrolling();
    } else {
      document.addEventListener('click', (e) => {
        const withinBoundaries = e.composedPath().includes(navMain);
        if (!withinBoundaries) {
          navMain.classList.add('header__nav--closed');
          navMain.classList.remove('header__nav--opened');
          window.scrollLock.enableScrolling();
          if (
            navDropmenuNews.classList.contains('header__nav__item--button-open')
          ) {
            navDropmenuNews.classList.remove('header__nav__item--button-open');
            navDropmenuNews.classList.add('header__nav__item--button-close');
          }

          if (
            navDropmenuProgramms.classList.contains(
                'header__nav__item--button-open'
            )
          ) {
            navDropmenuProgramms.classList.remove(
                'header__nav__item--button-open'
            );
            navDropmenuProgramms.classList.add(
                'header__nav__item--button-close'
            );
          }
        }
      });

      navMain.classList.add('header__nav--closed');
      navMain.classList.remove('header__nav--opened');
      window.scrollLock.enableScrolling();
      if (
        navDropmenuNews.classList.contains('header__nav__item--button-open')
      ) {
        navDropmenuNews.classList.remove('header__nav__item--button-open');
        navDropmenuNews.classList.add('header__nav__item--button-close');
      }

      if (
        navDropmenuProgramms.classList.contains(
            'header__nav__item--button-open'
        )
      ) {
        navDropmenuProgramms.classList.remove('header__nav__item--button-open');
        navDropmenuProgramms.classList.add('header__nav__item--button-close');
      }
    }
  });
};

export const openDropMenuNews = () => {
  navItemNewsButton.addEventListener('click', function () {
    if (navDropmenuNews.classList.contains('header__nav__item--button-close')) {
      navDropmenuNews.classList.remove('header__nav__item--button-close');
      navDropmenuNews.classList.add('header__nav__item--button-open');
    } else {
      navDropmenuNews.classList.add('header__nav__item--button-close');
      navDropmenuNews.classList.remove('header__nav__item--button-open');
    }
  });
};

export const openDropMenuProgramm = () => {
  navItemProgrammsButton.addEventListener('click', function () {
    if (
      navDropmenuProgramms.classList.contains('header__nav__item--button-close')
    ) {
      navDropmenuProgramms.classList.remove('header__nav__item--button-close');
      navDropmenuProgramms.classList.add('header__nav__item--button-open');
    } else {
      navDropmenuProgramms.classList.add('header__nav__item--button-close');
      navDropmenuProgramms.classList.remove('header__nav__item--button-open');
    }
  });
};
