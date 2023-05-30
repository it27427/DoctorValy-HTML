const button = document.querySelector('.btn-mobsearch');

function toggleIcon() {
  const searchicon = document.querySelector('.searchicon');
  const closeicon = document.querySelector('.closeicon');

  if(closeicon.classList.contains('d-none')) {
    closeicon.classList.remove('d-none');
    searchicon.classList.add('d-none');
  } else {
    closeicon.classList.add('d-none');
    searchicon.classList.remove('d-none');
  }
}

button.addEventListener('click', toggleIcon)