const btnHamburger = document.querySelector('.btn-hamburger');

function toggleBurger() {
  const span = this.firstElementChild;
  
  if(span.classList.contains('active')) {
    span.classList.remove('active');
  } else {
    span.classList.add('active');
  }
}

btnHamburger.addEventListener('click', toggleBurger);