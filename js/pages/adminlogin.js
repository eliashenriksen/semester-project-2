import messagePopup from "../tools/functionality/messagePopup.js";
import loaderRemover from "../tools/utilities/loaderRemover.js";
import cartItemNumber from "../tools/utilities/cartItemNumber.js";
import loginHandler from "../tools/login/loginHandler.js";
import { retrieveFromStorage } from "../tools/storage/localStorage.js";
import logoutButton from "../tools/login/logoutButton.js";

function adminLoginHandler() {

  try {

    const loginFormWhole = document.querySelector(".loginFormWhole");

    if (retrieveFromStorage("JWT")) {
      document.location.href = "adminhome.html";
      loginFormWhole.style.display = "none";
    } else {
      loginFormWhole.style.display = "flex";
    }

    loginFormWhole.onsubmit = function(event) {
      event.preventDefault();

      const inputName = document.querySelector("#username");
      const inputPassword = document.querySelector("#password");

      if (inputName.value.trim() && inputPassword.value.trim()) {
          loginHandler(inputName.value.trim(), inputPassword.value.trim());
      } else {
          messagePopup("Missing a username or password value.");
          console.log("Missing a username or password value.");
      };

    }

    logoutButton();
    cartItemNumber();
    loaderRemover();

  } catch(error) {
    console.log(error);
  }

}

adminLoginHandler();