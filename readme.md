## 프로젝트 준비
1. user_story를 사용하여 As a ~, I want to ~를 지정하기
(예, As a user, I want to add an image)
2. must_have와 good_to_have, 그리고 nice_have를 지정하기
3. interaction을 작성해보기(어느 부분을 누르면 어떻게 진행되는지에 대한 것)


## 현업에서 진행하는 방법
어떤식으로 만들어나갈지 클래스 다이어그램을 작성하고 시작한다.


## 작은 규모의 프로젝트를 만드는 방법
어떤 인터렉션이 발생하고 관계가 있고 인터페이스가 있는 지 생각하거나
애자일 기법처럼 필요할대 마다 생각해서 리팩토링해도 된다


## tsconfig.json만들기
tsc --init


## tsconfig 설정하기
기본 설정
"target": "es6",    
"module": "ES2015",                                
"rootDir": "./src",   
"outDir": "./build",  // 또는 distribute의 약자인 dist를 사용하기도 함

컴파일 시 에러가 발생하면 더이상 컴파일되지 않도록 수정
"noEmitOnError": true,   

파일의 크기를 줄이기 위한 코멘트제거                                
"removeComments": true,              

추가적인 체크를 받기 위해 true
"noUnusedLocals": true,                           
"noUnusedParameters":true,                                    
"noImplicitReturns": true,                       
"noFallthroughCasesInSwitch": true,              
"noUncheckedIndexedAccess": true,   


## 프로젝트 구현 플랜
클래스들을 잘 정의하고 중복되는 로직부터 분리하는 게 시작이다

클래스는 상태, 데이터를 가지고 있는 상태를 변화할 수 있는 함수로 묶어진 덩어리이다

어플리케이션(App)안에는 전반적으로 필요한 것과 필요한 기능을 가지고 있다.
header와 document, footer가 있다. 이 세개는 static하게 고정되어 있어서 html로 작성하면 된다.

pageComponent라는 클래스를 만들어 동적으로 사용자가 입력하거나 클릭하면 사용자가 입력한 데이터 만들 수 있는 ui를 만들어주는 클래스를 만들어서 넣는다

ImageComponent를 따로 만들어서 이미지 등을 넣을 수 있는 개별적인 컴포넌트를 만든다

객체지향 원칙을 이용해서 상속, 추상화, 우연하게 만들수 있을 지 고민하면서 만든다

즉, 구현계획
앱이라는 클래스는 페이지 컴포넌트를 가지고 사용자가 앱을 클릭하면 다이얼로그를 보여주고 입력하면 데이터를 이용해서 컴포넌트를 만들고 만든 컴포넌트를 페이지에 추가한다


### 다이어그램
App: 어플리케이션 전체를 가지고 있는 제일 큰 컨테이너 클래스

BaseComponent: image,note, todo, video section을 구현할 때 동일한 형식을 사용하므로 하나의 기본 컴포넌트를 만들어 놓고 상속(extends BaseComponent<HTMLVideoElement>)을 통하여 간단하게 구현할 수 있도록 했다.

PageComponent: 사용자가 추가하는 문서를 담을수 있는 페이지 컨테이너 컴포넌트 클래스

PageItemCoponent: 만약 사용자가 작성한 노트를 프린트 하기 위한 프리뷰 (Preview) 모드나, 편집 기능이 없는 읽기 모드 같은 화면에서는 재사용을 하지 못하는 점, 각각의 컴포넌트들 안에 boolean과 같은 것을 인자로 전달해서 if-else와 같은 번잡한 로직을 통해서 어떨때는 닫힘 버튼을 보여주고 어떨떄는 보여주지 않고를 작성해야 하는 점때문에 실제의 보여지는 컨텐츠와 (Note, Image, Video. Todo..) 그리고 그것을 감싸서 꾸며주는 (닫힘 버튼이 추가된) PageItemComponent 같은 클래스를 따로 구분해서 작성한 것이다.

ImageComponent: 사용자가 추가할 수 있는 문서중 하나의 타입으로, 이미지 노트 
즉, 서로 다른 역할을 가진 로직들을 각각 다른 클래스로 묶어 주었음

Composable: PageComponent도 PageItemComponent도 둘다 다른 자식 컴포넌트를 자기 안에 추가할 수 있는 클래스 이므로, 공통된 addChild 함수를 따로 Composable이라는 인터페이스를 생성해 두었다.


### 정규표현식
video section을 만들 때, 사용했다. 정규 표현식과 match메서드를 통해 문자열의 일치여부를 쉽게 판단해 문자열을 변경해 url을 임베디드용 url로 변경하는 함수에 적용했다.


### Component나 Composable을 통해 coupling을 피하는 이유?
결론, Component나 Composable로 따로 인터페이스로 정의하는 이유는 클래스간의 coupling을 피하기 위함이다.

객체지향 기본시간에 얘기했던 것처럼 클래스 관계가 복잡해지고 서로 간의 자세한 사항을 클래스간에 서로의 이름을 알고있는 것은 커플링이라는 현상을 유발한다. 클래스간에 지나치게 밀접한 연관을 맺고있으면(심한 커플링 상태)유지보수성과 확장성이 떨어진다.

그래서 클래스에서 주된 규격 사항들을 인터페이스로 정의해두고 클래스에서 인터페이스의 규격을 따라 가도록 구현해놓고 사용하는 곳에서 클래스 이름의 타입이 아니라 인터페이스 이름의 타입으로 지정해두면 다음에 다른 구현 사항이 생기면 쉽게 다른 클래스로 변환이 가능하다. 모든 사용하는 곳에서 타입을 일일이 바꾸지 않아도 되는 장점이 있는 것이다.

즉, 위의 점들을 고려해보았을 때, 인터페이스로 정의해서 클래스 간에 인터페이스를 통해서 대화하는 것이 좋다. 이것이 나중에 시스템 설계나, 디자인 패턴 공부 할 때 중요한 밑거름이 되줄 것이다.