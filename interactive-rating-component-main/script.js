/*


    */
const rating = document.querySelectorAll(".rating button");
const submit = document.querySelector(".submit");

let ratingNum = null;

rating.forEach(function (v, i) {
  v.addEventListener("click", function () {
    ratingNum = i + 1;
  });
});
submit.addEventListener("click", function () {
  if (ratingNum == null) {
    alert("please select number");
    return;
  }
  document.querySelector("body").innerHTML = ` <div class="thank-u grid-col">
      <img src="./images/illustration-thank-you.svg" alt="Thank" />
      <h4>
        You selected
        ${ratingNum}
        out of 5
      </h4>

      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>`;
});
