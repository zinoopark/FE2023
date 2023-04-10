let x = 0;
while (x < 10) {
  // (true)면 실행, (false)면 탈출
  console.log(x);
  x += 1;
} // 제일 첫 단계는 0인 x가 10보다 작기 때문에출력, 10보다 작은 수까지 1씩 더해가며 반복

// 왜 10까지 출력??..
let x = 0;
while (x < 10) {
  console.log("start");
  console.log(x);
  x += 1;
  console.log("end");
}

/////
// why? 10까지 출력이 되는가?
let x = 0;
while (x < 10) {
  console.log(x);
  x += 1;
}

let x = 0;
while (x < 10) {
  console.log(x);
  x += 1;
  console.log("");
}

/////
let input;

do {
  input = prompt("숫자를 입력하세요.");
} while (isNaN(input));

console.log("입력한 숫자는 " + input + "입니다.");

///
let input;

do {
  //do while은 우선 한번하고, while이 true면 계속, 일반 whlie은 true여야 실행
  input = confirm("다음에도 저희와 함께 하시겠습니까?");
} while (!input);

console.log("감사합니다.");

// 구구단 for
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

// 암기코드 1
// 구구단 while
let i = 2;
while (i < 10) {
  let j = 1;
  while (j < 10) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}

// while 오답
let i = 2;
let j = 1;
while (i < 10) {
  // j = 1 // 이 초기화 안해주면 j는 영원히 10으로 끝난채기 때문에 오답, 2단만 실행됨 최조 2와 1로 변수만 설정됐기 때문에.. i만 2단 3단 4단 .. 올라가지만 j는 영원히 10이어서 2단만 출력됨.. 불쌍한 i
  while (j < 10) {
    console.log(`${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}

// 암기코드 2
let s = "hello world";
let result = "";
for (let i = 0; i < s.length; i++) {
  result = result + s[i];
  // result = s[i] + result;
}
console.log(result);

// s[0] + result => 'h' + '' => 'h'
// s[1] + result => 'e' + '' => 'eh'
// s[2] + result => 'l' + '' => 'leh'

let s = "hello world";
let result = "";
let count = 0;
while (count < s.length) {
  result = s[count] + result;
  count++;
}
console.log(result);

// 암기코드 3
// 팩토리얼
// 5! = 5 * 4 * 3 * 2 * 1
let s = 1;
for (let i = 1; i < 6; i++) {
  s *= i ;
}
console.log(s);

//while
let s = 1;
i = 1;
while ( i < 6) {
  s *= i
  i += 1
}
console.log(s);