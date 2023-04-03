// undefined는 변수값이 할당되지 않았을 때의 데이터 타입이다.

let a;
console.log(a); // undefined

let a; // undefined
if (typeof a === "undefined") {
  console.log("a에 아무것도 할당되지 않았습니다!");
  // y가 정의되지 않은 경우(undefined일 경우)에는 조건식이 truthy되므로 실행
}

if (a) {
  console.log("a에 아무것도 할당되지 않았습니다!");
  // 변수가 선언되지 않은 경우이기 때문에, flasy. undefined나옴.
}
