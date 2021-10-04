'use strict';

const $menus = document.querySelectorAll('.menu');
const $image = document.querySelector('.image');
const $video = document.querySelector('.video');
const $task = document.querySelector('.task');
const $note = document.querySelector('.note');
const $modal = document.querySelector('.modal');
const $modalArticle = document.querySelector('.modal_article');
const $modalCloseBtn = document.querySelector('.modal_close');
const $title = document.querySelector('.title');
const $article = document.querySelector('.article');
const $content = document.querySelector('.content');
const $modalButton = document.querySelector('.modal_button');

// 각 메뉴에 모달창 연결
$menus.forEach(menu => {
  menu.addEventListener('click', event => {
    $modal.style.display = 'block';
    if(event.target.textContent === 'Image' || event.target.textContent === 'Video' ) {    
      $modalArticle.textContent = 'Url'
      $modalButton.dataset.name = 'image';
    }
    else if (event.target.textContent === 'Task'){
      $modalArticle.textContent = 'Body'
      $modalButton.dataset.name = 'task';
    } 
    else if (event.target.textContent === 'Note') {
      $modalArticle.textContent = 'Body'
      $modalButton.dataset.name = 'note';
    }
  });
});

//모달창 끄기
$modalCloseBtn.addEventListener('click', () => {
  $modal.style.display = 'none';
});

//왜 이미지만 인식하는거니 왜애
$modalButton.addEventListener('click', event => {
  if(event.target.dataset.name === 'image'){
    createCard(Image);
  } else if(event.target.dataset.name === 'task'){
    createCard(Task);
  } else if(event.target.dataset.name === 'note'){
    createCard(Note);
  } else {
    throw new Error('무슨 이벤트인데?')
  }
  $modal.style.display = 'none';
});

// 모달창으로 카드만들기
let id = 0;
function createCard(type){
  let title = $title.value;
  let url = $article.value;
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.id = id;
  const text = document.createElement('p');
  text.classList.add('text');
  if(type === Image){
    text.textContent = 'image';
    const img = document.createElement('img');
    img.classList.add('card-img');
    img.setAttribute('src', url);
    const divide = document.createElement('div');
    divide.classList.add('divide');
    card.appendChild(img);
    card.appendChild(divide);
  } else if(type === Task){
    text.textContent = 'Task';
    const h1 = document.createElement('h1');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    h1.textContent = title;
    li.textContent = $article.value;
    ul.appendChild(li);
    card.appendChild(ul);
  } else if(type === Note){
    text.textContent = 'Note';
    const textArea = document.createElement('textarea');
    textArea.classList.add('card-textArea');
    card.appendChild(textArea);
  }
  card.appendChild(text);
  const close = `<button class="close" data-id=${id}>
                  <i class="fas fa-times"></i>
                </button>`;
  card.innerHTML += close;
  $content.appendChild(card);
  
  id++;
}

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

// 유튜브에서 비디오 연결하기







