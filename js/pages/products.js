import { apiLinkMasterKey as apilink } from "../settings/settings.js";
import loaderRemover from "../tools/utilities/loaderRemover.js";
import productDisplay from "../components/productDisplay.js";
import productFilter from "../tools/filter/productFilter.js";
import cartItemNumber from "../tools/utilities/cartItemNumber.js";
import logoutButton from "../tools/login/logoutButton.js";
//import bookDisplay from "/js/components/bookDisplay.js";
//import bookFilter from "../tools/filter/bookFilter.js";

export let bookList = "";

async function productsContentCreator() {
  //const messageHolder = document.querySelector(".messageHolder");

  try {
    const call1 = await fetch(apilink + "/products");
    //const call2 = await fetch(apilink + "/products");
    const response1 = await call1.json();
    //const response2 = await call2.json();

    console.log(response1);
    //console.log(response2);

    productDisplay(response1);
    productFilter(response1);
    logoutButton();
    cartItemNumber();
    loaderRemover();

    bookList = response1;

  } catch(error) {
    console.log(error);
    //messageHolder.style.display = "flex";
    //messageHolder.innerHTML = `<p>An error has occured while fetching the book list, please contact support.</p>`;
  } 

}

productsContentCreator();