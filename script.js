let showButton = document.querySelector(".show");
let passwordInput = document.querySelector(".password");

showButton.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    // passwordInput.type = "text";
    passwordInput.setAttribute("type" , "text")
    showButton.innerText = "Hide";
  } else {
    // passwordInput.type = "password";
    passwordInput.setAttribute("type" , "password")
    showButton.innerText = "Show";
  }
});
