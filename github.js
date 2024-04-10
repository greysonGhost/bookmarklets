javascript: (function() {
	let regexUser = /(?<=https:\/\/)(.*)(?=\.github)/;
	let regexRepo = /(?<=github.io\/).*/;
	let url = window.location.toString();
	let user = (url.match(regexUser))[0];
	let repo = (url.match(regexRepo))[0];
	window.location = ("https://github.com/".concat(user, "/", repo));
})();
