const formSelect = document.querySelector('.form-box');
const formSelectOptions = document.querySelectorAll('.form-select__option');
document.body.addEventListener('click', event => {
  let target = event.target;
  if (!target.classList.contains('form-box') && !formSelect.contains(target)) {
    formSelect.classList.contains('select-focus') ? toggleSelect(): '';
  }
});

formSelect.addEventListener('click', toggleSelect);
formSelectOptions.forEach(item => {
  item.addEventListener('click', toggleSelect)
});

function toggleSelect() {
  formSelect.classList.toggle('select-focus');
}

document.addEventListener('scroll', () => {
  formSelect.classList.contains('select-focus') ? toggleSelect(): '';
});