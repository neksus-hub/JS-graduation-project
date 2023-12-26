import Inputmask from "inputmask";

export const maskTel = () => {
  const phonesInputs = document.querySelectorAll("input[name=phone]");

  const im = new Inputmask({
    mask: "+7 (999) 999-99-99",
    showMaskOnHover: false,
    showMaskOnFocus: false,
    jitMasking: true,
    inputmode: "tel",
  });

  phonesInputs.forEach((inp) => {
    im.mask(inp);
  });
};
