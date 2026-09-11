/* ========================================
   STORAGE UTILS
   ======================================== */

function setStorage(key, value) {

    localStorage.setItem(
        key,
        JSON.stringify(value)
    );

}


function getStorage(key) {

    const value =
        localStorage.getItem(key);

    return value
        ? JSON.parse(value)
        : null;

}


function removeStorage(key) {

    localStorage.removeItem(key);

}


function clearStorage() {

    localStorage.clear();

}