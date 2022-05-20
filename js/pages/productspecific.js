import { apiLinkMasterKey as apilink } from "../settings/settings.js";
import loaderRemover from "../tools/utilities/loaderRemover.js";
import messagePopup from "../tools/functionality/messagePopup.js";
import cartItemNumber from "../tools/utilities/cartItemNumber.js";
import logoutButton from "../tools/login/logoutButton.js";


const currentCartProducts = JSON.parse(localStorage.getItem("cartProductList"));
let updatedCartProducts = [];

if (!currentCartProducts) {
  updatedCartProducts = [];
} else {
  updatedCartProducts = currentCartProducts;
}


async function productSpecificContentCreator() {

  const productSpecificH1 = document.querySelector(".productSpecificH1");
  const productSpecificBreadcrumbCurrent = document.querySelector(".productSpecificBreadcrumbCurrent");
  const productSpecificH2 = document.querySelector(".productSpecificH2");
  const productSpecificDescription = document.querySelector(".productSpecificDescription");
  const productSpecificPrice = document.querySelector(".productSpecificPrice");
  const productSpecificImageHolder = document.querySelector(".productSpecificImageHolder");
  const productSpecificAddToCart = document.querySelector(".productSpecificAddToCart");

  try {

    const productSpecificProductBlock = document.querySelector(".productSpecificProductBlock");
    productSpecificProductBlock.style.display = "flex";

    const queryString = document.location.search;
    const queryParam = new URLSearchParams(queryString);
    const productId = queryParam.get("product_id");

    const call1 = await fetch(apilink + "/products" + `/${productId}`);
    //const call2 = await fetch(apilink + "/products?featured=true");
    const response1 = await call1.json();
    //const response2 = await call2.json();

    logoutButton();
    cartItemNumber();
    loaderRemover();

    console.log(response1);
    
    productSpecificH1.innerHTML = `${response1.title}`;
    productSpecificBreadcrumbCurrent.innerHTML = `${response1.title}`;
    productSpecificH2.innerHTML = `${response1.title}`;
    productSpecificDescription.innerHTML = `${response1.description}`;
    productSpecificPrice.innerHTML = `USD ${response1.price}`;
    productSpecificImageHolder.innerHTML = `<img src="${apilink}${response1.image.url}" alt="${response1.image.alternativeText}" class="productSpecificImage">`;

    console.log(response1);

    productSpecificAddToCart.addEventListener("click", testFunc1);

    function testFunc1() {
      messagePopup("Item added to cart!");
      updatedCartProducts.push(response1);
      localStorage.setItem("cartProductList", JSON.stringify(updatedCartProducts));
      console.log(updatedCartProducts);
      cartItemNumber();
    }

  } catch(error) {
    console.log(error);
    //messageHolder.style.display = "flex";
    //messageHolder.innerHTML = `<p>An error has occured while fetching the book list, please contact support.</p>`;
  } 

}

productSpecificContentCreator();
