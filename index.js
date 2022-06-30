"use strict";

let data = [];
//fetching local file
fetch("./data.json")
  .then((response) => response.json())
  .then((json) => data=json).then(()=> updateUI("daily"));

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const currentTime = document.querySelectorAll(".card-current-time");
const previousTime = document.querySelectorAll(".card-previous-time");
const profileNav = document.querySelectorAll(".links");

// update interface on switching between nav links(daily, weekly, monthly)
const updateUI = function (time) {
  data.forEach((value, i) => {
    currentTime[i].textContent = `${value.timeframes[time].current}hrs`;
    previousTime[
      i
    ].textContent = `Last Week - ${value.timeframes[time].previous}hrs`;
  });
};


daily.addEventListener("click", () => {
  profileNav.forEach((value) => value.classList.remove("active"));
  daily.classList.add("active");
  updateUI("daily");
});

weekly.addEventListener("click", () => {
  profileNav.forEach((value) => value.classList.remove("active"));
  weekly.classList.add("active");
  updateUI("weekly");
});

monthly.addEventListener("click", () => {
  profileNav.forEach((value) => value.classList.remove("active"));
  monthly.classList.add("active");
  updateUI("monthly");
});


