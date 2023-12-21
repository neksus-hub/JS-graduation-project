export const requestACall = () => {
  const modal = document.querySelector(".header-modal");
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
