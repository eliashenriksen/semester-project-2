
export default function productDisplay(inputData) {
  const productsHolder = document.querySelector(".productsHolder");
  productsHolder.innerHTML = "";

  if (inputData.data) {
      for (let i = 0; i < inputData.data.length; i++) {

          productsHolder.innerHTML += `
          <a href="productspecific.html?product_id=${inputData.data[i].id}">
            <div class="card col-lg-3" style="width: 18rem;">
              <img src="${inputData.data[i].attributes.image.data.attributes.url}" class="card-img-top" alt="${inputData.data[i].attributes.image.data.attributes.alternativeText}">
              <div class="card-body">
                <h5 class="card-title">${inputData.data[i].attributes.title}</h5>
                <p class="card-text">USD ${inputData.data[i].attributes.price}</p>
              </div>
            </div>
          </a>
          `;
        }
      } else {
          for (let i = 0; i < inputData.length; i++) {

            productsHolder.innerHTML += `
            <a href="productspecific.html?product_id=${inputData[i].id}">
              <div class="card col-lg-3" style="width: 18rem;">
                <img src="${inputData[i].attributes.image.data.attributes.url}" class="card-img-top" alt="${inputData[i].attributes.image.data.attributes.alternativeText}">
                <div class="card-body">
                  <h5 class="card-title">${inputData[i].attributes.title}</h5>
                  <p class="card-text">USD ${inputData[i].attributes.price}</p>
                </div>
              </div>
            </a>
            `;
        }
  }

}