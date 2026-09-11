/* ========================================
   VALIDATION UTILS
   ======================================== */

function isRequired(value) {

    return (
        value !== null &&
        value !== undefined &&
        value.trim() !== ""
    );

}


function isValidEmail(email) {

    const pattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);

}


function isValidPassword(password) {

    return password &&
        password.length >= 8;

}