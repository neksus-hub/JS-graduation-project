export const sertificates = () => {
  const documents = document.querySelectorAll(".sertificate-document");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".img-modal__close");
  let modal = document.querySelector(".img-modal");

  documents.forEach((item) => {
    item.style.cursor = "pointer";

    item.addEventListener("click", () => {
      modal.style.backgroundImage = `url(${item.src})`;
      modal.style.backgroundRepeat = `no-repeat`;
      modal.style.backgroundPosition = `center`;
      modal.style.backgroundSize = `370px 500px`;
      modal.style.padding = "15px 15px 15px 15px";
      modal.style.display = "block";
      overlay.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
  });
};
