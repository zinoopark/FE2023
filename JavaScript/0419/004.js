const obj = {
  name: "test",
};

//name 프로퍼티가 존재하므로
console.log(obj.hasOwnProperty("name"));

const arr = [1, 2, 3];
//name프로퍼티가 없음
console.log(arr.hasOwnProperty("name"));

// 객체의 상속

const obj = {
  name: "test",
};

console.log(obj.hasOwnProperty("name"));

const arr = [1, 2, 3];
//이건(hasOwnProperty) 배열의 메서드인데 어떻게?
console.log(arr.hasOwnProperty("name"));

//Array 함수의 __proto__ 가 Object 함수의 __proto__ 를 참조하고 있기 때문에 Array의 prototype에 존재하지 않는 Object 객체의 프로퍼티와 메서드를 사용할 수 있습니다. 이처럼 자기 자신에게 존재하지 않는 프로퍼티나 메서드를 프로토타입을 통해 추적하는 과정을 프로토타입 체이닝이라고 합니다.

//부모
function Parent() {
  this.name = "상용";
}
Parent.prototype.rename = function (name) {
  this.name = name;
};
Parent.prototype.sayName = function () {
  console.log(this.name);
};

const parent = new Parent();

//자식
function Child() {
  Parent.call(this); //parent의 this를 참조
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.canWalk = function () {
  console.log("now i can walk!!");
};

const child = new Child();
