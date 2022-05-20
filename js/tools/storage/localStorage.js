export function uploadToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export function retrieveFromStorage(key) {
    const storageItemRetrieved = localStorage.getItem(key);
    return JSON.parse(storageItemRetrieved);
}

export function deleteFromStorage(key) {
    localStorage.removeItem(key);
}