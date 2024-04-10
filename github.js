javascript: function() {
  let regex = /\w+/gm;
	let url = window.location.toString();
	let user = (url.match(regex))[1];
	let repo = (url.match(regex))[4];
	window.location = ("https://github.com/".concat(username, "/", repo));
})();
