// null은 값이 비어있음을 '명시적'으로 나타내는 것

let value1; // undefined

// 존재하지만 값이나 자료형이 존재하지 않는 foo
var value2 = null;
console.log(value2); //null

let 반점수 = [10, 20, 30, null, 40, 50];
let 반평균 = 0;
for (const i of 반점수) {
  console.log(i);
  반평균 += i;
}

// null이 있으면 포함 명수에 포함 시키면 안되므로..
// 반평균/5

// let 반점수 = [10, 20, 30, undefined, 40, 50];
// let 반평균 = 0;
// for (const i of 반점수) {
//   console.log(i);
//   반평균 += i;
// }
// 반평균; //NaN
