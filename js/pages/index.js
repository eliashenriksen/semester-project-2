import { apiLinkMasterKey as apilink } from "../settings/settings.js";
import loaderRemover from "../tools/utilities/loaderRemover.js";
import cartItemNumber from "../tools/utilities/cartItemNumber.js";
import logoutButton from "../tools/login/logoutButton.js";
import messagePopup from "../tools/functionality/messagePopup.js";

async function homeContentCreator() {
  const heroBannerHolder = document.querySelector(".heroBannerHolder");
  const carouselItemHolder = document.querySelector(".carousel-inner");

  try {
    const call1 = await fetch(apilink + "/home");
    const call2 = await fetch(apilink + "/products?featured=true");
    const response1 = await call1.json();
    const response2 = await call2.json();

    //console.log(response1);
    //console.log(response2);

    heroBannerHolder.innerHTML = `
    <img src="${response1.hero_banner.url}" alt="${response1.hero_banner.alternativeText}">
    <h1>Your one stop shop for trendy sneakers!</h1>
    `;

    for (let i = 0; i < response2.length; i++) {
      console.log(response2[i].title);

      carouselItemHolder.innerHTML += `
      <div class="carousel-item">
          <a href="productspecific.html?product_id=${response2[i].id}">
            <img class="d-block w-100" src="${response2[i].image.url}" alt="test">
            <div class="carousel-caption d-none d-md-block">
              <h5>${response2[i].title}</h5>
              <p>${response2[i].description}</p>
            </div>
          </a>
        </div>
      `;
    }

    carouselItemHolder.firstElementChild.classList.add("active");

    logoutButton();
    cartItemNumber();
    loaderRemover();

  } catch(error) {
    console.log(error);
    messagePopup(`${error}`);
  } 

}

homeContentCreator();