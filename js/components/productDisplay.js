import { apiLinkMasterKey as apilink } from "../settings/settings.js";

export default function productDisplay(inputData) {
  const productsHolder = document.querySelector(".productsHolder");
  productsHolder.innerHTML = "";

  for (let i = 0; i < inputData.length; i++) {

    productsHolder.innerHTML += `
    <a href="productspecific.html?product_id=${inputData[i].id}">
      <div class="card col-lg-3" style="width: 18rem;">
        <img src="${inputData[i].image.url}" class="card-img-top" alt="${inputData[i].image.alternativeText}">
        <div class="card-body">
          <h5 class="card-title">${inputData[i].title}</h5>
          <p class="card-text">USD ${inputData[i].price}</p>
        </div>
      </div>
    </a>
    `;
  }
}