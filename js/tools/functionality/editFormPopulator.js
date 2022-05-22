import { apiLinkMasterKey as apilink } from "../../settings/settings.js";

export default async function editFormPopulator() {
  const updateProductFormTitle = document.querySelector("#title");
  const updateProductFormPrice = document.querySelector("#price");
  const updateProductFormDescription = document.querySelector("#description");
  const updateProductFormFeatured = document.querySelector("#featured");

  const queryString = document.location.search;
  const queryParam = new URLSearchParams(queryString);
  const productId = queryParam.get("product_id");

  try {

    const updatePopulatorCall1 = await fetch(apilink + "/products" + `/${productId}`);
    const updatePopulatorResponse1 = await updatePopulatorCall1.json();
    console.log(updatePopulatorResponse1);

    updateProductFormTitle.value = updatePopulatorResponse1.title;
    updateProductFormPrice.value = updatePopulatorResponse1.price;
    updateProductFormDescription.value = updatePopulatorResponse1.description;
    if (updatePopulatorResponse1.featured === true) {
      updateProductFormFeatured.checked = true;
    } else {
      updateProductFormFeatured.checked = false;
    }

  } catch(error) {
    console.log(error);
  }
}