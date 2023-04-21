class Robot {
  #password;

  constructor(name, pw) {
    this.name = name;
    this.#password = pw;
  }

  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }

  get password() {
    return this.#password;
  }

  set password(pw) {
    this.#password = pw;
  }
}

const bot = new Robot("재현", 1234);

//이렇게 get과 set 키워드를 사용하면 마치 객체의 프로퍼티에 접근하듯 값을 다룰수 있게 됩니다.

// 하지만 이렇게 비공개 프로퍼티에 접근하기 위해 사용한다면 비공개의 의미가 사라져 버리는데 주의합시다! 😂
