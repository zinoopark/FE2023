// 객체는 앞서 살펴본 배열처럼 여러개의 데이터를 한 변수에 저장할 수 있는 자료형입니다. 차이점은 배열이 값에 접근하기 위해서는 배열 생성시 자동으로 부여되는 인덱스 번호를 이용해야 했지만, 객체는 특별한 키(key)를 통해 원하는 값(value)에 접근 할 수 있는 키-값 쌍으로 이루어져 있다는 점 입니다.
//객체의 리터럴 표현은 중괄호 {}를 사용하여 생성합니다. 객체는 key-value 쌍으로 이루어져 있으며, 각 key와 value는 콜론(:)으로 구분됩니다. 예를 들어, 다음과 같이 babaYaga 객체를 생성할 수 있습니다.
    
그리고 이러한 키 값 쌍을 합쳐서 속성(attribute)이라 표현합니다. 만약 속성의 값이 함수인 경우에는 메소드라고 부릅니다.

const babaYaga = {
  name: "John Wick",
  age: 53,
  from: "벨라루스",
  askingHim: function () {
    console.log("Yeah, I'm thinking I'm back!");
  },
  0: '01096988268',
};
console.log(babaYaga.name);
console.log(babaYaga.age);
console.log(babaYaga["name"]);
console.log(babaYaga["age"]);

babaYaga.0 // error, 그래서 arr.1 안되는 것입니다.

babaYaga['0']
//'01096988268'

babaYaga[0]
//'01096988268'

//유사배열객체. 잊자.
const arr = {
  0: 10,
  1: 20,
  2: 30,
  length: 3
};

// 이런건 배열과 비슷해보이지만 배열이 아닙니다. 유사배열객체라고 합니다.
// 똑같은 요소로 만들어도 arr가 순회할 때 더 빠릅니다.

const human = {
  name: "hojun",
  age: 53,
  from: "korea",
  askingHim: function () {
      console.log("hello world!");
  },
  0: '01050442903'
};

human.name = 'jun'
human.name
human.askingHim()
delete human.job;
console.log('age' in human);

//객체의 메소드
// 별표(**)
// hasOwnProperty() 메소드는 객체가 특정 프로퍼티를 가지고 있는지를 나타내는 불리언 값을 반환합니다.
const aespa = {
  members: ['카리나', '윈터', '지젤', '닝닝'],
  from: '광야',
	sing: function(){
		return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
	}
};


console.log(aespa.hasOwnProperty('itzy'));
console.log(aespa.hasOwnProperty('song'));

// 별표(***)
// Object.keys() 메소드는 객체의 속성 이름(key)들을, Object.values() 메소드는 객체의 속성 값(value)들을 배열로 반환합니다.
// 다른 언어는 aespa.keys()와 같은 방식으로 사용합니다.
console.log(Object.keys(aespa)); // 불편한 코드
console.log(Object.values(aespa)); // 불편한 코드