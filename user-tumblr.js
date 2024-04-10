javascript: (function() {
  let regex = /(?<=\.com\/)\w+/gm;
  let url = window.location.toString();
  let username = (url.match(regex))[0];
  window.location = ("https://".concat(username, ".tumblr.com"));
})()
