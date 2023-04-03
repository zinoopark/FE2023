// https://ko.javascript.info/nullish-coalescing-operator

// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필이 필요합니다. *폴리필: 신식문법을 구식 브라우저에서도 사용할 수 있도록 해주는 것

// '??' null인것을 판단하여 null이면 다음 값으로 넘어간다.

let firstName = null;
let lastName = null;
let nickName = "licat";

console.log(firstName ?? nickName); // licat
console.log(firstName ?? lastName ?? nickName); // licat
console.log(firstName ?? lastName ?? nickName ?? "익명 사용자"); // licat, nickName도 null 일 경우는 익명사용자 출력

let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c);

// 단락회로평가와 nullish 연산자 차이점
let height = 0;
console.log(height || 100); // 100
console.log(height ?? 100); // 0, 이 height가 null이야? -> 아니니까 안넘어가서 0

let height2;
console.log(height2 || 100);
console.log(height2 ?? 100);

let height3 = "";
console.log(height3 || "hello");
console.log(height3 ?? "world");

// 제가 지금 주석으로 다는 내용은 지금 여기서는 모르셔도 괜찮습니다.
// || : 0, null, undefined
// ?? : null, undefined

// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined
