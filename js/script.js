const swiper = new Swiper('.sliders', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  // watchSlidesProgress: true,
  // virtual: true,
  // autoHeight: auto,
  // slidesPerView: 3,
  // spaceBetween: 90,
  // Navigation arrows
  observer: true,
  observerParents: true,
  // observerSlideChildren: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      // on: {
      //   reach: function () {
      //     swiper.update();
      //   },
      // },
    },

    // 480: {
    //   slidesPerView: 1,
    //   // spaceBetween: 20,
    //   // on: {
    //   //   reach: function () {
    //   //     swiper.update();
    //   //   },
    //   // },
    // },
    // 630: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    //   // on: {
    //   //   reach: function () {
    //   //     swiper.update();
    //   //   },
    //   // },
    // },
    // 655: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    //   // on: {
    //   //   reach: function () {
    //   //     swiper.update();
    //   //   },
    //   // },
    // },
    // 655: {
    //   slidesPerView: 2,
    //   spaceBetween: 25,
    //   // on: {
    //   //   reach: function () {
    //   //     swiper.update();
    //   //   },
    //   // },
    // },
    676: {
      slidesPerView: 2,
      spaceBetween: 30,
      // on: {
      //   reach: function () {
      //     swiper.update();
      //   },
      // },
    },
    701: {
      slidesPerView: 2,
      spaceBetween: 35,
      // on: {
      //   reach: function () {
      //     swiper.update();
      //   },
      // },
    },
    709: {
      slidesPerView: 2,
      spaceBetween: 40,
      // on: {
      //   reach: function () {
      //     swiper.update();
      //   },
      // },
    },
    1030: {
      slidesPerView: 3,
      spaceBetween: 90,
      // on: {
      //   reach: function () {
      //     swiper.update();
      //   },
      // },
    },
    // 1024: {
    //   slidesPerView: 5,
    //   spaceBetween: 50,
    // },
  },
});
window.addEventListener('resize', () => {
  swiper.update();
});

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
