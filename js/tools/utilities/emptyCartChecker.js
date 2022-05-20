export default function emptyCartChecker() {
  const messageHolderStatic = document.querySelector(".messageHolderStatic");
  const currentCartProducts = JSON.parse(localStorage.getItem("cartProductList"));

  if (!currentCartProducts || currentCartProducts.length === 0) {
      console.log("no cart producz");
      messageHolderStatic.style.display = "flex";
      messageHolderStatic.innerHTML = `<p>Your cart is empty.</p>`;
    }

}