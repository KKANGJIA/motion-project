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
const $titleValue = document.querySelector('.titleValue');
const $article = document.querySelector('.article');
const $content = document.querySelector('.content');
const $modalButton = document.querySelector('.modal_button');

import Youtube from './youtube.js';
//별도의 번들링 없이 ESModule을 사용해 import 할때 확장자를 쓰지 않으면 에러가 발생한다!!!!!!!!!
// 평소 React 환경에서 webpack 번들링을 통해 ESModule을 사용할 때는 확장자 없이 import 를 했음

const youtube = new Youtube();

// 각 메뉴에 모달창 연결
$menus.forEach(menu => {
  menu.addEventListener('click', event => {
    $modal.style.display = 'block';
    if(event.target.textContent === 'Image' ) {    
      $modalArticle.textContent = 'Url'
      $modalButton.dataset.name = 'image';
    }
    if(event.target.textContent === 'Video' ) {    
      $modalArticle.textContent = 'Url'
      $modalButton.dataset.name = 'video';
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
    createImage();
    $titleValue.value = '';
    $article.value = '';
  }else if(event.target.dataset.name === 'video'){
      createVideo();
      $titleValue.value = '';
      $article.value = '';
  } else if(event.target.dataset.name === 'task'){
    createTask();
     $titleValue.value = '';
     $article.value = '';
  } else if(event.target.dataset.name === 'note'){
    createNote();
    $titleValue.value = '';
      $article.value = '';
  } else {
    throw new Error('무슨 이벤트인데?')
  }
  $modal.style.display = 'none';
});

// 모달창으로 카드만들기
let id = 0;
function createTask(){
  let title = $titleValue.value;
  let url = $article.value;
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.id = id;
  const text = document.createElement('p');
  text.classList.add('text');
  text.textContent = title;
  const h1 = document.createElement('h1');
  const ul = document.createElement('ul');
  const li = document.createElement('li');
  li.classList.add('card-list')
  ul.classList.add('card-lists')
  h1.textContent = title;
  li.textContent = $article.value;
  ul.appendChild(li);
  card.appendChild(ul);
  card.appendChild(text);
  const close = `<button class="close" data-id=${id}>
                  <i class="fas fa-times"></i>
                </button>`;
  card.innerHTML += close;
  $content.appendChild(card);
  
  id++;
}

function createImage(){
  let title = $titleValue.value;
  let url = $article.value;
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.id = id;
  const text = document.createElement('p');
  text.classList.add('text');
  text.innerHTML = title;
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

// https://www.youtube.com/watch?v=fScOL7abV2E
// youtube.mostPopular();
function createVideo(){
  let title = $titleValue.value;
  let url = $article.value;
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.id = id;
  const text = document.createElement('p');
  text.classList.add('text');
  text.textContent = title;
  const video = document.createElement('div');
  video.innerHTML = `<iframe class="card-video" id="ytplayer" type="text/html" width="720" height="405"
                      src="https://www.youtube.com/embed/M7lc1UVf-VE"
                      frameborder="0" allowfullscreen></iframe>`
  video.setAttribute('src', url);
  const divide = document.createElement('div');
  divide.classList.add('divide');
  card.appendChild(video);
  card.appendChild(divide);
  card.appendChild(text);
  const close = `<button class="close" data-id=${id}>
                  <i class="fas fa-times"></i>
                </button>`;
  card.innerHTML += close;
  $content.appendChild(card);
  
  id++;
}

function createNote(){
  let title = $titleValue.value;
  let url = $article.value;
  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.id = id;
  const text = document.createElement('p');
  text.classList.add('text');
  text.textContent = title;
  const note = document.createElement('div');
  note.classList.add('card-note');
  note.textContent = url;
  card.appendChild(note);
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

// 더 할 기능
// 드래그 드랍 기능 추가하기








