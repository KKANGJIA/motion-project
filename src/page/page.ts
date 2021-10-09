import { BaseComponent } from '../components/base.js';

export class PageComponent extends BaseComponent<HTMLUListElement> {
  // 부모 생성자에서 멤버변수로 있으니까 여기서 다시 정의해줄 필요없음
  // // 내부 스테이트로 돔 요소 중 하나
  // private element: HTMLUListElement;
  constructor(){
    //위에 요소를 따로 작성할 필요없이 super로 생성자 함수를 호출하고 안에 만들 매개변수 전달
    // this.element = document.createElement('ul');
    // this.element.setAttribute('class', 'page');
    // this.element.textContent = 'page';
    super('<ul class="page">This is PageComponet!</ul>');
  }

  //페이지에 추가하고 싶은 element를 선언하면 자동으로 지정해줌
  // insertAdjacentElement는 특정한 요소에 InsertPosition으로 넣을 위치를 지정해서 요소를 추가해줌
  // ctrl+클릭하면 insertAdjacentElement을 어떻게 작섣하는지 type을 볼 수 있음
  // attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
  //   parent.insertAdjacentElement(position, this.element)
  // }
}

export default PageComponent;