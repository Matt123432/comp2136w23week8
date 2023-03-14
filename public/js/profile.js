"use strict";

const $ = (selector) => document.querySelector(selector);

const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;

const resetFields = () =>{
  $("#first_name").value = "";
  $("#last_name").value = "";
};

const resetErrors = () =>{

  $("#email").value = "";
  $("#name_error").value = "";
  $("#password_error").value = "";
  $("#email_error").value = "";
};

const onReset = (evt) => {
  resetErrors();
  resetFields();
  //TODO:: Reset the reset-able fields
};

const onSubmit = (evt) => {
  resetErrors();

  //TODO:: Use this boolean to keep track of any errors because you need to prevent the settings
  //       from updating if even one field is wrong
  let formErrors = false;

  //TODO:: Make sure name fields are not empty

  //TODO:: Validate email with the Regular Expression

  //TODO:: Validate password with the Regular Expression
  //TODO:: Validate passwords to be matching

  //TODO:: Make sure date of birth is in the past.

  //TODO:: check you formErrors boolean and update the fields if still false
  let firstName = $("#first_name").value;
  let lastName = $("#last_name").value;
  let email = $("#email").value;
  let password = $("#password").value;
  let confirmPassword = $("#confirm_password").value;
  let dob = new Date($("#dob").value);
  let today = new Date();


  


  if(firstName == "" || lastName == ""){
    formErrors = true;
    $("#name_error").textcontent = "name fields can't be empty"
  };

  if(!emailRegEx.test(email)){
    formErrors = true;
    $("#email_error").textcontent = "email is not valid"
  };


  if(today.setHours(0, 0, 0, 0) < dob){
    formErrors = true;
    $("#dob_error").textcontent = ""
  };




 
  if(!formErrors){
    $("#user_dob").textcontent = dob.toDateString();

    $("#user_password_last_changed").textcontent = today.toDateString();

    $("#user_first_name").textcontent = $("#first_name");
    $("#user_last_name").textcontent = $("#last_name");
    $("#user_email").textcontent = $("#email");

  };

  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#update_profile").addEventListener("click", onSubmit);

  $("#reset_form").addEventListener("click", onReset);
});
