const x = 10;
const y = 20;
console.log("x 값은 10이고 y값은 20이고 두개를 곱한 값은 200 입니다.");
//기존
console.log(
  "x 값은",
  x,
  "이고 y값은",
  y,
  "이고 두개를 곱한 값은",
  x * y,
  "입니다."
);
//템플릿 리터럴
console.log(`x값은 ${x}이고 y값은 ${y}이고 두개를 곱한 값은 ${x * y}입니다.`); // 템플릿 리터럴 중괄호에 연산을 넣는 것은 권장되지 않는다.

const x2 = 10;
const y2 = 20;
const result = x2 * y2; // 연산도 변수로 처리하는 방법이 있다.

console.log(
  `x값은 ${x2}이고 y값은 ${y2}이고 두개를 곱한 값은 ${result}입니다.`
);

console.log(`h
e
l
l
o`);

const s = "hello";
const ss = "world";
const result2 = s + "\n" + ss;
console.log(result2); // 원래는 이렇게 어렵게 했다.

// 가독성이 떨어집니다.
if (true) {
  if (true) {
    if (true) {
      console.log(`h
e
l
l
o
`);
    }
  }
}
