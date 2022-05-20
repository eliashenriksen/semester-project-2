export default function cartItemNumber() {
  const cartItemNumberHolder = document.querySelector(".cartItemNumberHolder");
  const currentCartProducts = JSON.parse(localStorage.getItem("cartProductList"));

  if (currentCartProducts.length === 0 || !currentCartProducts) {
    cartItemNumberHolder.style.opacity = "0";
  } else {
    cartItemNumberHolder.style.opacity = "1";
  }

  cartItemNumberHolder.innerHTML = "";
  cartItemNumberHolder.innerHTML = `
    <p>${currentCartProducts.length}</p>
  `;
  console.log(currentCartProducts.length);
}