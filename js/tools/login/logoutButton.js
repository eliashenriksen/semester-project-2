import { retrieveFromStorage, deleteFromStorage } from "../storage/localStorage.js";

export default function logoutButton() {

  const navLinkLogout = document.querySelector(".navLinkLogout");

  if (retrieveFromStorage("JWT")) {
      console.log(retrieveFromStorage("JWT"));
      navLinkLogout.style.display = "block";
    } else {
      navLinkLogout.style.display = "none";
    }

    navLinkLogout.addEventListener("click", logoutFunction);

    function logoutFunction() {
      deleteFromStorage("JWT");
      navLinkLogout.style.display = "none";
      document.location.href = "index.html";
    }

}