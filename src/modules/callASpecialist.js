export const callASpecialist = () => {
  const modal = document.querySelector(".services-modal");
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
    if (e.target.closest(".service-button")) {
      showModal();
    } else if (e.target.closest(".services-modal__close")) {
      hideModal();
    }
  });
};
