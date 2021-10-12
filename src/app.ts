import { Component } from './components/base.js';
import { NoteComponent } from './components/note.js';
import { TodoComponent } from './components/todo.js';
import { VideoComponent } from './components/video.js';
import { ImageComponent } from './page/item/image.js';
import PageComponent, { Composable } from './page/page.js';

class App {
  // PageComponent라고 커플링하지 않고
  // page는 Composable하면서도 (composable 인터페이스에 있는 모든 함수를 사용할 수 있으면서)
  // Component이기도하기 때문에
  // intersection(&)으로 둘 다 해당한다고 작성할 수 있다.
  private readonly page: Component & Composable;
  
  // 어플리케이션에 추가할 최상위 요소를 받아오고 아무 요소가 와도 상관없어서 HTMLElement로 지정
  constructor(appRoot: HTMLElement){ 
    this.page = new PageComponent(); // 새로운 페이지 컴포넌트를 생성하고
    this.page.attachTo(appRoot); // api를 이용해 페이지 컴포넌트를 approot에 붙이기
    
    const image = new ImageComponent('image_title', 'https://picsum.photos/400/400');
    // 아래처럼 바로 appRoot에 붙이는 게 아니라 page의 container가 한단계 감싸고 만들 수 있도록 addChild를 사용함
    this.page.addChild(image); 
    // image.attachTo(appRoot, 'beforeend'); // 붙는 위치가 끝 부분

    //유튜브 삽입 에러가 발생하면 embeded로 작성되었는지 확인할
    const video = new VideoComponent('Video title', 'https://www.youtube.com/watch?v=EOr7YUa8JuU');
    this.page.addChild(video); 
    // video.attachTo(appRoot, 'beforeend');

    const note = new NoteComponent('Note title', '여기는 노트를 작성하는 공간입니다.');
    this.page.addChild(note); 
    // note.attachTo(appRoot, 'beforeend');

    const todo = new TodoComponent('Todo title', '오늘의 할일');
    this.page.addChild(todo); 
    // todo.attachTo(appRoot,'beforeend');
  }
}

// 동적으로 실행되면서 변하는 게 아니고 HTML에 있는 요소이기 때문에 
// querySelector의 반환은 element 또는 null이므로 null이 아니라는 것을
// 확신할 수 있으므로 !로 null이 아니고 HTMLElement라고 type assertion으로 
// as HTMLElemen로 확실하게 정의하면 오류가 발생하지 않음
new App(document.querySelector('.document')! as HTMLElement);
