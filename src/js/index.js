// vendors
import 'babel-polyfill';
import Swiper from 'swiper';

// components


document.addEventListener('DOMContentLoaded', () => {

});

new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //   touchRatio: 1,
  grabCursor: true,
  loop: true,
  // mousewheel: {
  //   sensitivity: 2,
  // },
  effect: 'flip',
  flipEffect: {
    slideShadow: true,
    limitRotation: true,
  },
});

new Swiper('.swiper-container-feedback', {
  effect: 0,
});
