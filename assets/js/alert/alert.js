document.querySelector('.btn-publish').addEventListener('click', () => {
  Swal.fire({
    icon: 'success',
    title: 'Blog Publish Successfully',
    text: 'Your Blog is published. Thank you for your contribution.',
    showConfirmButton: false,
    showCancelButton: true,
    cancelButtonText: 'Close',
    // timer: 1500
  })
})

document.querySelector('.btn-update').addEventListener('click', () => {
  Swal.fire({
    icon: 'success',
    title: 'Blog Update Successfully',
    text: 'Your Blog is published. Thank you for your contribution.',
    showConfirmButton: false,
    showCancelButton: true,
    cancelButtonText: 'Close',
  })
})