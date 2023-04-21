function SangYong() {
  this.age = 20;
}

SangYong.prototype.name = "상용";

const sanyong1 = new SangYong();

//엥,그럼 함수의 모든 프로퍼티 프로토타입으로 빼는거랑 같은 결과 나오는데 왜 저렇게 써야하지?

//인스턴스의 __proto__는 생성자 함수는 prototype을 바라본다.

function FoodPicker(foodNames) {
  this.menu = foodNames;
}

FoodPicker.prototype.sayMenu = function () {
  console.log(
    `오늘 쁘리릭 메뉴는 쁘릭 ${
      this.menu[parseInt(Math.random() * this.menu.length)]
    } 입니다.`
  );
};

const robot1 = new FoodPicker(["짜장면", "김치찌개", "김치찌개"]);
const robot2 = new FoodPicker(["탕슉", "단무지", "응아냐"]);
const robot3 = new FoodPicker(["커피", "케이크", "분리"]);

robot1.__proto__ === FoodPicker.prototype; //true
robot1.__proto__ === robot2.__proto__; //true
robot1.sayMenu() === robot2.sayMenu(); //true
robot2.sayMenu() === robot3.sayMenu(); //true
robot3.sayMenu() === robot1.sayMenu(); //true

//이렇듯 프로토타입은 모든 인스턴스가 하나의 메서드를 공유하도록 만들어 자원을 더 효율적으로 사용하도록 도와줍니다.
