import { apiLinkMasterKey as apilink } from "../settings/settings.js";
import loaderRemover from "../tools/utilities/loaderRemover.js";
import cartItemNumber from "../tools/utilities/cartItemNumber.js";
import logoutButton from "../tools/login/logoutButton.js";
//import bookDisplay from "/js/components/bookDisplay.js";
//import bookFilter from "../tools/filter/bookFilter.js";

export let bookList = "";

async function homeContentCreator() {
  //const messageHolder = document.querySelector(".messageHolder");
  const heroBannerHolder = document.querySelector(".heroBannerHolder");
  const carouselItemHolder = document.querySelector(".carousel-inner");

  try {
    const call1 = await fetch(apilink + "/home");
    const call2 = await fetch(apilink + "/products?featured=true");
    const response1 = await call1.json();
    const response2 = await call2.json();

    console.log(response1);
    console.log(response2);

    heroBannerHolder.innerHTML = `
    <img src="${apilink}${response1.hero_banner.url}" alt="${response1.hero_banner.alternativeText}">
    <h1>Your one stop shop for trendy sneakers!</h1>
    `;

    for (let i = 0; i < response2.length; i++) {
      console.log(response2[i].title);

      carouselItemHolder.innerHTML += `
      <div class="carousel-item">
          <a href="productspecific.html?product_id=${response2[i].id}">
            <img class="d-block w-100" src="${apilink}${response2[i].image.url}" alt="test">
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
    //bookList = response1;

    //bookDisplay(response);
    //bookFilter(response);

  } catch(error) {
    console.log(error);
    //messageHolder.style.display = "flex";
    //messageHolder.innerHTML = `<p>An error has occured while fetching the book list, please contact support.</p>`;
  } 

}

homeContentCreator();