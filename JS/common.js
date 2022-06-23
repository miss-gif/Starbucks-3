const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

//검색 아이콘을 누르면 input이 포커스
searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

//input에 포커스가 되면
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});

//input이 블러가 되면
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
  searchInputEl.setAttribute("value", "");
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
