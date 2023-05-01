const links = document.querySelectorAll("a");

for(const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const gethref = this.getAttribute("href");
  const href = document.querySelector(gethref);
  const offsetTop = href.offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });

  let closeCanvas = document.querySelector('[data-bs-dismiss="offcanvas"]');
  closeCanvas.click();
}