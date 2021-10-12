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
PageComponent: 사용자가 추가하는 문서를 담을수 있는 페이지 컨테이너 컴포넌트 클래스
ImageComponent: 사용자가 추가할 수 있는 문서중 하나의 타입으로, 이미지 노트 
즉, 서로 다른 역할을 가진 로직들을 각각 다른 클래스로 묶어 주었음


### 정규표현식
