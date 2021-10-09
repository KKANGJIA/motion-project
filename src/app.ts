import { Note } from './components/note.js';
import { Todo } from './components/todo.js';
import { Video } from './components/video.js';
import { ImageComponent } from './page/item/image.js';
import PageComponent from './page/page.js';

class App {
  private readonly page: PageComponent;
  
  // 어플리케이션에 추가할 최상위 요소를 받아오고 아무 요소가 와도 상관없어서 HTMLElement로 지정
  constructor(appRoot: HTMLElement){ 
    this.page = new PageComponent(); // 새로운 페이지 컴포넌트를 생성하고
    this.page.attachTo(appRoot); // api를 이용해 페이지 컴포넌트를 approot에 붙이기
    const image = new ImageComponent('image_title', 'https://picsum.photos/400/400');
    image.attachTo(appRoot, 'beforeend');
    // 붙는 위치가 끝 부분

    //유튜브 삽입 에러가 발생하면 embeded로 작성되었는지 확인할
    const video = new Video('Video title', 'https://www.youtube.com/watch?v=EOr7YUa8JuU');
    video.attachTo(appRoot, 'beforeend');

    const note = new Note('Note title', '여기는 노트를 작성하는 공간입니다.');
    note.attachTo(appRoot, 'beforeend');

    const todo = new Todo('Todo title', '오늘의 할일');
    todo.attachTo(appRoot,'beforeend');


    
  }
}

// 동적으로 실행되면서 변하는 게 아니고 HTML에 있는 요소이기 때문에 
// querySelector의 반환은 element 또는 null이므로 null이 아니라는 것을
// 확신할 수 있으므로 !로 null이 아니고 HTMLElement라고 type assertion으로 
// as HTMLElemen로 확실하게 정의하면 오류가 발생하지 않음
new App(document.querySelector('.document')! as HTMLElement);
