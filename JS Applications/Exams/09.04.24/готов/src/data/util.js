
function getUserData() {
    return JSON.parse(localStorage.getItem("user"));
}

function setUserData(data) {
    localStorage.setItem("user", JSON.stringify(data));
}

function clearUserData() {
    localStorage.removeItem("user")
}

//TODO adapt to exam requirements
function updateNav() {
    const userData = getUserData();

    document.querySelector("nav .user").style.display = userData ? "block" : "none";
    document.querySelector("nav .guest").style.display = userData ? "none" : "block";
}

export {
    getUserData,
    setUserData,
    clearUserData,
    updateNav,
}
