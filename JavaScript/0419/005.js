//class
//class 키워드 + 이름 + 중괄호로 이루어져 있습니다.

class Robot {
  // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다.
  // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
  constructor(name) {
    this.name = name;
  }

  // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

const robot = new Robot("상용");

//자바스크립트만의 사용자 정의 타입 생성(객체 생성) 방법을 다른 언어의 클래스 문법처럼 바꿔준 것이 바로 자바스크립트 클래스(class)입니다!

//이처럼 내부적인 동작은 동일하지만 더 보기 좋고 편리하게 개선된 문법을 슈가신텍스 (Syntactic sugar) 라고 부릅니다.

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

// 위 생성자 함수 프로토타입을 아래 클래스와 같이 표현할 수 있겠다.
// 한가지 더 장점이 있다면 생성자 함수도 함수명을 대문자로 해준다지만, function을 보고 일반함수와 헷갈릴 경우도 있다.
class FoodPicker {
  constructor(foodNames) {
    this.menu = foodNames;
  }
  sayMenu() {
    console.log(
      `오늘 쁘리릭 메뉴는 쁘릭 ${
        this.menu[parseInt(Math.random() * this.menu.length)]
      } 입니다.`
    );
  }
}
const robot2 = new FoodPicker(["짜장면", "김치찌개", "김치찌개"]);

//class 상속
//상속을 받는 클래스는 ‘파생 클래스’(derived classes)라고 부릅니다.
//부모 클래스의 프로퍼티를 상속받기 위해 super 함수를 사용합니다. 이때 super는 부모 생성자를 참조합니다.

class BabyRobot extends Robot {
  //상속받을 클래스 Baby~ Robot은 상속받을 부모 생성자 함수
  constructor(name) {
    super(name); //프로퍼티, 메서드를 상속받을 때 super입력, 서브 클래스에 생성자 함수가 없다면 super 함수가 자동으로 호출되어 부모 클래스의 프로퍼티를 상속 받게 합니다.
    this.ownName = "아이크";
  }

  sayBabyName() {
    // 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게 됩니다. 때문에 this로 접근 할 수 있습니다.
    this.sayYourName(); //메서드를 상속받을 때는 this. this는 부모 클래스
    console.log("Suceeding you, Father!");
  }
}
const babyrobot = new BabyRobot();
