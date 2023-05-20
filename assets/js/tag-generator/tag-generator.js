(function () {

  "use strict"


  // Plugin Constructor
  let TagsInput = function (opts) {
    this.options = Object.assign(TagsInput.defaults, opts);
    this.init();
  }

  // Initialize the plugin
  TagsInput.prototype.init = function (opts) {
    this.options = opts ? Object.assign(this.options, opts) : this.options;

    if (this.initialized)
      this.destroy();

    if (!(this.orignal_input = document.getElementById(this.options.selector))) {
      console.error("tags-input couldn't find an element with the specified ID");
      return this;
    }

    this.arr = [];
    this.wrapper = document.createElement('div');
    this.input = document.createElement('input');
    init(this);
    initEvents(this);

    this.input.placeholder = "Enter Speciality";

    this.initialized = true;
    return this;
  }

  // Add Tags
  TagsInput.prototype.addTag = function (string) {

    if (this.anyErrors(string))
      return;

    this.arr.push(string);
    let self = this;

    let tag = document.createElement('span');
    tag.className = this.options.tagClass;
    tag.innerText = string;

    let closeIcon = document.createElement('button');
    const icon = '<svg width="35" height="37" viewBox="0 0 35 37" fill="none" xmlns="http://www.w3.org/2000/svg"><rect y="0.34024" width="35" height="36" rx="10" fill="#D9D9D9"/><path d="M24.5561 13.9019C25.1417 13.3163 25.1417 12.3652 24.5561 11.7795C23.9704 11.1938 23.0193 11.1938 22.4336 11.7795L17.5 16.7178L12.5617 11.7842C11.976 11.1985 11.0249 11.1985 10.4392 11.7842C9.85358 12.3698 9.85358 13.321 10.4392 13.9066L15.3776 18.8402L10.4439 23.7785C9.85827 24.3642 9.85827 25.3153 10.4439 25.901C11.0296 26.4867 11.9807 26.4867 12.5664 25.901L17.5 20.9627L22.4383 25.8963C23.024 26.482 23.9751 26.482 24.5608 25.8963C25.1464 25.3106 25.1464 24.3595 24.5608 23.7739L19.6224 18.8402L24.5561 13.9019Z" fill="#292E3E"/></svg>';
    closeIcon.innerHTML = icon;

    // delete the tag when icon is clicked
    closeIcon.addEventListener('click', function (e) {
      e.preventDefault();
      let tag = this.parentNode;

      for (let i = 0; i < self.wrapper.childNodes.length; i++) {
        if (self.wrapper.childNodes[i] == tag)
        self.deleteTag(tag, i);
      }
    })

    tag.appendChild(closeIcon);
    this.wrapper.insertBefore(tag, this.input);
    this.orignal_input.value = this.arr.join(',');

    return this;
  }

  // Delete Tags
  TagsInput.prototype.deleteTag = function (tag, i) {
    tag.remove();
    this.arr.splice(i, 1);
    this.orignal_input.value = this.arr.join(',');
    return this;
  }

  // Make sure input string have no error with the plugin
  TagsInput.prototype.anyErrors = function (string) {
    if (this.options.max != null && this.arr.length >= this.options.max) {
      console.log('max tags limit reached');
      return true;
    }

    if (!this.options.duplicate && this.arr.indexOf(string) != -1) {
      console.log('duplicate found " ' + string + ' " ')
      return true;
    }

    return false;
  }

  // Add tags programmatically 
  TagsInput.prototype.addData = function (array) {
    let plugin = this;

    array.forEach(function (string) {
      plugin.addTag(string);
    })
    return this;
  }

  // Get the Input String
  TagsInput.prototype.getInputString = function () {
    return this.arr.join(',');
  }

  // destroy the plugin
  TagsInput.prototype.destroy = function () {
    this.orignal_input.removeAttribute('hidden');

    delete this.orignal_input;
    let self = this;

    Object.keys(this).forEach(function (key) {
      if (self[key] instanceof HTMLElement)
        self[key].remove();

      if (key != 'options')
        delete self[key];
    });

    this.initialized = false;
  }

  // Private function to initialize the tag input plugin
  function init(tags) {
    tags.wrapper.append(tags.input);
    tags.wrapper.classList.add(tags.options.wrapperClass);
    tags.orignal_input.setAttribute('hidden', 'true');
    tags.orignal_input.parentNode.insertBefore(tags.wrapper, tags.orignal_input);
  }

  // initialize the Events
  function initEvents(tags) {
    tags.wrapper.addEventListener('click', function () {
      tags.input.focus();
    });

    tags.input.addEventListener('keydown', function (e) {
      let str = tags.input.value.trim();

      if (!!(~[9, 13, 188].indexOf(e.keyCode))) {
        e.preventDefault();
        tags.input.value = "";
        if (str != "")
          tags.addTag(str);
      }
    });
  }

  // Set All the Default Values
  TagsInput.defaults = {
    selector: '',
    wrapperClass: 'tagswrapper',
    tagClass: 'tag',
    max: null,
    duplicate: false
  }

  window.TagsInput = TagsInput;

})();

const variant1 = new TagsInput({
  selector: 'speciality',
  duplicate: false,
  max: 10
});
variant1.addData(['Neurologist', 'Pathologist']);
