export const requestACall = () => {
  const modal = document.querySelector(".header-modal");
  const closeBtn = document.querySelector(".header-modal__close");
  const callBtn = document.querySelector("div.col-sm-12>.button");
  const overlay = document.querySelector(".overlay");

  const showModal = () => {
    modal.style.display = "block";
    overlay.style.display = "block";
  };

  const hideModal = () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest("div.col-sm-12>.button")) {
      showModal();
    } else if (e.target.closest(".header-modal__close")) {
      hideModal();
    }
  });
};
