"use strict"

const previewSwaiper = document.querySelector('.preview-swiper');

if (previewSwaiper) {
const swiper = new Swiper('.preview-swiper', {
    // Optional parameters
    // direction: '',
    loop: true,
    autoHeight: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    //   clickable: true,
    },
  });
}