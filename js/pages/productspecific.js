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
    const response1 = await call1.json();

    logoutButton();
    cartItemNumber();
    loaderRemover();

    
    //Checking if the product has an image associated with it in the API, if not it gets a local placeholder image from the images folder.
    if(!response1.image) {
        response1.image = { url: "/images/productplaceholderimage.jpg" };
      } else {
        response1.image.url = `${response1.image.url}`;
      }

    productSpecificH1.innerHTML = `${response1.title}`;
    productSpecificBreadcrumbCurrent.innerHTML = `${response1.title}`;
    productSpecificH2.innerHTML = `${response1.title}`;
    productSpecificDescription.innerHTML = `${response1.description}`;
    productSpecificPrice.innerHTML = `USD ${response1.price}`;
    productSpecificImageHolder.innerHTML = `<img src="${response1.image.url}" alt="${response1.image.alternativeText}" class="productSpecificImage">`;


    productSpecificAddToCart.addEventListener("click", addToCartFunction);

    function addToCartFunction() {
      messagePopup("Item added to cart!");
      updatedCartProducts.push(response1);
      localStorage.setItem("cartProductList", JSON.stringify(updatedCartProducts));
      console.log(updatedCartProducts);
      cartItemNumber();
    }

  } catch(error) {
    console.log(error);
    messagePopup(`${error}`);
  } 

}

productSpecificContentCreator();
