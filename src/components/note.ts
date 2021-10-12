//웹팩이 없기 때문에 확장자를 붙여주어야함
import { BaseComponent } from './base.js';

export class NoteComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, content: string){
    super(`<div class="note">
            <h1 class="note-title"></h1>
            <p class="p"></p>
          </div>`);

    const titleName = this.element.querySelector('.note-title')! as HTMLHeadElement;
    titleName.textContent = title;

    const p = this.element.querySelector('.p')! as HTMLTextAreaElement;
    p.textContent = content;
  }
}

