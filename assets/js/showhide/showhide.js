function showHideSection() {
  const educationform = document.querySelector('#educationform');
  const experienceform = document.querySelector('#experienceform');
  const parent = this.parentElement;
  parent.classList.add('d-none');
  educationform.classList.remove('d-none');
  experienceform.classList.remove('d-none');
}

const btnQualifications = document.querySelectorAll('.btn-qualifications');
btnQualifications.forEach(qualification => {
  qualification.addEventListener('click', showHideSection);
})