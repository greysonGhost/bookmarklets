javascript: (function() {
  let regex = /(?<=\.com\/)\w+/gm;
  let url = window.location.toString();
  let username = url.match(regex);
  let user = username[0];
  window.location = ("https://".concat(user, ".tumblr.com"));
})()
