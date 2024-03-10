let procent = document.querySelector('#range__procent');
let range = document.querySelector('#range');

range.addEventListener('input', () => {
  procent.innerHTML = range.value + '%';
});

// script.js

document.addEventListener('DOMContentLoaded', function () {
  const selectBox = document.querySelector('.custom-select');
  const selectedOption = document.getElementById('selectedOption');
  const optionsList = document.getElementById('options');

  function toggleOptionsList() {
    if (selectedOption.classList.contains('custom-select__selected-option--active')) {
      optionsList.classList.remove('custom-select__options--active');
      selectedOption.classList.remove('custom-select__selected-option--active');
    } else {
      optionsList.classList.add('custom-select__options--active');
      selectedOption.classList.add('custom-select__selected-option--active');
    }
  }

  function selectOption(value, text) {
    selectedOption.querySelector('#selectText').textContent = text;
    optionsList.classList.remove('custom-select__options--active');
    selectedOption.classList.remove('custom-select__selected-option--active');
  }

  selectedOption.addEventListener('click', toggleOptionsList);

  optionsList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('custom-select__option')) {
      selectOption(target.dataset.value, target.textContent);
    }
  });

  document.addEventListener('click', (event) => {
    if (!selectBox.contains(event.target)) {
      optionsList.classList.remove('custom-select__options--active');
      selectedOption.classList.remove('custom-select__selected-option--active');
    }
  });
});
