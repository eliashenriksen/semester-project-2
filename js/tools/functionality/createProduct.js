import { retrieveFromStorage } from "../storage/localStorage.js";
import messagePopup from "./messagePopup.js";

export default async function adminCreateNewProduct() {
  const newProductForm = document.querySelector(".newProductFormWhole");

  try {
    const authenticator = retrieveFromStorage("JWT");
    const action = newProductForm.action;
    const method = newProductForm.method;
    const enctype = newProductForm.method;

    const originalFormData = new FormData(newProductForm);
    const body = new FormData();

    for (const [key, value] of originalFormData.entries()) {
      if (key.includes("files.")) {
        body.append(key, value);
        originalFormData.delete(key);

      }
    }

    const data = Object.fromEntries(originalFormData.entries());
    body.append("data", JSON.stringify(data));
    const headers = { "Authorization": authenticator ? `Bearer ${authenticator}` : undefined };

    const uploadCall1 = await fetch(action, {method, enctype, body, headers});
    const uploadResponse1 = await uploadCall1.json();
    
    console.log(uploadResponse1);

    if (uploadResponse1.price) {
      messagePopup(`New product, ${uploadResponse1.title} with a price of USD ${uploadResponse1.price} added succesfully!`);
      setTimeout(() => {
        document.location.href = `admineditproduct.html?product_id=${uploadResponse1.id}`;
      }, 1000);
    }

  } catch(error) {
    console.log(error);
    messagePopup(`${error}`);
  }
}