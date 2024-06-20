window.onload = function() {
  const forms = document.forms;
  console.log(forms[0].elements);

  // Initialize CSS operation functions
  operateCSS();

  // Initialize email validation
  emailValidation();
};

function confirmSubmit() {
  // ここに処理を記述
};

function operateCSS() {
  const element = document.getElementsByTagName("h1")[0];
  element.classList.remove("red");
  element.className = "display_none";
}

function emailValidation() {
  const form = document.getElementById('form');
  const emailConfirm = form.email_confirm;

  emailConfirm.addEventListener('input', function() {
    const email = form.email.value;
    const emailConfirmValue = emailConfirm.value;

    // Remove existing error message if any
    const existingError = form.querySelector('.alert');
    if (existingError) {
      existingError.remove();
      emailConfirm.style.backgroundColor = '';
    }

    // Check if emails match
    if (email !== emailConfirmValue) {
      const element = document.createElement('p');
      const message = document.createTextNode("Eメールが一致しません");
      element.appendChild(message);
      element.classList.add("alert");
      emailConfirm.parentElement.appendChild(element); // Append error message below email_confirm field
      emailConfirm.style.backgroundColor = 'rgba(230, 169, 171, 0.5)'; // Apply background color
    }
  });

  form.onsubmit = function(event) {
    const email = form.email.value;
    const emailConfirmValue = emailConfirm.value;

    // Remove existing error message if any
    const existingError = form.querySelector('.alert');
    if (existingError) {
      existingError.remove();
      emailConfirm.style.backgroundColor = '';
    }

    // Check if emails match
    if (email !== emailConfirmValue) {
      event.preventDefault(); // Prevent form submission
      const element = document.createElement('p');
      const message = document.createTextNode("Eメールが一致しません");
      element.appendChild(message);
      element.classList.add("alert");
      emailConfirm.parentElement.appendChild(element); // Append error message below email_confirm field
      emailConfirm.style.backgroundColor = 'rgba(230, 169, 171, 0.5)'; // Apply background color
    }
  };
}
