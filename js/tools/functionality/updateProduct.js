import { retrieveFromStorage } from "../storage/localStorage.js";
import messagePopup from "./messagePopup.js";

export default async function adminUpdateProduct() {
    const updateProductForm = document.querySelector(".updateProductFormWhole");
    const fileSelector = document.querySelector("#image");
    const action = updateProductForm.action;
    const enctype = updateProductForm.method;

    const queryString = document.location.search;
    const queryParam = new URLSearchParams(queryString);
    const productId = queryParam.get("product_id");

    const firstFormData = new FormData(updateProductForm);
    const body = new FormData();

    if (fileSelector.files.length !== 0) {
      for (const [key, value] of firstFormData.entries()) {
        if (key.includes("files.")) {
          body.append(key, value);
          firstFormData.delete(key);
        }
      }
    }

    const data = Object.fromEntries(firstFormData.entries());
    body.append("data", JSON.stringify(data));
    const authenticator = retrieveFromStorage("JWT");
    const headers = { "Authorization": authenticator ? `Bearer ${authenticator}` : undefined };

    try {
      const updateCall1 = await fetch(action + "/" + productId, {
        method: "put",
        enctype,
        body,
        headers
      });
      messagePopup("Product updated!");
    } catch(error) {
      console.log(error);
    }
  }