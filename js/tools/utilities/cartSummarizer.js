export default function cartSummarizer() {

  const cartProductTotal = document.querySelector(".cartProductTotal");
  const priceSelector = document.querySelectorAll(".productPrices");
  let cartPriceSummary = 0;

  cartProductTotal.innerHTML = "";

  for (let i = 0; i < priceSelector.length; i++) {
    cartPriceSummary += parseFloat(priceSelector[i].innerHTML.replace("USD", ""));
    console.log(cartPriceSummary);
    cartProductTotal.innerHTML = `
      <div>
        <p>Your total: </p>
        <p>${priceSelector.length} item(s)</p>
        <h4>USD ${cartPriceSummary}</h4>
      </div>
    `;
  }

}