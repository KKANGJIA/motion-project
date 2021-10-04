'use strict';

const $menus = document.querySelectorAll('.menu');
const $modal = document.querySelector('.modal');
const $modalCloseBtn = document.querySelector('.modal_close');
const $title = document.querySelector('.title');
const $url = document.querySelector('.url');
const $content = document.querySelector('.content');
const $modalButton = document.querySelector('.modal_button');

// 각 메뉴에 모달창 연결
$menus.forEach(menu => {
  menu.addEventListener('click', () => {
    $modal.style.display = 'block';
  });
});

//모달창 끄기
$modalCloseBtn.addEventListener('click', () => {
  $modal.style.display = 'none';
});

// 모달창으로 카드만들기
// 이거 비디오로 재사용하기
let id = 0;
function createCard(){
  let title = $title.value;
  let url = $url.value;
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.id = id;
  const text = document.createElement('p');
  text.classList.add('text');
  text.textContent = 'image';
  const img = document.createElement('img');
  img.classList.add('card-img');
  img.setAttribute('src', url);
  const divide = document.createElement('div');
  divide.classList.add('divide');
  card.appendChild(img);
  card.appendChild(divide);
  card.appendChild(text);
  const close = `<button class="close" data-id=${id}>
                  <i class="fas fa-times"></i>
                </button>`;
  card.innerHTML += close;
  $content.appendChild(card);
  
  id++;
}

$modalButton.addEventListener('click', () => {
  createCard();
  $modal.style.display = 'none';
});

// 모달창 카드 삭제하기 => 왜 안되지이
const $card = document.querySelector('.card');
if($card){
  const $close = document.querySelector('.close');
  console.log('close');
  function deleteCard(){
    if($close.dataset.id === $card.dataset.id){
      $card.remove();
    }
  }
  $close.addEventListener('click', deleteCard());
}







