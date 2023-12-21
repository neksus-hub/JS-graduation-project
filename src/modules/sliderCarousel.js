import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export const sliderCarousel = () => {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,

    navigation: {
      nextEl: ".benefits__arrow--left",
      prevEl: ".benefits__arrow--right",
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      570: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },
  });
};
