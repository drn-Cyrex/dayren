import { Swiper } from "swiper";
import { Mousewheel, Navigation } from 'swiper/modules';

const csSwiper = new Swiper('.cs-swiper', {

   modules: [Mousewheel, Navigation],
   mousewheel: true,
   navigation: {
      nextEl: '.cs-swiper-button-next',
      prevEl: '.cs-swiper-button-prev',
   },
   
   effect: 'coverflow',
   coverflowEffect: {
      rotate: 30,
      slideShadows: false,
   },
})


const csNavButton = document?.querySelector('[data-cs-navBtn]');
const csNav = document?.querySelector('[data-cs-nav]');

csNavButton?.addEventListener('click', () => {
   csNavButton.classList.toggle('active-cs-button');
   csNav.classList.toggle('active-cs-nav');
})



