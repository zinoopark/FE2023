// for문은 이제 구식..문법이다?

for (let i = 0; i < 10; i++) {
  console.log(10);
}

let arr = [10, 20, 30, 40, 50];
for (let i = 0; i < arr.length; i++) {
  //length는 5, 배열 마지막번호(50 -> 4)는 4이므로 끝까지 출력
  console.log(arr[i]);
}

// airbnb 컨벤션에 권장, for~in 객체와 배열의 순회.. 어때요? 좋지 않나요?
// IE에서도사용 가능
let arr1 = [10, 20, 30, 40, 50];
let obj1 = { one: 10, two: 20 };

for (const i in arr1) {
  console.log(arr1[i]); //i가 index를 가져온다!?
}

for (const k in obj1) {
  console.log(obj1[k]); //i가 key를 가져온다?!
}

for (const i in "hello world") {
  console.log(i);
}

let s = 0;
for (const i in ".".repeat(101)) {
  s += parseInt(i);
}
console.log(s);

// 많은 컨벤션에서 권장(다만 배열의 순회는 map, forEach를 더 권장)
// IE에서는 사용 불가
// 개발자의 행복을 위해 익스플로러를 버리자 => 이렇게 해야만 사용할 수 있습니다.
let arr2 = [10, 20, 30, 40, 50]
let obj2 = { 'one': 10, 'two': 20 }

for (const item of arr2) {
    console.log(item)
}

let s = 0
for (const item of arr2) {
    s += item
}
console.log(s)

for (const item of obj2) { // of 뒤에 iterable한 값이 나와야 합니다.
    console.log(item)
}

for (const item of 'hello world') {
    console.log(item)
}

// why? for of와 for in문에서는 const가 가능한가요?
// 너무 많은 에너지를 쏟지는 마세요.
// 한국어 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of#%EB%AA%85%EC%84%B8%EC%84%9C
// 영어 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ECMAScript 명세서 : https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-for-in-and-for-of-statements
// https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-LetOrConst
for (const i = 0; i < 10; i++) {
    console.log(10);
} // error

let count = 0
for (const i = 100; ;) {
    if (count >= 10) {
        break
    }
    count += 1
    console.log(i)
}

{
    const x = 10
    console.log(x)
}
console.log(x)

for (const i in [1, 2, 3]) {
    console.log(i)
}

for (const i of [1, 2, 3]) {
    console.log(i)
}

// 문제
// https://codingdojang.com/scode/408?answer_mode=hide
s = [1, 3, 4, 8, 13, 17, 20];
for (let i = 0; i < s.length; i++) {
  console.log(s[i], s[i + 1]); // 마지막 값을 확인해보세요.
  console.log(s[i + 1] - s[i]);
}

for (let i = 0; i < s.length - 1; i++) {
  console.log(s[i], s[i + 1]); // 마지막 값을 확인해보세요.
  console.log(s[i + 1] - s[i]);
}

for (let i = 1; i < s.length; i++) {
  console.log(s[i - 1], s[i]); // 마지막 값을 확인해보세요.
  console.log(s[i] - s[i - 1]);
}

// 문제
// 다음 수학 점수의 평균을 구하세요.
let 수학점수 = [10, 99, 89, 40];
// step1. 냅다 반복문부터 만들지말고, 순차적으로 해보기
(수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3]) / 수학점수.length;

// step2. '반복문을 사용할 수 있는 구간'을 정하기
let s = 0;
for (let i = 0; i < 수학점수.length; i++) {
  s += 수학점수[i];
}
console.log(s / 수학점수.length);

let s = 0;
for (const i of 수학점수) {
  s += 수학점수[i];
}
console.log(s / 수학점수.length);

// 문제
// 다음 user의 나이 평균을 구하세요.
let user = [
  {
    _id: "642e3071c61a23c70ae6076b",
    index: 0,
    age: 31,
    name: "Hicks Garza",
    gender: "male",
  },
  {
    _id: "642e3071ecd6f90a87d64731",
    index: 1,
    age: 32,
    name: "Ayers Harrington",
    gender: "male",
  },
  {
    _id: "642e3071cef9ddc131f047fb",
    index: 2,
    age: 39,
    name: "Lamb Adams",
    gender: "male",
  },
];

let s = 0;
for (let i = 0; i < user.length; i++) {
  s += user[i]["age"];
}
console.log(s / user.length);

let s = 0;
for (const i of user) {
  s += user[i].age;
}
console.log(s / user.length);

// 견고한 코드란?
// 1. age가 문자였다면?
// 2. age가 입력되지 않았다면?
// 3. age 필드가 없다면?(MongoDB의 경우)

// 일반 for
let s = 0;
for (let i = 0; i < user.length; i++) {
  console.log(user[i]["age"]);
  s += user[i]["age"];
}
console.log((s / user.length).toFixed(2)); // console.log(Math.floor(s / user.length))


/// for of
let s = 0;
for(const i of user){ //for of 니까 큰 덩어리가 i로 들어옴
  s += i.age
}
console.log((s / user.length).toFixed(2));

/// for in
let s = 0;
for(const i in user){ //for in은 index로 들엉모
  s += user[i].age
}
console.log((s / user.length).toFixed(2));

//왜 for inf과 for of에서는 const가 가능한가요? 일반 for문에선 안됨.
    for(const i =0; i< 10, i++){
  console.log(10);
} // error

for(const i in [10,20,30]){
  console.log(i);
}

for(const i of [10,20,30]){
  console.log(i);
}



user
.map(el => el.age)
.filter(el => !!el)
.reduce((a,c) => a + c, 0)