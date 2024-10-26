import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

//狗狗貓貓 監聽按鈕
document
  .querySelector("#dog-btn-section")
  .addEventListener("click", showDogContent);
document
  .querySelector("#cat-btn-section")
  .addEventListener("click", showCatContent);

function showDogContent() {
  document.querySelector("#dog-content").classList.remove("d-none");
  document.querySelector("#cat-content").classList.add("d-none");
  document.querySelector("#cat-btn-section").classList.remove("btn-selected");
  document.querySelector("#dog-btn-section").classList.add("btn-selected");
}

function showCatContent() {
  document.querySelector("#cat-content").classList.remove("d-none");
  document.querySelector("#dog-content").classList.add("d-none");
  document.querySelector("#dog-btn-section").classList.remove("btn-selected");
  document.querySelector("#cat-btn-section").classList.add("btn-selected");
}

// 視窗顯示隱藏 狗狗 貓貓 按鈕
const checkWidth = () => {
  const dogContent = document.getElementById("dog-content");
  const catContent = document.getElementById("cat-content");

  if (window.innerWidth > 768) {
    dogContent.classList.remove("d-none");
    catContent.classList.remove("d-none");
  } else {
    dogContent.classList.add("d-none");
    catContent.classList.remove("d-none");
  }
};

checkWidth();

window.onresize = checkWidth;
