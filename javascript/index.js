function updateTime() {
  //Bobo-Dioulasso

  let boboElement = document.querySelector("#bobo");
  let boboDateElement = boboElement.querySelector(".date");
  let boboTimeElement = boboElement.querySelector(".time");
  let boboTime = moment().tz("Africa/Ouagadougou");

  boboDateElement.innerHTML = boboTime.format("MMMM Do YYYY");
  boboTimeElement.innerHTML = boboTime.format("h:mm:ss [<small>]A[</small>]");

  //Moscow

  let moscowElement = document.querySelector("#moscow");
  let moscowDateElement = moscowElement.querySelector(".date");
  let moscowTimeElement = moscowElement.querySelector(".time");
  let moscowTime = moment().tz("Europe/Moscow");

  moscowDateElement.innerHTML = moscowTime.format("MMMM Do YYYY");
  moscowTimeElement.innerHTML = moscowTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Tokyo

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

  //Sydney

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
