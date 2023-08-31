'use strict';
// elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const Password2 = document.getElementById('confirm-password');

//show error function
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//show success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
//check email function
function checkEmail(input) {
  var re =
    /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `Email is not valid`);
  }
}

//check required function
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is Required`);
    } else {
      showSuccess(input);
    }
  });
}

//check input length
function checkLength(input, min, mix) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > mix) {
    showError(
      input,
      `${getFieldName(input)} must be less then ${mix} characters`
    );
  } else {
    showSuccess(input);
  }
}

//check password match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, `password do not match`);
  }
}

//get field name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//event listeners
form.addEventListener('submit', function (event) {
  event.preventDefault();

  checkRequired([username, email, password, password2]);

  checkLength(username, 4, 12);
  console.log(username);
  checkLength(password, 6, 15);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
