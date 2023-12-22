import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export const serviceSlider = () => {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,

    navigation: {
      nextEl: ".services__arrow--right",
      prevEl: ".services__arrow--left",
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
    },
  });
};
