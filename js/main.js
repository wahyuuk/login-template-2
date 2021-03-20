const signupButton = document.getElementById("sign-up-btn");
const signinButton = document.getElementById("sign-in-btn");
const wrapper = document.getElementById("_wrapper");

signupButton.addEventListener("click", ()=> {
  wrapper.classList.add("sign-up-mode");
});

signinButton.addEventListener("click", ()=> {
  wrapper.classList.remove("sign-up-mode");
});