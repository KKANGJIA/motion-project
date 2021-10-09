// const $menus = document.querySelectorAll('.menu');
// const $dialog = document.querySelector('.dialog');
// const $dialogArticle = document.querySelector('.dialog_article');
// const $dialogCloseBtn = document.querySelector('.dialog_close');
// const $title = document.querySelector('.title');
// const $titleValue = document.querySelector('.titleValue');
// const $article = document.querySelector('.article');
// const $dialogButton = document.querySelector('.dialog_button');

// // show dialog and change 
// $menus.forEach(menu => {
//   menu.addEventListener('click', event => {
//     $dialog.style.display = 'block';
//     if(event.target.textContent === 'Image' ) {    
//       $dialogArticle.textContent = 'Url'
//       $dialogButton.dataset.name = 'image';
//     }
//     if(event.target.textContent === 'Video' ) {    
//       $dialogArticle.textContent = 'Url'
//       $dialogButton.dataset.name = 'video';
//     }
//     else if (event.target.textContent === 'Task'){
//       $dialogArticle.textContent = 'Body'
//       $dialogButton.dataset.name = 'task';
//     } 
//     else if (event.target.textContent === 'Note') {
//       $dialogArticle.textContent = 'Body'
//       $dialogButton.dataset.name = 'note';
//     }
//   });
// });

// // delete dialog
// $dialogCloseBtn.addEventListener('click', () => {
//   $dialog.style.display = 'none';
// });

// // connect dialog to spacific menu button
// $dialogButton.addEventListener('click', event => {
//   if(event.target.dataset.name === 'image'){
//     createImage();
//     $titleValue.value = '';
//     $article.value = '';
//   }else if(event.target.dataset.name === 'video'){
//       createVideo();
//       $titleValue.value = '';
//       $article.value = '';
//   } else if(event.target.dataset.name === 'task'){
//     createTask();
//      $titleValue.value = '';
//      $article.value = '';
//   } else if(event.target.dataset.name === 'note'){
//     createNote();
//     $titleValue.value = '';
//       $article.value = '';
//   } else {
//     throw new Error('무슨 이벤트인데?')
//   }
//   $dialog.style.display = 'none';
// });