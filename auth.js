if (sessionStorage.getItem('AuthenticationState') != "Authenticated") {
  window.open("denied.html", "_self");
}
else {
  //The user is authenticated and the authentication has not expired.
}