export const requestACall = () => {
  const modal = document.querySelector(".header-modal");
  const overlay = document.querySelector(".overlay");
  const body = document.querySelector("body");

  const showModal = () => {
    modal.style.display = "block";
    overlay.style.display = "block";
  };

  const hideScroll = () => {
    let div = document.createElement("div");

    div.style.overflowY = "scroll";
    div.style.width = "50px";
    div.style.height = "50px";

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    body.style.paddingRight = `${scrollWidth}px`;
    body.style.overflow = "hidden";
  };

  const hideModal = () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest("div.col-sm-12>.button")) {
      showModal();
      hideScroll();
    } else if (e.target.closest(".header-modal__close")) {
      hideModal();
      body.style.paddingRight = `0`;
      body.style.overflow = "visible";
    }
  });
};
