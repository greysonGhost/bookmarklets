javascript: (function() {
  let url = window.location.toString();
  let archive = "https://sci-hub.se/";
  window.location = archive.concat(url); 
})()
