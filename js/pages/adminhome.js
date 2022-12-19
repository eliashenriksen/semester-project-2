import { apiLinkMasterKey as apilink } from "../settings/settings.js";
import logoutButton from "../tools/login/logoutButton.js";
import loaderRemover from "../tools/utilities/loaderRemover.js";
import cartItemNumber from "../tools/utilities/cartItemNumber.js";
import { retrieveFromStorage } from "../tools/storage/localStorage.js";


//Checking if there is an authentication token in the local storage, if not get send to the homepage so no unwarranted access is allowed.
if (!retrieveFromStorage("JWT")) {
      document.location.href = "index.html";
    } 

async function adminHomeContentCreator() {
  const adminHomeProductsHolder = document.querySelector(".adminHomeProductsHolder");
  const adminHomeH1 = document.querySelector(".adminHomeH1");

  try {
    const call1 = await fetch(apilink + "/api/products?populate=*");
    const response0 = await call1.json();
    const response1 = response0.data;

    console.log(response1);

    adminHomeH1.innerHTML = `Welcome back ${retrieveFromStorage("username")}!`;
    adminHomeProductsHolder.innerHTML = "";

    for (let i = 0; i < response1.length; i++) {
      console.log(response1[i]);

      //Checking if the product has an image associated with it in the API, if not it gets a local placeholder image from the images folder.
      if(!response1[i].attributes.image.data.attributes.url) {
        response1[i].attributes.image.data.attributes.url = "/images/productplaceholderimage.jpg";
      } else {
        response1[i].attributes.image.data.attributes.url = `${response1[i].attributes.image.data.attributes.url}`;
      }

      adminHomeProductsHolder.innerHTML += `
        <div class="card adminHomeProductCard" style="width: 18rem;">
          <a href="productspecific.html?product_id=${response1[i].id}">
            <img src="${response1[i].attributes.image.data.attributes.url}" class="card-img-top" alt="${response1[i].attributes.image.data.attributes.alternativeText}">
          </a>
          <div class="card-body">
            <h5 class="card-title">${response1[i].attributes.title}</h5>
            <p class="card-text">${response1[i].attributes.description}</p>
          </div>
          <div class="adminHomeProductCardInfoHolder">
            <div class="adminHomeProductCardInfoLeft">
              <p>ID</p>
              <p>Price</p>
              <p>Featured</p>
              <p>Created</p>
              <p>Published</p>
              <p>Updated</p>
            </div>
            <div class="adminHomeProductCardInfoRight">
              <p>${response1[i].id}</p>
              <p>USD ${response1[i].attributes.price}</p>
              <p>${response1[i].attributes.featured}</p>
              <p>${moment(response1[i].attributes.createdAt).format("DD MM YYYY")}</p>
              <p>${moment(response1[i].attributes.publishedAt).format("DD MM YYYY")}</p>
              <p>${moment(response1[i].attributes.updatedAt).format("DD MM YYYY")}</p>
            </div>
          </div>
          <div class="card-body adminHomeProductCardBottom">
            <a href="admineditproduct.html?product_id=${response1[i].id}" class="card-link ctaButtons">Edit product</a>
          </div>
        </div>
      `;
    }

    cartItemNumber();
    logoutButton();
    loaderRemover();

  } catch(error) {
    console.log(error);
  }


}

adminHomeContentCreator();
