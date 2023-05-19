const readUrl = document.querySelector('#readUrl')

readUrl.addEventListener('change', function(e){
  if (this.files[0]) {
    let picture = new FileReader();
    picture.readAsDataURL(this.files[0]);
    
    const image = document.querySelector('#uploadedImage');
    picture.addEventListener('load', function(event) {
      image.setAttribute('src', event.target.result);
    });

    const file = document.querySelector('.filename');
    let filename = e.target.files[0].name;
    file.innerText = filename;

    const parent = this.parentElement;
    parent.classList.add('is-active');

    const removeBtn = document.querySelector('.btn-remove');

    removeBtn.addEventListener('click', () => {
      parent.classList.remove('is-active');
      let imgsrc = '../assets/images/uploaded/default-thumbnail.jpg';
      image.setAttribute('src', imgsrc);
    });
  }
});