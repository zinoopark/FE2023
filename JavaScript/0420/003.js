// class #문법은 이렇게 풀어 쓸 수 있다.
// 클로저를 이용한 정보은닉(정보 비공개)
// 프로퍼티(age)접근을 위한 내부 생성자 함수 생성
function PersonGenrator() {
  let age = 25;

  function InnerPersonType() {}

  InnerPersonType.prototype.getAge = function () {
    return age;
  };

  return InnerPersonType;
}

const Person = PersonGenrator();
const myPerson = new Person(); //인스턴스

// 즉시 실행함수 (IIFE)
const PersonGenerator2 = (function () {
  let age = 25;

  function InnerPersonType() {}

  InnerPersonType.prototype.getAge = function () {
    return age;
  };

  return InnerPersonType;
})();

const myPerson2 = new PersonGenerator2();
