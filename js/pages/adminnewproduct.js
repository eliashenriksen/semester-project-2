import adminCreateNewProduct from "../tools/functionality/createProduct.js";
import logoutButton from "../tools/login/logoutButton.js";
import loaderRemover from "../tools/utilities/loaderRemover.js";
import cartItemNumber from "../tools/utilities/cartItemNumber.js";
import { retrieveFromStorage } from "../tools/storage/localStorage.js";
import messagePopup from "../tools/functionality/messagePopup.js";

if (!retrieveFromStorage("JWT")) {
      document.location.href = "index.html";
    } 

async function adminNewProductHandler() {
  const newProductForm = document.querySelector(".newProductFormWhole");
  const newProductFormTitle = document.querySelector("#title");
  const newProductFormPrice = document.querySelector("#price");
  const newProductFormDescription = document.querySelector("#description");

  newProductForm.addEventListener("submit", submitForm);

  function submitForm(event) {
    event.preventDefault();

    if (newProductFormTitle.value && newProductFormPrice.value && newProductFormDescription.value) {
      adminCreateNewProduct();
    } else {
      messagePopup("Please fill out all the information.");
    }

  }

  logoutButton();
  cartItemNumber();
  loaderRemover();
}

adminNewProductHandler();

////////////////////////////////////////////////////////////////////////
