"use strict";

const $ = (selector) => document.querySelector(selector);

const postalRegEx =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

const onReset = (evt) => {
  $("#notifications").checked = true;
  $("#eco").checked = true;
  $("#temperature") = 21;
  $("#location").value = "L7W 4T8";
  //TODO:: Reset the reset-able fields
  evt.preventDefault();
};

const onSubmit = (evt) => {
  let notificationsOn = $("#notifications").checked;

  $("#setting_notifications").textContent = notificationsOn ? "On" : "Off"

  let lightingModeOptions = document.querySelectorAll("[name='lighting_mode']")

  for (let i = 0; i < lightingModeOptions.length; i++){
    if(lightingModeOptions[i].checked){
      $("#setting_lighting_mode").textContent = lightingModeOptions[i].value
    }
  }

  //TODO::Reset any errors before submitting

  //TODO:: Set notifications since it doesn't need to be validated

  //TODO:: Set lighting mode with a for loop since it doesn't need to be validated

  //TODO:: Validate the postal code with the Regular Expression,
  let location = $("#location").value

  if(postalRegEx.test(location)){

  }else{
    
  }
  //TODO:: Display an error if not valid

  //TODO:: Validate the temperature by checking the range and if it's a number
  //TODO:: Display an error if not valid

  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  //TODO:: Add current date
  $("#date_display").textContent = new Date().toDateString();
  $("#reset_form").addEventListener("reset",onReset);
  $("#update_settings").addEventListener("click",onSubmit);
  
  //TODO:: Add Reset Form listener
  //TODO:: Add Submit Form listener
});
