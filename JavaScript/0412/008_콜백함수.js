// 콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게!
function 가장작은값에두배(a, b) {
  console.log(a);
  let result = b(...a) * 2;
  return result;
}

가장작은값에두배([10, 20, 11, 21, 19, 17], Math.min);

let arr = [10, 20, 11, 21, 19, 17];
arr.map((v, i) => v * 2);

//위를 풀어쓰면,
let arr = [10, 20, 11, 21, 19, 17];
function 두배(v, i) {
  return v * 2;
}
arr.map(두배);

// 아래와 같이 했을 경우에는 함수의 순수성, 순수함수의 장점을 살릴 수 없습니다.
// 외부에서 직접 값을 가져오는 것을 지양해주세요.
function four(a, b, c) {
  let z = one(a, b) + one(a, b);
  return z * 2;
}

four(7, 3, one);
