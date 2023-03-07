"use strict";

const $ = (selector) => document.querySelector(selector);

const division = () => {
  let division1 = $("#division_1").value;
  let division2 = $("#division_2").value;

  $("#division_result").value = parseFloat(division1 / division2);
  $("#int_division_result").value = parseInt(division1 / division2);
  $("#floor_division_result").value = Math.floor(division1 / division2);
  $("#ceiling_division_result").value = Math.ceil(division1 / division2);
  $("#rounded_division_result").value = Math.round(division1 / division2);
};

const modulo = () => {
  let modulo1 = $("#modulo_1").value;
  let modulo2 = $("#modulo_2").value;

  $("#modulo_result").value = modulo1 % modulo2;
};

const forloop = () => {
  let counter = parseFloat($("#for_counter").value);
  let incriment = parseFloat($("#for_increment").value);
  let times = $("#for_limit").value;

  for (let i = 0; i < times; i++) {
    if ($("#for_increment_direction").value == "positive") {
      counter = counter + incriment;
    } else {
      counter = counter - incriment;
    }
  }
  $("#for_result").value = counter;
};

//Add all calculation functions
document.addEventListener("DOMContentLoaded", () => {
  $("#division_btn").addEventListener("click", division);
  $("#modulo_btn").addEventListener("click", modulo);
  $("#for_loop_btn").addEventListener("click", forloop);
});
