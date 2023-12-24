import Swiper from "swiper";
import { Navigation } from "swiper/modules";

export const sliderCarousel = () => {
  const swiper = new Swiper(".swiper-carousel", {
    modules: [Navigation],
    loop: true,
    slidesPerView: 1,

    navigation: {
      nextEl: ".benefits__arrow--right",
      prevEl: ".benefits__arrow--left",
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
