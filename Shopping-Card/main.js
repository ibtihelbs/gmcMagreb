const hearts = document.querySelectorAll(".fa-heart");
const plus = document.querySelectorAll(".fa-plus-circle");
const minus = document.querySelectorAll(".fa-minus-circle");
const quantity = document.querySelectorAll(".quantity");
const deleteBtns = document.querySelectorAll(".fa-trash-alt");
const cardbody = document.querySelectorAll(".card-body");
const totalPrice = document.querySelector(".total");

hearts.forEach((v) =>
  v.addEventListener("click", function (e) {
    e.target.style.color = e.target.style.color === "red" ? "black" : "red";
  })
);

plus.forEach((v, i) =>
  v.addEventListener("click", function () {
    quantity[i].innerHTML = Number(quantity[i].innerHTML) + 1;
    calculate();
  })
);
deleteBtns.forEach((v, i) =>
  v.addEventListener("click", function () {
    cardbody[i].dataset.price = 0;
    cardbody[i].style.display = "none";
    calculate();
  })
);

minus.forEach((v, i) =>
  v.addEventListener("click", function () {
    if (Number(quantity[i].innerHTML) > 0) {
      quantity[i].innerHTML = Number(quantity[i].innerHTML) - 1;
      calculate();
    }
  })
);

function calculate() {
  let total = 0;
  cardbody.forEach((v, i) => {
    console.log(Number(v.dataset.price), Number(quantity[i].innerHTML));
    total += Number(v.dataset.price) * Number(quantity[i].innerHTML);
  });
  console.log(total);
  totalPrice.innerHTML = total + " $";
}
calculate();
