// ==UserScript==
// @name Multi-script Para TMO
// @namespace Mother Of Mangas
// @version 3.11
// @description Quiero Ver Mi MANGA!!!!
// @homepageURL      https://greasyfork.org/es/scripts/430361-multi-script-para-tmo
// @icon         https://zonatmo.com/favicon/android-chrome-192x192.png
// @author IRhoAias
// @connect        *
// @grant          GM.getResourceUrl
// @grant          GM_xmlhttpRequest
// @grant          GM_getResourceURL
// @license Copyright IRhoAias
// @match *://*lectortmo.com/*
// @match *://*visortmo.com/*
// @match *://*zonatmo.com/*
// @exclude *://*lectortmo.com/view_uploads/*
// @exclude *://*visortmo.com/view_uploads/*
// @exclude *://*zonatmo.com/view_uploads/*

// @match *://*/*

// @downloadURL https://update.greasyfork.org/scripts/430361/Multi-script%20Para%20TMO.user.js
// @updateURL https://update.greasyfork.org/scripts/430361/Multi-script%20Para%20TMO.meta.js
// ==/UserScript==

//PAGE

(function() {
    'use strict';

    var Regex12 = /\/[0-9a-zA-Z]{12}\//
    var Regex32 = /\/[0-9a-zA-Z]{13,32}\//
    var News = /\/news\//;
    var Juegos = /\/juegos\//;

    function extractUrl() {
        return window.location.href;
    }
    function extractPathname() {
        return window.location.pathname;
    }
    function isTMO() {
        const url = extractUrl();
        return url.includes('zonatmo.com');
    }
    function TMOUploads() {
        const url = extractUrl();
        return url.includes('zonatmo.com/view_uploads');
    }

    function CallBack() {
        const pathname = extractPathname();
        if (Regex12.test(pathname) && (News.test(pathname)) && !isTMO() && !TMOUploads()) {
            window.history.back();
            setTimeout(function() {
                console.log('Backeo Completo.');
            }, 500);
        }
    }

    function redirectTMO() {
        const pathname = extractPathname();
        if (Regex32.test(pathname) && (News.test(pathname)) && !isTMO()) {
            location.href = location.href.replace(`${location.host}/news/${location.pathname.split("/")[2]}/cascade`, `zonatmo.com/viewer/${location.pathname.split("/")[2]}/cascade`);
            setTimeout(function() {
                console.log('Redireccion Completada.');
            }, 500);
        }
    }

    function GamePath() {
        const pathname = extractPathname();
        if (Regex32.test(pathname) && (Juegos.test(pathname)) && !isTMO()) {
            location.href = location.href.replace("juegostmo.com/juegos/", "zonatmo.com/viewer/");
            setTimeout(function() {
                console.log('Redireccion Completada.');
            }, 500);
        }
    }
    function CascadeR() {
    if ((location.href).includes("cascade1")) {
    location.href = location.href.replace(
        /cascade1*/, "cascade"
      );
  }
}
    function executeFunctions() {
        redirectTMO();
        setTimeout(CascadeR, 500);
        setTimeout(GamePath, 500);
        setTimeout(CallBack, 1500);
    }

//    executeFunctions();
	redirectTMO();
	GamePath();
	CascadeR();
	CallBack();
})();

//✙[̲̅S][̲̅c][̲̅r][̲̅i][̲̅p][̲̅t]✙
//▢▇▇▇▇▇▇▇▇▇▇▇▇▇▇▢
//        　   　╭━╮╭━╮   ╭╮ ╱
//      　     　╰━┫╰━┫   ╰╯╱╭╮
//          　 　╰━╯╰━╯　  ╱ ╰╯
//　　　         COMPLETE



  document.addEventListener('keydown', logKey);
  function logKey(e) {
    if(e.code == "ArrowRight"){
        location = document.querySelector(".chapter-next").querySelector("a").href;
    }
    if(e.code == "ArrowLeft"){
        location = document.querySelector(".chapter-prev").querySelector("a").href;
    }
  }
