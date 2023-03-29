# 0305arrowpractic
1번방식: 첫 arrow는 특정 굵기를 가진 border 생성 - 각 boder에(top,right,bottom,left) 색상 부여 - 화살표를 남길 방향의 반댓방향 border소거(예를 들어 bottom을 남길거면 top제거) - 한 뒤 width,height 0으로 설정(그럼 서로 딱 붙음) - 그 다음 남길 화살표를 빼고 나머지 인접 border의 색상 transparent (***여기서 내가 한 실수***: transparent하는 방향에 색상 값을 그대로 남겨둔 상태로 뒤에 transparent붙여서 개 뻘짓함. 색상값이 들어갈 곳에 색상을 지우고 transparent 넣길바래.)
2번방식: 두번째 기본 solid 화살표 방식은 공통되는 arrow에는 inline-block과 굵기, solid, transparent적용하고 나머지 개별 클래스에(붙여 쓴 class 명) 원하는 방향에 색상 속성을 주면된다.
3번방식: 세번째는 가상요소 after을 활용한 화살표 그리기. arroww라는 빈 div클래스를 지정하고, 최초 스타일을 
```
.arroww::after{
    content: '';
    height: 0px;
    width: 0px;
    position: absolute;
    border: 20px solid transparent;
    border-top-width: 0;
    border-bottom-color: aquamarine;
}
```
로 지정해보자. 가상 요소를 부착하는 요소의 왼쪽위 모서리에 화살표가 위치하게 된다.(부착하는 요소가 있을경우, 그 요소는 relative여야함.)
쭉 보다가 "border: 20px solid transparent;" , "border-top-width" 두개가 정의되었는데, 이런 CSS에서 정의된 같은 속성을 오버라이드(덮어씀)하는 성격때문이다. 앞의 20px는 4면의 테두리를 모두 정의한 것이고, "border-top-width"는 상단테두리만 쳐낸것이다. 여기서부터 화살표를 만드는 원리는 1번과 2번과 유사하다. 아니 같다. 이렇게 나온 화살표는 20x40px화살표가 나온다. 이를 응용해서 CSS는 "arroww arroww-up"과 같은 형식으로 화살표를 부착할 대상 요소에 클래스를 추가(클래스 명 이어붙이기) 하는 것만으로 사용하면 된다. 화살표의 크기는 after 가상요소의 "border-width"에서 바꾸면된다.
```
.arroww::after{
    content: ' ';
    height: 0;
    width: 0;
    position: absolute;
    border: 20px solid transparent; //여기서 삭제할 border위(border-??-width)와 반대편 색상값만 각 새로운 클래스에 입력하면된다.
}
.arroww-up::after{
    border-top-width: 0;
    border-bottom-color: purple; //아래에서 위 화살표, 참고로 이런식으로 하려면 클래스명이 이어붙여져야 ex <div class="arroww arroww-up"></div> 함
}
.arroww-down::after{
    border-bottom-width: 0;
    border-top-color: purple; //위에서 아래 화살표
}
.arroww-right::after{
    border-right-width: 0;
    border-left-color: purple; //왼에서 오른쪽 화살표
}
.arroww-left::after{
    border-left-width: 0;
    border-right-color: purple; //오른에서 왼쪽 화살표
}
```

4번방식: after가상요소를 사용한 꺽쇠만들기이다. 천천히 코드 읽어보면 이해가 된다. 기본 border는 top과 right를 기준으로

* 45deg 는 >
* 225deg 는 <
* 135deg 는 ∨
* 315deg 는 ∧
