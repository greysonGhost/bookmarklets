javascript: (function() {
    let url = window.location.toString();
    let archive = "https://web.archive.org/";
    window.location = archive.concat(url);
})()
