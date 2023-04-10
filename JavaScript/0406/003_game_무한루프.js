// 무한루프 활용한 업다운 게임

let answer = ~~(Math.random() * 100); // = Math.floor(Math.random()*100)

let count = 0;
for (;;) {
  count += 1;
  let userInput = parseInt(window.prompt("값을 입력해주세요!"));
  if (answer > userInput) {
    window.alert("UP");
  } else if (answer < userInput) {
    window.alert("DOWN!");
  } else if (Number.isNaN(userInput)) {
    // 숫자가 아닐경우 true -> 다시 입력하세요
    window.alert("다시 입력하세요!");
  } else {
    window.alert("잘했어!");
    break;
  }
}

console.log(`${count}번째에 맞추셨습니다!`);
