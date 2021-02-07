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
  effect: 'flip',
  flipEffect: {
    slideShadow: true,
    limitRotation: true,
  },
});
