import { BaseComponent, Component } from '../components/base.js';

export interface Composable {
  addChild(child: Component): void;
}

//단순히 닫혔다고 얘기하는 아이
type OnCloseListener = () => void;

class PageItemComponent extends BaseComponent<HTMLElement> implements Composable {
  // 콜백함수를 저장하고 있을 아이
  private closeListener?: OnCloseListener;
  
  constructor(){
    super(`<li class="page-item">
            <section class="page-item__body"></section>
            <div class="page-item__controls">
              <button class="close">&times;</button>
            </div>
          </li>`)

    // 돔을 조작하여 만든 삭제 기능
    // const deleteButton = this.element.querySelector('.close')! as HTMLButtonElement;
    // deleteButton.addEventListener('click', () => this.element.remove());
    
    const closeBtn = this.element.querySelector('.close')! as HTMLButtonElement;
    closeBtn.onclick = () => {
      this.closeListener && this.closeListener();
    }
  }
  addChild(child: Component) {
    const container = this.element.querySelector('.page-item__body')! as HTMLElement;
    child.attachTo(container);
  }

  // 설정할 수 있는 외부함수 만들기
  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
}

export class PageComponent extends BaseComponent<HTMLUListElement> implements Composable {
  // 부모 생성자에서 멤버변수로 있으니까 여기서 다시 정의해줄 필요없음
  // // 내부 스테이트로 돔 요소 중 하나
  // private element: HTMLUListElement;
  constructor(){
    //위에 요소를 따로 작성할 필요없이 super로 생성자 함수를 호출하고 안에 만들 매개변수 전달
    // this.element = document.createElement('ul');
    // this.element.setAttribute('class', 'page');
    // this.element.textContent = 'page';
    super('<ul class="page"></ul>');
  }

  //페이지에 추가하고 싶은 element를 선언하면 자동으로 지정해줌
  // insertAdjacentElement는 특정한 요소에 InsertPosition으로 넣을 위치를 지정해서 요소를 추가해줌
  // ctrl+클릭하면 insertAdjacentElement을 어떻게 작섣하는지 type을 볼 수 있음
  // attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
  //   parent.insertAdjacentElement(position, this.element)
  // }

  //video, image를 넣기 위한 section전달
  addChild(section: Component) {
    const item = new PageItemComponent();
    item.addChild(section);
    //만든 아이탬을 현재 element애 붙여줌
    item.attachTo(this.element, 'beforeend');
    item.setOnCloseListener(() => {
      //close가 클릭되면 지금 페이지로부터 제거할거다
      item.removeFrom(this.element);
    })
  }
}

export default PageComponent;