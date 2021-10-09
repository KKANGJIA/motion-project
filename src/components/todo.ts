//웹팩이 없기 때문에 확장자를 붙여주어야함
import { BaseComponent } from './base.js';

export class Todo extends BaseComponent<HTMLUListElement> {
  constructor(title: string, content: string){
    super(`<div class="todo">
            <h1 class="todo-title"></h1>
            <input type="checkbox" class="input"/>
          </div>`);
    const titleName = this.element.querySelector('.todo-title')! as HTMLHeadElement;
    titleName.textContent = title;
    
    const todoElement = this.element.querySelector('.input')! as HTMLInputElement;
    //인풋 앞쪽에다 넣을 수 있는 메서드
    todoElement.insertAdjacentText('afterend', content)
  }

}

