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

    const call1 = await fetch(apilink + "/api/products" + `/${productId}?populate=*`);
    const response0 = await call1.json();

    const response1 = response0.data;

    logoutButton();
    cartItemNumber();
    loaderRemover();

    const title = response1.attributes.title;
    const description = response1.attributes.description;
    const price = response1.attributes.price;
    
    // Checking if the product has an image associated with it in the API, if not it gets a local placeholder image from the images folder.
    //After my free heroku tier ended, i swapped to a Railway deployed Strapi project, and at the same time upgraded to Strapi V4, which resulted in
    //quite a lot of changes to the api endpoints, the super long endpoints under are the result of simply making the project work with the new Railway deployed API,
    //without reworking too much of the original code.
    if(!response1.attributes.image.data.attributes.url) {
        response1.attributes.image.data.attributes.url = "/images/productplaceholderimage.jpg";
      } else {
        response1.attributes.image.data.attributes.url = `${response1.attributes.image.data.attributes.url}`;
      }

    productSpecificH1.innerHTML = `${title}`;
    productSpecificBreadcrumbCurrent.innerHTML = `${title}`;
    productSpecificH2.innerHTML = `${title}`;
    productSpecificDescription.innerHTML = `${description}`;
    productSpecificPrice.innerHTML = `USD ${price}`;
    productSpecificImageHolder.innerHTML = `<img src="${response1.attributes.image.data.attributes.url}" alt="${response1.attributes.image.data.attributes.alternativeText}" class="productSpecificImage">`;


    productSpecificAddToCart.addEventListener("click", addToCartFunction);

    function addToCartFunction() {
      messagePopup("Item added to cart!");
      updatedCartProducts.push(response1);
      localStorage.setItem("cartProductList", JSON.stringify(updatedCartProducts));
      cartItemNumber();
    }

  } catch(error) {
    console.log(error);
    messagePopup(`${error}`);
  } 

}

productSpecificContentCreator();
