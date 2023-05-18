document.addEventListener('DOMContentLoaded', createSelect, false)

function createSelect() {
  let select = document.getElementsByTagName('select'),
    liElement,
    ulElement,
    optionValue,
    iElement,
    optionText,
    selectDropdown,
    elementParentSpan

  for (let select_i = 0, len = select.length; select_i < len; select_i++) {

    select[select_i].style.display = 'none'
    wrapElement(
      document.getElementById(select[select_i].id),
      document.createElement('div'),
      select_i,
      select[select_i].getAttribute('placeholder-text')
    )

    for (let i = 0; i < select[select_i].options.length; i++) {
      liElement = document.createElement('li')
      optionValue = select[select_i].options[i].value
      optionText = document.createTextNode(select[select_i].options[i].text)
      liElement.className = 'select-dropdown__list-item'
      liElement.setAttribute('data-value', optionValue)
      liElement.appendChild(optionText)
      ulElement.appendChild(liElement)

      liElement.addEventListener(
        'click',
        function () {
          displyUl(this)
        },
        false
      )
    }
  }

  function wrapElement(el, wrapper, i, placeholder) {
    el.parentNode.insertBefore(wrapper, el)
    wrapper.appendChild(el)

    document.addEventListener('click', function (e) {
      let clickInside = wrapper.contains(e.target)
      if (!clickInside) {
        let menu = wrapper.getElementsByClassName('select-dropdown__list')
        menu[0].classList.remove('active')
        menu[0].previousSibling.classList.remove('active')
      }
    })

    let buttonElement = document.createElement('button'),
      spanElement = document.createElement('span'),
      spanText = document.createTextNode(placeholder)
    iElement = document.createElement('span')
    ulElement = document.createElement('ul')
    svg = '<svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.59 0.795006L6 5.37501L1.41 0.795006L0 2.20501L6 8.20501L12 2.20501L10.59 0.795006Z" fill="white"/></svg>'

    wrapper.className = 'select-dropdown select-dropdown--' + i
    buttonElement.className =
      'select-dropdown__button select-dropdown__button--' + i
    buttonElement.setAttribute('data-value', '')
    buttonElement.setAttribute('type', 'button')
    spanElement.className = 'select-dropdown select-dropdown--' + i
    iElement.className = 'arrowicon'
    ulElement.className = 'select-dropdown__list select-dropdown__list--' + i
    ulElement.id = 'select-dropdown__list-' + i

    wrapper.appendChild(buttonElement)
    spanElement.appendChild(spanText)
    buttonElement.appendChild(spanElement)
    buttonElement.appendChild(iElement)
    iElement.innerHTML = svg
    wrapper.appendChild(ulElement)
  }

  function displyUl(element) {
    if (element.tagName == 'BUTTON') {
      selectDropdown = element.parentNode.getElementsByTagName('ul')
      
      for (let i = 0, len = selectDropdown.length; i < len; i++) {
        selectDropdown[i].classList.toggle('active')
        selectDropdown[i].previousSibling.classList.toggle('active')
      }
    } else if (element.tagName == 'LI') {
      let selectId =
        element.parentNode.parentNode.getElementsByTagName('select')[0]
      selectElement(selectId.id, element.getAttribute('data-value'))
      elementParentSpan =
        element.parentNode.parentNode.getElementsByTagName('span')
      element.parentNode.classList.toggle('active')
      elementParentSpan[0].textContent = element.textContent
      elementParentSpan[0].parentNode.setAttribute(
        'data-value',
        element.getAttribute('data-value')
      )
      element.parentNode.previousSibling.classList.remove('active')
    }
  }

  function selectElement(id, valueToSelect) {
    let element = document.getElementById(id)
    element.value = valueToSelect
    element.setAttribute('selected', 'selected')
  }

  let buttonSelect = document.getElementsByClassName('select-dropdown__button')
  for (let i = 0, len = buttonSelect.length; i < len; i++) {
    buttonSelect[i].addEventListener(
      'click',
      function (e) {
        e.preventDefault()
        displyUl(this)
      },
      false
    )
  }
}
