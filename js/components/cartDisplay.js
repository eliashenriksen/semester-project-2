import cartRemoveFunction from "../tools/functionality/cartRemove.js";

export default function cartProductDisplay() {
  const cartProductHolder = document.querySelector(".cartProductHolder");
  const currentCartProducts = JSON.parse(localStorage.getItem("cartProductList"));
  cartProductHolder.innerHTML = "";

  if (currentCartProducts) {

    for (let i = 0; i < currentCartProducts.length; i++) {

      cartProductHolder.innerHTML += `
      <div class="cartProductBlock">
        <div class="cartProductBlockImageHolder">
          <a href="productspecific.html?product_id=${currentCartProducts[i].id}">
            <img src="${currentCartProducts[i].attributes.image.data.attributes.url}" alt="${currentCartProducts[i].attributes.image.data.attributes.alternativeText}">
          </a>
        </div>
        <div class="cartProductBlockInfo">
          <h2>${currentCartProducts[i].attributes.title}</h2>
          <h3 class="productPrices">USD ${currentCartProducts[i].attributes.price}</h3>
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