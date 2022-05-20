import { apiLinkMasterKey as apilink } from "../../settings/settings.js";
import { uploadToStorage } from "../storage/localStorage.js";

export default async function loginHandler(username, password) {

    const apilinkForAuth = apilink + "/auth/local";
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
            messageBox("Invalid username or password.");
        } else {
            uploadToStorage("JWT", response.jwt);
            console.log(response.jwt);
            document.location.href = "adminhome.html";
        }


    } catch (error) {
        console.log(error);
    }

}