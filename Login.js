const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

sessionStorage.setItem("AuthenticationState", null);
console.log(sessionStorage.getItem('AuthenticationState'))

loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "test" && password === "test") {
    alert("You have successfully logged in.");
    sessionStorage.setItem("AuthenticationState", "Authenticated");
    console.log(sessionStorage.getItem('AuthenticationState'))
    window.location.replace("welcome.html");
  } else {
    loginErrorMsg.style.opacity = 1;

    sessionStorage.setItem("AuthenticationState", null);
    console.log(sessionStorage.getItem('AuthenticationState'))
  }
})
