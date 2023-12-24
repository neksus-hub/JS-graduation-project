import { requestACall } from "./modules/requestACall";
import { sliderCarousel } from "./modules/sliderCarousel";
import { smoothScroll } from "./modules/scroll";
import { serviceSlider } from "./modules/serviceSlider";
import { callASpecialist } from "./modules/callASpecialist";
import { timer } from "./modules/timer";
import { validForm } from "./modules/validForm";

requestACall();
sliderCarousel();
smoothScroll();
serviceSlider();
callASpecialist();
timer("31 december 2023");
validForm();
