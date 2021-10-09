//웹팩이 없기 때문에 확장자를 붙여주어야함
import { BaseComponent } from './base.js';

export class Video extends BaseComponent<HTMLVideoElement> {
  constructor(title: string, url: string){
    super(`<div class="video">
            <h1 class="video-title"></h1>
            <iframe class="card-video" id="ytplayer" type="text/html" width="720" height="405"
            frameborder="0" allowfullscreen></iframe>
          </div>`);
    const video = this.element.querySelector('.video-title')! as HTMLHeadElement;
    video.textContent = title;

    //사용자가 입력한 정보 그대로 사용하면 안되다고....제발...
    const iframe = this.element.querySelector('.card-video')! as HTMLIFrameElement;
    iframe.src = url;  

    //사용자에게 받은 url 임베디드용으로 변경
    // let nouse = 'watch?v=';
    // if(nouse.includes(url)){
    //   let id = changeEmbeded(url);
    //   url = 'https://www.youtube.com/embed/'+ id;
    // }

    // function changeEmbeded(url: string) {
    //   const find = url.indexOf('=');
    //   const id = url.slice(find+1,);
    //   return id;
    // } 
    // console.log(url)
  }

  // 선생님이 한 방식
  // 정규표현식 사용하기
  private coverToEmbededURL(url: string): string{
    // const vidoeID = 'K3-jg..';
    const regExp = /^(?:http?:\/\/)?(?:??youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:??youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);//매칭되는 것이 있다면 배열형태호 전달
    const videoID = match ? match[1] || match[2] : undefined;
    if(videoID) {
      return `https://www.youtube.com/embed/${videoID}`;
    }
    return url;
  }

  //{11} : 11개만 추출하겟다는 의미
}


