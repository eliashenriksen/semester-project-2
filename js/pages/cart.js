import loaderRemover from "../tools/utilities/loaderRemover.js";
import cartProductDisplay from "../components/cartDisplay.js";
import emptyCartChecker from "../tools/utilities/emptyCartChecker.js";
import cartSummarizer from "../tools/utilities/cartSummarizer.js";
import cartItemNumber from "../tools/utilities/cartItemNumber.js";
import logoutButton from "../tools/login/logoutButton.js";



function cartHandler() {
  try {

    cartProductDisplay();
    emptyCartChecker();
    cartSummarizer();
    logoutButton();
    cartItemNumber();
    loaderRemover();

  } catch(error) {
    console.log(error);
    //messageHolder.style.display = "flex";
    //messageHolder.innerHTML = `<p>An error has occured while fetching the book list, please contact support.</p>`;
  }


}

cartHandler();