// array(*****)

const arr = [10, 20, 30];
arr[0] = 100; // const는 값은 변화가 안된다 하지 않았나요? 아니다. mutable 변경가능.. 배열안의 값이 변했을 뿐, const arr가 가르키는 메모리 주소(이를테면 a1이라는)는 변치 않았으므로 가능하다.
// 다만 이건 안된다.
arr = 100;
arr = [10, 20, 30];

console.log(arr);
console.dir(arr); //프로퍼티와 메서드들을 볼 수 있습니다.

// *스트링과 같은 값은 immutable

// arr.1 // error
// 숫자가 들어간 값은 대괄호로 호출할 수 있고
// length는 문자이다. 문자로 입력된 값은 .을 찍어서 호출할 수 있다.
arr[1];
arr.length;
arr["length"]; //문자열은 이렇게도 가능.

//두개가 같은 얘기입니다.
arr.length = 10;
arr[0] = 100;

// 프로퍼티를 추가하는 것도 가능합니다. 길이를 따로 지정하고, 프로퍼티를 추가하면 길이 값으로 취급안한다?
arr["yong"] = 100;
arr.sang = 1000;

// 배열의 특징
// 1. 배열은 순서가 있습니다. 배열의 순서를 index, 이 순서로 호출하는 것은 indexing이라고 합니다.
const arr = [10, 20, 30];
arr[0] = 100;

// 배열의 특징
// let arr = [];
// let arr = [1, 2, 3];
// let arr2 = new Array(4, 5, 6);
// let arr2 = new Array(3);
// Array(100).fill(0)

// 2. 배열에 다른 원시타입과 객체타입을 포함할 수 있습니다.
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

arr[0];
// [1, 2, 3]
arr[1];
// [4, 5, 6]
arr[2];
// [7, 8, 9]
arr[1][2];
// 6

// 0차원, 1차원, 2차원, 3차원, 다차원
const a = 10; // 스칼라
const b = [10, 20, 30]; // 벡터
const c = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]; // 매트릭스
const d = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
]; // 텐서(3차원 이상의 다차원)

// 배열의 메소드

// push
const arr = [1, 2, 3];
arr.push(4);

// push 실무 예제
// let tableBodyData = []
//     for (const iterator of data) {
//         tableBodyData.push(`
//             <tr>
//                 <td>${iterator['a']}</td>
//                 <td>${iterator['b']}</td>
//                 <td>${iterator['c']}</td>
//                 <td>${iterator['d']}</td>
//                 <td>${iterator['e']}</td>
//                 <td>${iterator['f']}</td>
//             </tr>
//         `)
//     }
//     document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('')

const arr = [1, 2, 3, 4, 5];
arr.pop();
// 1. 마지막에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return) 합니다.
// 5
arr;
// (4) [1, 2, 3, 4]

// pop
const arr = [1, 2, 3, 4, 5];
let lastValue = arr.pop();
arr;

// unshift
const myArray1 = ["사과", "바나나", "수박"];
myArray1.unshift("오이", "배");
console.log(myArray1);

// shift
// 1. 앞에서 값을 꺼내고
// 2. 꺼낸 값을 반환(return) 합니다.
const myArray2 = ["사과", "바나나", "수박"];
// myArray2.shift();
// console.log(myArray2);

let firstValue = myArray2.shift();
firstValue;
// 사과

// 정리
// push: 배열의 마지막에 값을 추가합니다.
// pop: 배열의 마지막 원소를 꺼내고, 꺼낸 값을 반환합니다.
// unshift : 배열의 앞에 값을 추가합니다.
// shift: 배열의 앞에서 값을 꺼내고, 꺼낸 값을 반환합니다.

// splice
// arr.splice(start, deleteCount, items)
let arr = [1, 2, 3];
arr.splice(1, 0, 4); // arr에 1번째에, 아무것도 삭제하지 않고, 4를 넣겠다.
arr.splice(1, 0, [10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, [10, 20, 30]를 넣겠다.
arr.splice(1, 0, 10, 20, 30); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.
arr.splice(1, 0, ...[10, 20, 30]); // arr에 1번째에, 아무것도 삭제하지 않고, 10, 20, 30를 넣겠다.(전개구문)

// splice 예1
const arr = [10, 20, 30, 40, 50];
const x = [1, 2, 3];
arr.splice(1, 0, ...x);
arr.splice(7, 0, ...x);
// arr = [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 50]

// splice 예2
const arr = [10, 20, 30, 40, 50];
arr.splice(2, 1, 5); // arr에 2번째에, 1개를 삭제하고, 5를 넣는다.
console.log(arr); // [10, 20, 5, 40, 50]

// splice 예3
const arr = [10, 20, 30, 40, 50];
arr.splice(2, 2); // 2번째 인덱스에서 값 2개를 삭제합니다. 삽입되는 값은 없습니다.

// splice는 메서드 체이닝이 안되는 이유는 삭제된 값을 반환합니다.

const arr = [10, 20, 30, 40, 50];
arr.splice(1); // [20, 30, 40, 50]

// slice (슬라이스는 스플라이스와는 다르게 원본을 건드리지 않는다.)
// arr.slice(start, end)
const myArray = ["apple", "banana", "cherry", "durian", "elderberry"];
console.log(myArray.slice(1, 4)); // ['banana', 'cherry', 'durian']
console.log(myArray.slice()); // 원본은 살아있음을 유의
myArray.slice(1);
myArray.slice(0, 100); // 끝까지 다 추출

// forEach() 각 요소를 순회하면서 각각에게 무엇인가를 해주고 싶을 때
const arr = [10, 20, 30, 40, 50];
// arr.forEach(함수)
// 함수(callbackfn): (value: number, index: number, array: number[]
arr.forEach(function (item, index) {
  console.log(index, item);
  console.log("hello");
  console.log("world");
});

// 실무에서 사용하는 코드는 아닙니다.
const arr = Array(100).fill(0);
const arr2 = [];

// arr.forEach(function (item, index) {
//   arr2.push(index);
// });

// 같은 코드1
// arr.forEach(function(item, index){
//     arr2.push(index+1)
// })

// 같은 코드2(화살표 함수)
// arr.forEach((item, index) => {
//     arr2.push(index+1)
// })

// 같은 코드3(화살표 중괄호 제거, 주로 이렇게 실무에서 사용합니다.)
// arr.forEach((item, index) => arr2.push(index+1))

// 같은 코드4(이렇게는 사용하지 않습니다. 이름이 있는 함수 사용)
const arr = Array(100).fill(0);
const arr2 = [];

function hojun(item, index) {
  arr2.push(index + 1);
}
arr.forEach(hojun);

// 어제 진행했었던 코드
fetch("http://test.api.weniv.co.kr/mall")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(item.thumbnailImg);
      console.log(item.productName);
      console.log(item.price);
    });
  });

