import { apiLinkMasterKey as apilink } from "../../settings/settings.js";
import { uploadToStorage } from "../storage/localStorage.js";
import messagePopup from "../functionality/messagePopup.js";

export default async function loginHandler(username, password) {

    const apilinkForAuth = apilink + "/api/auth/local";
    const payload = JSON.stringify({identifier: username, password: password});

    const options = {
        method: "POST",
        body: payload,
        headers: {
            "content-type": "application/json",
        },

    };

    try {
        const call = await fetch(apilinkForAuth, options);
        const response = await call.json();

        console.log(response);

        if(!response.user) {
            messagePopup("Invalid username or password.");
        } else {
            uploadToStorage("JWT", response.jwt);
            uploadToStorage("username", response.user.username);
            document.location.href = "adminhome.html";
        }


    } catch (error) {
        console.log(error);
    }

}