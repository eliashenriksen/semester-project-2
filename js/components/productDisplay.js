import { apiLinkMasterKey as apilink } from "../settings/settings.js";

export default function productDisplay(inputData) {
  const productsHolder = document.querySelector(".productsHolder");
  productsHolder.innerHTML = "";

  for (let i = 0; i < inputData.length; i++) {
    //console.log(inputData[i].title);

    //Checking if the product has an image associated with it in the API, if not it gets a local placeholder image from the images folder.
    if(!inputData[i].image) {
        inputData[i].image = { url: "/images/productplaceholderimage.jpg" };
      } else {
        inputData[i].image.url = `${apilink}${inputData[i].image.url}`;
      }

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