export const smoothScroll = () => {
  const anchor = document.querySelector(".smooth-scroll");
  anchor.style.cursor = "pointer";

  const showAnchor = () => {
    if (window.scrollY > document.documentElement.clientHeight) {
      anchor.style.display = "block";
    } else {
      anchor.style.display = "none";
    }
  };

  const scroll = () => {
    if (window.scrollY > 0) {
      window.scrollBy(0, -75);
      setTimeout(scroll, 0);
    }
  };

  window.addEventListener("scroll", () => {
    showAnchor();
  });

  anchor.addEventListener("click", () => {
    scroll();
  });

  showAnchor();
};
