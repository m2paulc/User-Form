const name = document.getElementById('name');
const zip = document.getElementById('zipcode');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

//Form Event Listeners
name.addEventListener('blur', validateName);
zip.addEventListener('blur', validateZip);
email.addEventListener('blur', validateEmail);
phone.addEventListener('blur', validatePhone);

function validateName() {
  const RegEx = /^[a-zA-Z]{2,8}$/;

  if (!RegEx.test(name.value)) {
    name.classList.add('is-invalid');
  }
  else {
    name.classList.remove('is-invalid');
  }
}

function validateZip() {
  const RegEx = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!RegEx.test(zip.value)) {
    zip.classList.add('is-invalid');
  }
  else {
    zip.classList.remove('is-invalid');
  }
}

function validateEmail() {
  const RegEx = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-z]{2,5})$/;

  if (!RegEx.test(email.value)) {
    email.classList.add('is-invalid');
  }
  else {
    email.classList.remove('is-invalid');
  }
}

function validatePhone() {
  const RegEx = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!RegEx.test(phone.value)) {
    phone.classList.add('is-invalid');
  }
  else {
    phone.classList.remove('is-invalid');
  }
}
