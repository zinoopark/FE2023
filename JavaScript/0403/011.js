// json generator
// https://json-generator.com/
// json는 원래 js안에 있던 자료형이었는데, 워낙 많이 써서 독립시켰다.


let 회원정보 = [
  {
    _id: "642a62272cc1f9d7749d83c6",
    index: 0,
    age: 29,
    eyeColor: "green",
    name: "Cleo Glover",
    gender: "female",
    company: "ZILLAR",
  },
  {
    _id: "642a62276f17042bb6ce24c4",
    index: 1,
    age: 26,
    eyeColor: "brown",
    name: "Bonita French",
    gender: "female",
    company: "TRIPSCH",
  },
  {
    _id: "642a6227b1037925055135b2",
    index: 2,
    age: 29,
    eyeColor: "brown",
    name: "Mccarty Sanders",
    gender: "male",
    company: "FROLIX",
  },
  {
    _id: "642a6227bbd5a36c8312d351",
    index: 3,
    age: 28,
    eyeColor: "brown",
    name: "Dean Nixon",
    gender: "male",
    company: "TSUNAMIA",
  },
  {
    _id: "642a62275236a22dc45f95f3",
    index: 4,
    age: 29,
    eyeColor: "brown",
    name: "Hale Watson",
    gender: "male",
    company: "SUPPORTAL",
  },
  {
    _id: "642a622762dde023409142a1",
    index: 5,
    age: 32,
    eyeColor: "blue",
    name: "Rush Campbell",
    gender: "male",
    company: "ORBAXTER",
  },
];

회원정보[0];
회원정보[0]["name"];
회원정보[1]["company"];

// 모르셔도 됩니다.
let 나이평균 =
  (회원정보[0]["age"] +
    회원정보[1]["age"] +
    회원정보[2]["age"] +
    회원정보[3]["age"] +
    회원정보[4]["age"] +
    회원정보[5]["age"]) /
  6;
console.log(나이평균);
