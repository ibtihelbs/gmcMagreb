const heading_2 = document.querySelector("h2");
const shop_html = document.querySelector("#shop");
const box = document.querySelector("#box");
const shop = [
  {
    name: "lilas",
    price: 5,
    prod: "shampoing",
  },
  {
    name: "debra",
    price: 3,
    prod: "oil",
  },
  {
    name: "lilas",
    price: 5,
    prod: "apres shampoing",
  },
];
x = 1;
x = x + 5;
x += 5;
shop.forEach(function (f) {
  shop_html.innerHTML += `<h1> ${f.name} </h1><p> ${f.price} dt </p><h2> ${f.prod} </h2>`;
});

box.addEventListener("click", function () {
  document.querySelectorAll(".red-bg")[1].classList.toggle("change-bg");
});
