import { apiLinkMasterKey as apilink } from "../settings/settings.js";
import cartRemoveFunction from "../tools/functionality/cartRemove.js";

export default function cartProductDisplay() {
  const cartProductHolder = document.querySelector(".cartProductHolder");
  const currentCartProducts = JSON.parse(localStorage.getItem("cartProductList"));
  cartProductHolder.innerHTML = "";

  if (currentCartProducts) {

    for (let i = 0; i < currentCartProducts.length; i++) {

      // Checking if the product has a placeholder image or a real image, if its a real image it needs the api link infront of it cause its not in the local folder.
      if(currentCartProducts[i].image.url !== "/images/productplaceholderimage.jpg") {
        currentCartProducts[i].image.url = `${apilink}${currentCartProducts[i].image.url}`;
      }

      cartProductHolder.innerHTML += `
      <div class="cartProductBlock">
        <div class="cartProductBlockImageHolder">
          <a href="productspecific.html?product_id=${currentCartProducts[i].id}">
            <img src="${currentCartProducts[i].image.url}" alt="${currentCartProducts[i].image.alternativeText}">
          </a>
        </div>
        <div class="cartProductBlockInfo">
          <h2>${currentCartProducts[i].title}</h2>
          <h3 class="productPrices">USD ${currentCartProducts[i].price}</h3>
        </div>
        <div class="cartProductBlockRemoveHolder">
          <a data-product-id="${currentCartProducts[i].id}" class="cartProductBlockRemove">Remove item</a>
        </div>
      </div>
      `;
    }

    const cartRemoveButtons = document.querySelectorAll(".cartProductBlockRemove");

    for (let i = 0; i < cartRemoveButtons.length; i++) {
      cartRemoveButtons[i].addEventListener("click", cartRemoveFunction);
    }

  }

};