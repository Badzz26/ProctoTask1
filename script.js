const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener("submit", function (event) {
  let valid = true;

  // Name validation (not empty)
  if (nameInput.value.trim() === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (simple format check)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation (at least 8 characters, including a special character)
  const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d)[a-zA-Z0-9!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(passwordInput.value)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters with a special character and a number";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  if (!valid) {
    event.preventDefault(); // Prevent form submission if validation fails
  }
});
