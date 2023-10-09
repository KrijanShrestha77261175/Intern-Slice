export const logoutFunction=()=> {
    localStorage.removeItem("AccessToken");
    window.location.reload();

}