const memoContainer = document.querySelector(".memoContainer"); //포스트잇 공간

const title = document.querySelector("#title"); //제목

const content = document.querySelector("#content"); //내용

let memoArray = localStorage.getItem("memoArray")
  ? JSON.parse(localStorage.getItem("memoArray"))
  : []; //배열

memoArray = memoArray ?? [];
render();

function resetMemo() {
  localStorage.clear(); // 스토리지 비워주기
  memoContainer.innerHTML = ""; // 메모 컨테이너 비워주기
  memoArray = []; // 메모 전체 배열 비워주기
}

function createMemo(item) {
  //메모를 하나만 생성해주는 함수
  const list = document.createElement("li"); // ul>li태그 생성
  const memoId = document.createElement("p"); // 순서 번호
  const delMemoBtn = document.createElement("button"); //del 버튼 태그 생성
  const h2_title = document.createElement("h2"); // 질문 h2태그 생성
  const p_content = document.createElement("p"); // 답변 p태그 생성
  const memoTime = document.createElement("p"); // 날짜 표기

  memoId.className = "a11y-hidden";
  memoTime.className = "memoTime";
  list.className = "memoCard";
  delMemoBtn.className = "delBtn";
  //p_content.className = "visible"; // 초기 내용 숨김 위해 클래스명 설정, 아래 토글로 on/off

  // list.addEventListener("mousedown", () => {
  //   p_content.classList.toggle("visible");
  // });

  h2_title.setAttribute(
    "style",
    "color:#3e3e3e; border-bottom: 1px solid #ffb347; margin-top:30px"
  );
  h2_title.textContent = item.memoTitle;
  p_content.setAttribute("style", "color:#3e3e3e;");
  p_content.textContent = item.memoContent;
  memoId.textContent = item.leng + 1;
  delMemoBtn.setAttribute("id", item.leng); // p는 보여주는 번호이기 때문에 index[0]에 1을 더해줬고, 이것은 실제 id의 번호 속성
  list.classList.add(item.leng); // p는 보여주는 번호이기 때문에 index[0]에 1을 더해줬고, 이것은 실제 id의 번호 속성
  delMemoBtn.setAttribute("style", "");
  delMemoBtn.setAttribute("onclick", "delMemo()");
  memoTime.textContent = item.date;
  // delMemoBtn.textContent = "삭제";

  // const flexDiv = document.createElement("div");
  // flexDiv.setAttribute(
  //   "style",
  //   "display:flex; justify-content: space-between;"
  // );
  memoContainer.appendChild(list);

  // list.appendChild(flexDiv);
  list.appendChild(memoId);
  list.appendChild(delMemoBtn);
  list.appendChild(h2_title);
  list.appendChild(p_content);
  list.appendChild(memoTime);

  const randomX = parseInt(
    Math.random() * (window.innerWidth - list.offsetWidth)
  );
  const randomY = parseInt(
    Math.random() * (window.innerHeight - list.offsetHeight)
  );

  list.style.top = randomY + "px";
  list.style.left = randomX + "px";

  list.setAttribute("onmousedown", "moveMemo()");
  list.ondragstart = function () {
    return false;
  };

  console.dir(list);
}

function moveMemo() {
  if (event.target.localName === "button") return;
  console.log(event);

  const memo = event.target.closest("li");
  if (!memo) return;

  let shiftX = event.clientX - memo.getBoundingClientRect().left;
  let shiftY = event.clientY - memo.getBoundingClientRect().top;

  // 현재 위치한 부모에서 body로 직접 이동하여
  // body를 기준으로 위치를 지정합니다.

  // 공을 pageX, pageY 좌표 중앙에 위치하게 합니다.
  function moveTo(pageX, pageY) {
    memo.style.left = pageX - shiftX + "px";
    memo.style.top = pageY - shiftY + "px";
  }

  // 포인터 아래로 공을 이동시킵니다.
  moveTo(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveTo(event.pageX, event.pageY);
  }

  // (2) mousemove로 공을 움직입니다.
  document.addEventListener("mousemove", onMouseMove);

  // (3) 공을 드롭하고, 불필요한 핸들러를 제거합니다.
  memo.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    memo.onmouseup = null;
  };

  console.log(memo);
  //   if(event.target)
  //   let li = event.target.closest('td'); // (1)

  //   if (!td) return; // (2)

  //   if (!table.contains(td)) return; // (3)

  //   highlight(td); // (4)
}

function render() {
  memoContainer.innerHTML = "";

  for (const item of memoArray) {
    createMemo(item);
  }
}

// li를 1,2,3,4, 순서.. 어쩌고 render 에서 나온 random값을 id 각 순서에다가 위치값을 기억하게.

function addMemo() {
  //정보 값들을 객체에 담고, 어레이에 push, 로컬에 문자로 저장.
  const time = new Date();
  const year = time.getFullYear();
  const month = String(time.getMonth() + 1).padStart(2, "0"); // getMonth()는 0부터 시작하므로 1을 더해줍니다.
  const day = String(time.getDate()).padStart(2, "0");

  let memoInfo = {
    memoTitle: title.value,
    memoContent: content.value,
    date: `${year}/${month}/${day}`, //시간 표기
    leng: memoArray.length,
  };
  memoArray.push(memoInfo);
  localStorage.setItem("memoArray", JSON.stringify(memoArray));
  title.value = "";
  content.value = "";
  createMemo(memoInfo);
  // render는 메모 전체 새로 그리기. 다른것은 지우지 않고
  // render();
}

function delMemo() {
  //memoArray 안의 모든요소는 memoInfo의 객체들을 요소이다. 즉, len을 참조할 수 있음.
  //event.srcElement.id는 이벤트가 발생한 요소의 id값(여기선 순서가 됨. listrender에서 정해줬음)

  const selectedList = event.target.parentNode;
  selectedList.remove();

  const memoElements = document.querySelectorAll(".memoCard");

  const newMemoArray = [];
  memoElements.forEach((el, i) => {
    let newEl = {
      memoTitle: el.children[2].innerHTML,
      memoContent: el.children[3].innerHtml,
      date: el.children[4].innerHTML,
      leng: i,
    };
    newMemoArray.push(newEl);
  });
  memoArray = newMemoArray;
  localStorage.setItem("memoArray", JSON.stringify(memoArray));
}

//스크롤 버튼 추가

const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "&darr;";
scrollBtn.setAttribute("class", "scrollDown");
document.body.appendChild(scrollBtn);

const scrollDown = document.querySelector(".scrollDown");
scrollDown.addEventListener("click", function () {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

//사운드 추가
const addBtn = document.querySelector(".add");
const resetBtn = document.querySelector(".reset");
addBtn.addEventListener("click", function () {
  let addAudio = new Audio("postit.wav");
  addAudio.loop = false;
  addAudio.play();
});
resetBtn.addEventListener("click", function () {
  let resetAudio = new Audio("tear.wav");
  resetAudio.loop = false;
  resetAudio.play();
});
