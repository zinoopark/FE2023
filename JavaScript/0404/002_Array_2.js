// 짝수
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.filter(function (el) {
  return el % 2 === 0;
});

// 홀수
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr2.filter(function (el) {
  return el % 2 !== 0;
});

//짝수의 합..
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
}

//모음제거(!지우면 모음만)
Array.from("hello world").filter((v) => !["a", "e", "i", "o", "u"].includes(v));

// reduce
//0.. 초깃값 꼭 넣어주세요
//accumulator,current value
const arr = [1, 2, 3, 4, 5];
arr.reduce((a, c) => a + c, 0);

const arr1 = [];
arr1.reduce((a, c) => a + c);

const arr1 = [1];
arr1.reduce((a, c) => a + c);

// 0을 항상 넣어주세요.
const arr1 = [];
arr1.reduce((a, c) => a + c, 0);

// min, max도 있는데 sum이 없다?

// includes
const arr = ["hello", "world", "hojun"];
arr.includes("world"); //true

// join
const arr = ["010", "9698", "8268"];
arr.join("-"); //'010-9698-8268'

const arr = [010, 9698, 8268];
arr.join("-"); //이러면 안됩니다.
