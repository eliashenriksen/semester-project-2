import editFormPopulator from "../tools/functionality/editFormPopulator.js";
import adminUpdateProduct from "../tools/functionality/updateProduct.js";
import logoutButton from "../tools/login/logoutButton.js";
import loaderRemover from "../tools/utilities/loaderRemover.js";
import cartItemNumber from "../tools/utilities/cartItemNumber.js";
import deleteProduct from "../tools/functionality/deleteProduct.js";
import { retrieveFromStorage } from "../tools/storage/localStorage.js";
import messagePopup from "../tools/functionality/messagePopup.js";

if (!retrieveFromStorage("JWT")) {
      document.location.href = "index.html";
    } 

  function adminEditProductHandler() {
    const updateProductForm = document.querySelector(".updateProductFormWhole");
    const productDeleteButton = document.querySelector("#productDeleteButton");
    const updateProductFormTitle = document.querySelector("#title");
    const updateProductFormPrice = document.querySelector("#price");
    const updateProductFormDescription = document.querySelector("#description");
    const queryString = document.location.search;
    const queryParam = new URLSearchParams(queryString);
    const productId = queryParam.get("product_id");


    try {
      updateProductForm.addEventListener("submit", submitForm);
      productDeleteButton.addEventListener("click", deleteProductHandler);

      editFormPopulator();
      logoutButton();
      cartItemNumber();
      loaderRemover();
      
      function submitForm(event) {
        event.preventDefault();
        if (updateProductFormTitle.value && updateProductFormPrice.value && updateProductFormDescription.value) {
          adminUpdateProduct();
        } else {
          messagePopup("Missing a value.");
        }
      }

      function deleteProductHandler() {
        deleteProduct(productId);
      }
    } catch(error) {
      console.log(error);
      messagePopup(`${error}`);
    }

  }

  adminEditProductHandler();
