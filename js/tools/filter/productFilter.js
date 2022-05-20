import productDisplay from "../../components/productDisplay.js";

export default function productFilter(inputData) {
    const productFilterInput = document.querySelector(".productFilterInput");
    const messageHolderStatic = document.querySelector(".messageHolderStatic");

    productFilterInput.style.display = "flex";

    productFilterInput.onkeyup = function(event) {

        let filterTextInputValue = event.target.value;

        const filteredProducts = inputData.filter(productFilterFunction);

        function productFilterFunction(product) {
            if (product.title.toLowerCase().includes(`${filterTextInputValue.toLowerCase()}`) || product.description.toLowerCase().includes(`${filterTextInputValue.toLowerCase()}`)) {
                return true;
            }
        }

        productDisplay(filteredProducts);

        if (filteredProducts.length === 0 && filterTextInputValue) {
           messageHolderStatic.style.display = "flex";
           messageHolderStatic.innerHTML = `<p>No matching products were found.</p>`;
       } else {
           messageHolderStatic.style.display = "none";
           messageHolderStatic.innerHTML = "";
       }

    }
}