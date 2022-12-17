import cartProductDisplay from "../../components/cartDisplay.js";
import emptyCartChecker from "../utilities/emptyCartChecker.js";
import messagePopup from "./messagePopup.js";
import cartSummarizer from "../utilities/cartSummarizer.js";
import cartItemNumber from "../utilities/cartItemNumber.js";

export default function cartRemoveFunction(event) {
  const currentCartProducts = JSON.parse(localStorage.getItem("cartProductList"));

  messagePopup("Item removed from cart!");
  console.log("Item removed from cart!");
  console.log(currentCartProducts);

  const selectedCartItemId = event.target.dataset.productId;

  const removeFromCartArray = currentCartProducts.findIndex(function(product) {
      if(parseInt(selectedCartItemId) === parseInt(product.id)) {
        return true;
      }
  });

  currentCartProducts.splice(removeFromCartArray, 1);

  localStorage.setItem("cartProductList", JSON.stringify(currentCartProducts));

  cartProductDisplay();
  emptyCartChecker();
  cartSummarizer();
  cartItemNumber();
}