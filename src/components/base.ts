export interface Component {
  attachTo(parent: HTMLElement, position?: InsertPosition): void;
  removeFrom(parent: HTMLElement): void;
};

/* Encapsulate the HTML element creation */

// 모든 걸 다 상속하는 애가 아니라 HTMLElement만 상속한다고 명시해야함
export class BaseComponent<T extends HTMLElement> implements Component {
  //외부에서 볼 수 없고 이걸 상속하는 자식 클래스만 접근이 가능하도록 접근 제한자 설정
  protected readonly element: T;

  constructor(htmlString: string){
    const template = document.createElement('template');
    template.innerHTML = htmlString;
    this.element = template.content.firstElementChild! as T;
  }
  
  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.element)
  }

  removeFrom(parent:HTMLElement) {
    if(parent !== this.element.parentElement) {
      throw new Error('parent mismatch!');
    }
    parent.removeChild(this.element);
  }