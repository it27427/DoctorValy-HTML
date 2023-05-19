function showHideSection() {
  const educationInfo = document.querySelector('.educationinfoform');
  const parent = this.parentElement;
  parent.classList.add('d-none');
  educationInfo.classList.remove('d-none');
}

const btnQualifications = document.querySelectorAll('.btn-qualifications');
btnQualifications.forEach(qualification => {
  qualification.addEventListener('click', showHideSection);
})