class Sausage {
  constructor(el1, el2) {
    this.ingre1 = el1;
    this.ingre2 = el2;
  }

  taste() {
    console.log(`${this.ingre1}와 ${this.ingre2}맛이 난다!`);
  }
}
const sausage = new Sausage("소고기", "파");

class Sausage {
  constructor(f1, f2) {
    (this.ingr1 = f1), (this.ingr2 = f2);
  }
  taste() {
    console.log(
      `흠.. 이 소세지에서는 ${this.ingr1}과${this.ingr2}의 향기가 나는군요.`
    );
  }
}
class Fire extends Sausage {
  constructor(f3) {
    super(f1, f2);
    this.ingr3 = f3;
  }
  taste() {
    console.log(`이 소세지는 또 ${this.ingr3}맛이 난다!`);
  }
}

class FiresSausage extends Sausage {
  constructor(el1, el2, el3) {
    // this.inside1 = el1;
    // this.inside2 = el2;
    super(el1, el2);
    this.ingre3 = el3;
  }
  // 오버로딩
  // taste(el1) {
  //     console.log(`와~~${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}맛이 나는 소세지다!!`);
  // }

  // taste(el1, el2) {
  //     console.log(`와~~${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}맛이 나는 소세지다!!`);
  // }

  // 오버라이딩
  // taste() {
  //     console.log(`와~~${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3}맛이 나는 소세지다!!`);
  // }
  taste() {
    console.log(
      //오버라이딩, 부모의 taste()를 덮어쓰고 아래것이 출력됨
      `${this.ingre1}와(과) ${this.ingre2}, 그리고 ${this.ingre3}도난다!!`
    );
  }
}

const fireSausage = new FiresSausage("소고기", "파", "불맛");
