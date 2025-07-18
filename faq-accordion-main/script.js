const questions = document.querySelectorAll(".q");
const p = document.querySelectorAll("p");
const img = document.querySelectorAll(".q img");
let current = null;
questions.forEach(function (v, i) {
  v.addEventListener("click", function () {
    console.log(current);
    if (current != null) {
      p[current].setAttribute("class", "noShow");

      img[current].setAttribute("src", "./assets/images/icon-plus.svg");
    }
    p[i].classList.toggle("show");
    console.log(p[i].outerHTML.includes("show"));
    if (p[i].outerHTML.includes("show")) {
      img[i].setAttribute("src", "./assets/images/icon-minus.svg");
    } else {
      img[i].setAttribute("src", "./assets/images/icon-plus.svg");
    }
    current = i;
  });
});
