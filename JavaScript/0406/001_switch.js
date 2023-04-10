const value = "four";

switch (value) {
  case "one":
    console.log("hello one");
    break;

  case "two":
    console.log("hello two");
    break;

  case "three":
    console.log("hello three");
    break;

  default:
    console.log("hello default");
}

///alt + shift + l -> 같은 모든 단어 선택

switch (
  new Date().getDay() // getDay(0) 은 일요일부터 시작
) {
  case 0:
    console.log("일요일");
    break;

  case 1:
    console.log("월요일");
    break;

  case 2:
    console.log("화요일");
    break;

  case 3:
    console.log("수요일");
    break;

  case 4:
    console.log("목요일");
    break;

  case 5:
    console.log("금요일");
    break;

  case 6:
    console.log("토요일");
    break;
  ///default는 필수는 아니지만, 견고한 코드를 위해 쓴다.. 하지만 아래 getDay는 일~토는 정해져있는 케이스 값(0~6)이 있어서 쓰지 않아도 된다.
}

const 요일 = new Date().getDay();
const 요일객체 = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};

console.log(요일객체[요일]);

// default는 어떻게 처리?

const 요일2 = 10;
const 요일객체2 = {
  0: "일요일",
  1: "월요일",
  2: "화요일",
  3: "수요일",
  4: "목요일",
  5: "금요일",
  6: "토요일",
};

console.log(요일객체2[요일2] ?? "hello"); //undefined는 console.log의 리턴값

// 병합 연산자 사용
console.log(요일객체2[요일2] || "hello");
// 널리쉬 연산자 사용
console.log(요일객체2[요일2] ?? "hello");
