# youtube-to-piped
bookmarklet to switch from a youtube video to piped.kavin.rocks

based off this stackoverflow answer: https://stackoverflow.com/a/2689581

## install
create a new bookmark and change url to the js code

[Drag to bookmarks bar](<javascript:(function(){window.location=window.location.toString().replace(/^https:\/\/www.youtube.com/,'https://piped.kavin.rocks');})()>)

## usage
click on bookmark when on youtube to be redirected to piped.

works with the main homepage, videos, playlists, etc

you can easily change to another instance or mirror by changing `'https://piped.kavin.rocks'` to your chosen url. should work with invidious urls as well

## why i made this?
youtube has not been loading for me properly but this piped url has worked just fine no issues
