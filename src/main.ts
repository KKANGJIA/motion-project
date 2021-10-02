const $menus = document.querySelectorAll('.menu');
const $modal = document.querySelector('.modal');
const $modalCloseBtn = document.querySelector('.modal_close');

$menus.forEach(menu => {
  menu.addEventListener('click', () => {
    $modal.style.display = 'block';
  })
})

$modalCloseBtn.addEventListener('click', () => {
  $modal.style.display = 'none';
})
