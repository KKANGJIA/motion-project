import { BaseComponent } from '../../components/base.js';

export class ImageComponent extends BaseComponent<HTMLElement> {
  //멤버변수
  // private element: HTMLElement;
  //사용자에게 입력받을 데이터를 이용하고자 매개변수를 작성
  //사용자에게 받은 데이터를 innerHTML에서 사용하면 위험하므로 
  //아래에서 필요한 부분만 따로 업데이트하는 것이 안전함
  constructor(title: string, url: string){
    super(`<section class="image">
            <div class="image__holder">
              <img src="" alt="" class="image__thumnail">
              <p class="image__title">${title}</p>
            </div>
          </section>`);
    const imageElement = this.element.querySelector('.image__thumnail')! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;

    const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
    titleElement.textContent = title;

  // const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
  // titleElement.textContent = title;
    //어떠한 요소들을 내부적으로 만들 수 있도록 템플렛 태그를 이용
    // const template = document.createElement('template');
    // template.innerHTML = `<section class="image">
    //                         <div class="image__holder">
    //                           <img src="" alt="" class="image__thumnail">
    //                           <p class="image__title">${title}</p>
    //                         </div>
    //                       </section>`;
  // content는 템플릿이 담고 있는 DOM 하위 트리를 나타내는 DocumentFragment
  // null이 아니고 요소임을 명시하기 위해서 type assrtion을 사용(! as HTMLElement)
  // this.element = template.content.firstElementChild! as HTMLElement;

  // const imageElement = this.element.querySelector('.image__thumnail')! as HTMLImageElement;
  // imageElement.src = url;
  // imageElement.alt = title;

  // const titleElement = this.element.querySelector('.image__title')! as HTMLParagraphElement;
  // titleElement.textContent = title;
  }

  // attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
  //   parent.insertAdjacentElement(position, this.element)
  // }
}


// HTML <template> 요소는 페이지를 불러온 순간 즉시 그려지지는 않지만, 
// 이후 JavaScript를 사용해 인스턴스를 생성할 수 있는 HTML 코드를 담을 방법을 제공합니다.
// 템플릿은 콘텐츠 조각을 나중에 사용하기 위해 담아놓는 컨테이너
//  HTMLTemplateElement는 읽기 전용 content (en-US) 속성을 가집니다. 
// content는 템플릿이 담고 있는 DOM 하위 트리를 나타내는 DocumentFragment입니다.