//Los Angeles

setInterval(function () {
  let losAngeles = document.querySelector("#los_angeles");
  let losAngelesDate = document.querySelector("#date");
  let losAngelesTime = document.querySelector(".time");
  let lAtime = moment().tz("America/Los_Angeles");

  losAngelesDate.innerHTML = lAtime.format("MMMM Do YYYY");
  losAngelesTime.innerHTML = `${lAtime.format("h:mm:ss")}
<small>${lAtime.format("A")}</small>`;
}, 1000);

//Sydney

setInterval(function () {
  let sydney = document.querySelector("#sydney");
  let sydneyDate = document.querySelector("#date2");
  let sydneyTime = document.querySelector("#time2");
  let sydneytime = moment().tz("Australia/Sydney");

  sydneyDate.innerHTML = sydneytime.format("MMMM Do YYYY");
  sydneyTime.innerHTML = `${sydneytime.format("h:mm:ss")}
<small>${sydneytime.format("A")}</small>`;
}, 1000);

//Tokyo

setInterval(function () {
  let tokyo = document.querySelector("#tokyo");

  let tokyoDate = document.querySelector("#date3");
  let tokyoTime = document.querySelector("#time3");
  let tokyotime = moment().tz("Asia/Tokyo");

  tokyoDate.innerHTML = tokyotime.format("MMMM Do YYYY");
  tokyoTime.innerHTML = `${tokyotime.format("h:mm:ss")}
<small>${tokyotime.format("A")}</small>`;
}, 1000);

//Paris

setInterval(function () {
  let paris = document.querySelector("#paris");

  let parisDate = document.querySelector("#date4");
  let parisTime = document.querySelector("#time4");
  let paristime = moment().tz("Europe/Paris");

  parisDate.innerHTML = paristime.format("MMMM Do YYYY");
  parisTime.innerHTML = `${paristime.format("h:mm:ss")}
<small>${paristime.format("A")}</small>`;
}, 1000);
