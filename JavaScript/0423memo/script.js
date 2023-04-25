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

function render() {
  memoContainer.innerHTML = "";

  for (const item of memoArray) {
    const list = document.createElement("li"); // ul>li태그 생성
    const p_content = document.createElement("p"); // 답변 p태그 생성
    const h2_title = document.createElement("h2"); // 질문 h2태그 생성
    const memoId = document.createElement("p"); // 순서 번호
    const delMemoBtn = document.createElement("button"); //del 버튼 태그 생성

    list.className = "memoCard";
    delMemoBtn.className = "delBtn";
    p_content.className = "visible"; // 초기 내용 숨김 위해 클래스명 설정, 아래 토글로 on/off

    list.addEventListener("mousedown", () => {
      p_content.classList.toggle("visible");
    });

    h2_title.setAttribute(
      "style",
      "border-bottom: 1px solid red; margin-top:30px"
    );
    h2_title.textContent = item.memoTitle;
    p_content.setAttribute("style", "color:red");
    p_content.textContent = item.memoContent;
    memoId.textContent = item.leng + 1;
    delMemoBtn.setAttribute("id", item.leng);
    delMemoBtn.setAttribute("style", "");
    delMemoBtn.setAttribute("onclick", "delMemo()");
    delMemoBtn.textContent = "삭제";

    const flexDiv = document.createElement("div");
    flexDiv.setAttribute(
      "style",
      "display:flex; justify-content: space-between;"
    );
    memoContainer.appendChild(list);

    list.appendChild(flexDiv);
    flexDiv.appendChild(memoId);
    flexDiv.appendChild(delMemoBtn);
    list.appendChild(h2_title);
    list.appendChild(p_content);

    const rect = list.getBoundingClientRect();
    const randomX = parseInt(
      Math.random() * (memoContainer.offsetWidth - list.offsetWidth)
    );
    const randomY = parseInt(
      Math.random() * (memoContainer.offsetHeight - list.offsetHeight)
    );
    list.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }
}

function addMemo() {
  let memoInfo = {
    memoTitle: title.value,
    memoContent: content.value,
    leng: memoArray.length,
  };
  memoArray.push(memoInfo);
  localStorage.setItem("memoArray", JSON.stringify(memoArray));
  // listMaker(memoArray[memoArray.length - 1]);
  render();
  title.value = "";
  content.value = "";
}

function delMemo() {
  //memoArray 안의 모든요소는 memoInfo의 객체들을 요소이다. 즉, len을 참조할 수 있음.
  //event.srcElement.id는 이벤트가 발생한 요소의 id값(여기선 순서가 됨. listMaker에서 정해줬음)
  const idx = memoArray.find((el) => el.leng == event.target.id); //이걸 이용해서 현재 id값과 이벤트(클릭)가 발생한 녀석의 id가 일치하는지 여부
  if (idx) {
    const findIdx = memoArray.findIndex((el) => el.leng === idx.leng); //주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환, 그 뒤의 연산자는 내가 누른 이벤트와 그 이벤트가 발생한 위치의 len이 같을 경우
    memoArray.splice(findIdx, 1);
  }
  localStorage.setItem("memoArray", JSON.stringify(memoArray));
  render();
}

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
