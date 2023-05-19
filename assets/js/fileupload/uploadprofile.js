const profileImage = document.querySelector('#profileImage')

profileImage.addEventListener('change', function(e){
  if (this.files[0]) {
    let picture = new FileReader();
    picture.readAsDataURL(this.files[0]);
    
    const image = document.querySelector('#uploadedImage');
    picture.addEventListener('load', function(event) {
      image.setAttribute('src', event.target.result);
    });

    const parent = this.parentElement.parentElement;
    
    if(parent.classList.contains('emptyprofile')) {
      parent.classList.remove('emptyprofile');
    } else {
      parent.classList.add('emptyprofile');
    }
  }
});