// https://caniuse.com/?search=forEach
// nodeList에서 forEach와 Array에서 forEach는 다릅니다.
// nodeList에서 forEach는 익스플로러를 지원하지 않습니다.

const avengers = ["spiderman", "ironman", "hulk", "thor"];
const newAvengers = [];
avengers.forEach(function (item) {
  newAvengers.push("💖" + item + "💖");
});
console.log(newAvengers);

// map (면접 질문 많이나옴.)
// map은 forEach랑 다르게 새로운 배열을 생성합니다.

const arr = [1, 2, 3];
arr.map(function (item, index) {
  return item ** 2;
});

arr.map(function (x) {
  return x ** 2;
});

arr.map((x) => x ** 2);

const arr = Array(100).fill(0);
// 같은 코드 1
const arr = Array(100).fill(0);
arr.map((v, i) => i);

// 같은 코드 2
const arr = Array(100).fill(0);
arr.map(function (v, i) {
  return i;
});

// 같은 코드 3
const arr = Array(100).fill(0);
function hojun(v, i) {
  return i;
}
arr.map(hojun);

// 같은 코드 4
const arr = Array(100).fill(0);
arr.map((v, i) => {
  return i;
});

// 실무 팁(***)
let tip1 = [1, 2, 3, 4, 5];
// console.log(tip1[tip1.length-1])
// 원본 수정 없이 [1, 2, 3, 4] 값과 [5]라는 값을 얻어내고 싶을 때.. + 전개구문
console.log([...tip1].pop());
let tip2 = [...tip1];
console.log(tip2.pop());
console.log(tip2);

let tip3 = [1, 2, 3, 4, 5];
let tip4 = [10, 20, 30, 40, 50];

console.log([...tip3, 1000, ...tip4]);

const tip5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 다차원 배열에서 최솟값, 최댓값 찾기
Math.max(...tip5.flat());

const tip6 = [
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
  [
    [1, 2],
    [1, 2],
    [1, 2],
  ],
];

tip6.flat();
tip6.flat(1);
tip6.flat(2);
tip6.flat(Infinity); // 다 펼쳐지면 스톱

const tip7 = new Array(10).fill(0); // Array(10).fill(0)도 됩니다.
const tip8 = Array.from("hello world");

// '.'.repeat(100).split('.') // 권하진 않습니다.
let tip9 = [1, 2, 3, 4, 5];
console.log([tip9.slice(0, 2), 1000, tip9.slice(2, 5)]);
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)]);

let tip10 = [1, 2, 3, 4, 5];
tip10.splice(2, 0, 1000);
tip10;

// map하고 다시 오겠습니다.
const tip11 = Array(100)
  .fill(0)
  .map((v, i) => i + 1);

const tip12 = [
  {
    _id: "642ba458de3f12f6d6e01cfe",
    index: 0,
    age: 26,
    eyeColor: "blue",
    name: "Daisy Edwards",
    gender: "female",
    company: "OMATOM",
  },
  {
    _id: "642ba458245c0fe632900dcd",
    index: 1,
    age: 36,
    eyeColor: "brown",
    name: "Curry Richmond",
    gender: "male",
    company: "APPLICA",
  },
  {
    _id: "642ba458e7a44a8fef20ce79",
    index: 2,
    age: 22,
    eyeColor: "blue",
    name: "Noelle Rosario",
    gender: "female",
    company: "QUADEEBO",
  },
  {
    _id: "642ba458d118d54555445305",
    index: 3,
    age: 34,
    eyeColor: "green",
    name: "Candace Willis",
    gender: "female",
    company: "EWEVILLE",
  },
];

// 중괄호 하나가 item

const ages1 = tip12.map((item) => item.age);
const ages2 = tip12.map((item) => {
  return item.age;
});
console.log(ages1, ages2);
