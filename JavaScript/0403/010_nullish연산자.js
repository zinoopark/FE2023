// https://ko.javascript.info/nullish-coalescing-operator

// 스펙에 추가된 지 얼마 안 된 문법입니다. 구식 브라우저는 폴리필이 필요합니다. *폴리필: 신식문법을 구식 브라우저에서도 사용할 수 있도록 해주는 것

// '??' null인것을 판단하여 null이면 다음 값으로 넘어간다.
//nullish 병합 연산자 ??없이 x = a ?? b와 동일한 동작을 하는 코드를 작성하면 다음과 같습니다. x = (a !== null && a !== undefined) ? a : b; = a가 null 혹은 undefined 둘중 하나라도 해당 될 경우는 falsy이므로 b가 된다. <-이거 매우 중요

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
console.log(height || 100); // 100, flasy || true 이므로 true인 100 표현
console.log(height ?? 100); // 0, 이 height가 null이야? -> 아니니까 안넘어가서 0 표현

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
