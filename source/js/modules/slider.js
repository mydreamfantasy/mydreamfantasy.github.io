import Swiper from '../vendor/swiper';
const swiperContainer = document.querySelectorAll('[data-swiper]');

export const getSwiperHero = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper('.hero', {
      speed: 1500,
      loop: true,
      pagination: {
        el: '.hero__pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        320: {
          allowTouchMove: true,
        },
        768: {
          allowTouchMove: true,
        },
        1200: {
          allowTouchMove: false,
        },
      },
    });

    swiper.init();
  }
};

export const getSwiperProgramms = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper('.programms__swiper ', {
      speed: 1500,
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 2.13,
          spaceBetween: 30,
          allowTouchMove: true,

          scrollbar: {
            dragSize: '330',
          },
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 32,
          allowTouchMove: false,

          scrollbar: {
            dragSize: '400',
          },
        },
      },
      scrollbar: {
        el: '.programms__scrollbar',
      },
      navigation: {
        nextEl: '.programms__button-next',
        prevEl: '.programms__button-prev',
      },
    });

    swiper.init();
  }
};

export const getSwiperNews = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper('.news__swiper', {
      speed: 1500,
      loop: false,
      slidesPerView: 'auto',
      spaceBetween: 32,
      allowTouchMove: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          grid: {
            rows: 2,
            fill: 'row',
          },
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 2,
          grid: {
            rows: 2,
            fill: 'row',
          },
          spaceBetween: 30,
          allowTouchMove: true,
        },
        1200: {
          slidesPerView: 'auto',
          spaceBetween: 32,
          allowTouchMove: false,
        },
      },
      pagination: {
        el: '.news__pagination',
        clickable: true,
        /* eslint-disable */
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
      /* eslint-enable */
      navigation: {
        nextEl: '.news__button-next',
        prevEl: '.news__button-prev',
      },
    });
    swiper.init();
  }
};

export const getSwiperReviews = () => {
  if (!swiperContainer) {
    return;
  } else {
    const swiper = new Swiper('.reviews__swiper', {
      speed: 1500,
      loop: false,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 7.5,
          allowTouchMove: true,
        },
        768: {
          slidesPerView: 1.279,
          spaceBetween: 30,
          allowTouchMove: true,

          scrollbar: {
            dragSize: '330',
          },
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 32,
          allowTouchMove: false,

          scrollbar: {
            dragSize: '400',
          },
        },
      },
      scrollbar: {
        el: '.reviews__scrollbar',
      },
      navigation: {
        nextEl: '.reviews__button-next',
        prevEl: '.reviews__button-prev',
      },
    });
    swiper.init();
  }
};
