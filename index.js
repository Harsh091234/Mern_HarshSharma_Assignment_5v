
const form = document.createElement("form");
form.className = "login-form";


const heading = document.createElement("h2");
heading.textContent = "Login";


const emailLabel = document.createElement("label");
emailLabel.textContent = "Email";

const emailInput = document.createElement("input");
emailInput.type = "email";
emailInput.placeholder = "Enter your email";


const passwordLabel = document.createElement("label");
passwordLabel.textContent = "Password";

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.placeholder = "Enter your password";


const loginButton = document.createElement("button");
loginButton.textContent = "Login";
loginButton.type = "submit";


form.append(
    heading,
    emailLabel,
    emailInput,
    passwordLabel,
    passwordInput,
    loginButton
);

document.body.appendChild(form);


form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    emailInput.classList.remove("error");
    passwordInput.classList.remove("error");

    if (!emailInput.value.trim()) {
        emailInput.classList.add("error");
        isValid = false;
    }

    if (!passwordInput.value.trim()) {
        passwordInput.classList.add("error");
        isValid = false;
    }

    if (!isValid) {
        alert("Please fill in all fields");
        return;
    }

   
    alert(
        `Email: ${emailInput.value}\nPassword: ${passwordInput.value}`
    );
});