const btnHamburger = document.querySelector('#btn-hamburger');

function toggleBurger() {
  const span = this.firstElementChild;
  
  if(span.classList.contains('active')) {
    span.classList.remove('active');
  } else {
    span.classList.add('active');
  }

  const sidebar = document.querySelector('.sidebar');
  const main = document.querySelector('.mainsection');
  const footer = document.querySelector('.footer');

  sidebar.classList.toggle('collapsed-sidebar');
  main.classList.toggle('collapsed-main');
  footer.classList.toggle('collapsed-footer');
}

btnHamburger.addEventListener('click', toggleBurger);