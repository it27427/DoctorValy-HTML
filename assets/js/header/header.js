// const hamburger = document.querySelector('.btn-hamburger');

// hamburger.addEventListener('click', () => {
//   hamburger.classList.toggle('is-active');
// });


const headerEl = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const scrollHeight = window.scrollY;
  const viewHeight = window.innerHeight * 1;

  if(scrollHeight > viewHeight) {
    headerEl.classList.add('header-scrolled');
  } else if(scrollHeight < viewHeight) {
    headerEl.classList.remove('header-scrolled');
  }
})