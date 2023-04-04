//sort() 메소드는 배열의 요소를 정렬하는데 사용됩니다. 메소드를 호출하면 배열을 변경하며, 정렬된 배열을 반환합니다.

const avengers = ["아이언맨", "스파이더맨", "헐크", "토르"];
console.log(avengers.sort());

// 사전식 정렬입니다. 시간이 지나도 못바뀌는 내용입니다.
const nums = [3, 1, 8, 6];
console.log(nums.sort());

// 오류가 터져버림, sort를 어느 알고리즘을 할꺼냐는 브라우저의 자유
const nums = [3, 1, 11, 8, 6];
console.log(nums.sort());

// 오름차순
const nums = [3, 1, 11, 8, 6];
console.log(nums.sort((a, b) => a - b));

// 내림차순
const nums = [3, 1, 11, 8, 6];
console.log(nums.sort((a, b) => b - a));

// 실무사용코드(삼항연산자 활용)
function sort(key) {
  if (click) {
    click = false;
    var sortedData = jsonData.sort((a, b) =>
      a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0
    );
  } else {
    click = true;
    var sortedData = jsonData.sort((a, b) =>
      a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0
    );
  }
}

//딥
const nums = [3, 1, 11, 8, 6];
console.log(
  nums.sort((a, b) => {
    console.log(a, b);
  })
);

const nums = [3, 1, 11, 8, 6];
console.log(
  nums.sort((a, b) => {
    console.log(a, b);
    console.log(a - b);
  })
);
