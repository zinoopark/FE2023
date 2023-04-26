
const memoContainer = document.querySelector(".memoContainer"); //포스트잇 공간

const title = document.querySelector("#title"); //제목

const content = document.querySelector("#content"); //내용

let memoArray = localStorage.getItem("memoArray")
  ? JSON.parse(localStorage.getItem("memoArray"))
  : []; //배열

memoArray = memoArray ?? [];
render();

//reset
function resetMemo() {
  localStorage.clear();
  memoContainer.innerHTML = "";
  memoArray = [];
}

//create
function createMemo(item) {
  const list = document.createElement("li");
  const memoId = document.createElement("p");
  const delMemoBtn = document.createElement("button");
  const h2_title = document.createElement("h2");
  const p_content = document.createElement("p");
  const memoTime = document.createElement("p");

  memoId.className = "a11y-hidden";
  memoTime.className = "memoTime";
  list.className = "memoCard";
  delMemoBtn.className = "delBtn";

  h2_title.setAttribute(
    "style",
    "color:#3e3e3e; border-top: 1px solid #ffb347; margin-top:30px"
  );
  h2_title.textContent = item.memoTitle;
  p_content.setAttribute("style", "color:#3e3e3e;");
  p_content.textContent = item.memoContent;
  memoId.textContent = item.leng + 1;
  delMemoBtn.setAttribute("id", item.leng);
  list.classList.add(item.leng);
  delMemoBtn.setAttribute("style", "");
  delMemoBtn.setAttribute("onclick", "delMemo()");
  memoTime.textContent = item.date;
  // delMemoBtn.textContent = "삭제";


  memoContainer.appendChild(list);

  list.appendChild(memoId);
  list.appendChild(delMemoBtn);
  list.appendChild(h2_title);
  list.appendChild(p_content);
  list.appendChild(memoTime);

  const wrraperWH = document.querySelector(".whole-warrper");
  const randomX = parseInt(
    Math.random() * (window.innerWidth - list.offsetWidth)
  );
  const randomY = parseInt(
    Math.random() *
      (window.innerHeight - wrraperWH.offsetHeight - list.offsetHeight)
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

//render
function render() {
  memoContainer.innerHTML = "";

  for (const item of memoArray) {
    createMemo(item);
  }
}

//add info
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
}

//delete
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

//scroll
const scrollBtn = document.createElement("button");
scrollBtn.innerHTML = "&darr;";
scrollBtn.setAttribute("class", "scrollDown");
document.body.appendChild(scrollBtn);

const scrollDown = document.querySelector(".scrollDown");
scrollDown.addEventListener("click", function () {
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});

//sound
const addBtn = document.querySelector(".add");
const resetBtn = document.querySelector(".reset");
addBtn.addEventListener("click", function () {
  let addAudio = new Audio("mp4/postit.wav");
  addAudio.loop = false;
  addAudio.play();
});
resetBtn.addEventListener("click", function () {
  let resetAudio = new Audio("mp4/tear.wav");
  resetAudio.loop = false;
  resetAudio.play();
});
