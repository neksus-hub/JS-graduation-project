export const sertificates = () => {
  const documents = document.querySelectorAll(".sertificate-document");
  const imgBlocks = document.querySelectorAll(".img-block");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".img-modal__close");
  let modal = document.querySelector(".img-modal");

  imgBlocks.forEach((item) => {
    const link = item.querySelector(".img-original-link");

    console.log(link);

    item.style.cursor = "pointer";

    item.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.backgroundImage = `url(${link.href})`;
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

//../images/documents/original/document4.jpg)
