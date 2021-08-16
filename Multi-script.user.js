// ==UserScript==
// @name Multi-script Para TMO
// @namespace Mother Of Mangas
// @version 0.9
// @description Quiero Ver Mi MANGA!!!!
// @author RhoAias
// @include *
// @grant none
// ==/UserScript==

if (window.top !== window.self)	   // No Corre en 2do plano
	return;

var currentURL = location.href;


// ### cook2love.com/news...

if (currentURL.match("cook2love.com/news")) {
	location.href = location.href.replace("cook2love.com/news", "lectortmo.com/viewer");
};


// ### wtechnews.com/news...

if (currentURL.match("wtechnews.com/news")) {
	location.href = location.href.replace("wtechnews.com/news", "lectortmo.com/viewer");
};


// ### animationforyou.com/news...

if (currentURL.match("animationforyou.com/news")) {
	location.href = location.href.replace("animationforyou.com/news", "lectortmo.com/viewer");
};


// ### animalcanine.com/news...

if (currentURL.match("animalcanine.com/news")) {
	location.href = location.href.replace("animalcanine.com/news", "lectortmo.com/viewer");
};


// ### gamesnk.com/news...

if (currentURL.match("gamesnk.com/news")) {
	location.href = location.href.replace("gamesnk.com/news", "lectortmo.com/viewer");
};


// ### otakuworldgames.com/news...

if (currentURL.match("otakuworldgames.com/news")) {
	location.href = location.href.replace("otakuworldgames.com/news", "lectortmo.com/viewer");
};


// ### enginepassion.com/news...

if (currentURL.match("enginepassion.com/news")) {
	location.href = location.href.replace("enginepassion.com/news", "lectortmo.com/viewer");
};


// ### mangalong.com/news...

if (currentURL.match("mangalong.com/news")) {
	location.href = location.href.replace("mangalong.com/news", "lectortmo.com/viewer");
};



// end of script
