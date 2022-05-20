export default function cartItemNumber() {
  const cartItemNumberHolder = document.querySelector(".cartItemNumberHolder");
  const currentCartProducts = JSON.parse(localStorage.getItem("cartProductList"));

  cartItemNumberHolder.innerHTML = "";

  if (!currentCartProducts || currentCartProducts.length === 0 ) {
    cartItemNumberHolder.style.opacity = "0";
    console.log("number of items in cart " + currentCartProducts.length);
  } else {
    cartItemNumberHolder.style.opacity = "1";
    cartItemNumberHolder.innerHTML = `
      <p>${currentCartProducts.length}</p>
    `;
  }
}