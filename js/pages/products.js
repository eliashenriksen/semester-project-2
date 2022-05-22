import { apiLinkMasterKey as apilink } from "../settings/settings.js";
import loaderRemover from "../tools/utilities/loaderRemover.js";
import productDisplay from "../components/productDisplay.js";
import productFilter from "../tools/filter/productFilter.js";
import cartItemNumber from "../tools/utilities/cartItemNumber.js";
import logoutButton from "../tools/login/logoutButton.js";
import messagePopup from "../tools/functionality/messagePopup.js";



async function productsContentCreator() {

  try {
    const call1 = await fetch(apilink + "/products");
    const response1 = await call1.json();

    //console.log(response1);

    productDisplay(response1);
    productFilter(response1);
    logoutButton();
    cartItemNumber();
    loaderRemover();

  } catch(error) {
    console.log(error);
    messagePopup(`${error}`);
  } 

}

productsContentCreator();