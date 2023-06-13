function checkedAll(mycheckbox) {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const inputs = document.querySelectorAll('.schedulefield');
  
  if(mycheckbox.checked === true) {
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = true;
    });
    inputs.forEach(function(input) {
      input.removeAttribute("disabled");
    });
  } else {
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });
    inputs.forEach(function(input) {
      input.setAttribute("disabled", "true");
    });
  }
}


const allchecks = Array.from(document.querySelectorAll('input[type="checkbox"]'));

allchecks.forEach(check => {
  check.addEventListener('change', function() {
    const row = this.closest('.tablerow');
    const fields = row.querySelectorAll('.schedulefield');
    
    if(check.checked === true) {
      fields.forEach(field => {
        field.removeAttribute("disabled");
      })
    } else {
      fields.forEach(field => {
        field.setAttribute("disabled", "true");
      })
    }
  })
})