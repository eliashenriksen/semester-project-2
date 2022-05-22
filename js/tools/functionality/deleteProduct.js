import { apiLinkMasterKey as apilink } from "../../settings/settings.js";
import { retrieveFromStorage } from "../storage/localStorage.js";



export default async function(productId) {

  const authenticator = retrieveFromStorage("JWT");

  const apiLinkForDeletion = apilink + `/products/${productId}`;

  const options = {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${authenticator}`,
        },
    };

  try {
    const deleteCall1 = await fetch(apiLinkForDeletion, options)
    const deleteResponse1 = await deleteCall1.json();

    console.log(deleteResponse1);

    if (deleteResponse1.id) {
      document.location.href = "adminhome.html";
    }

  } catch(error) {
    console.log(error);
  }

}