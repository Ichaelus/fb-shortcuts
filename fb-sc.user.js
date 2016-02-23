// ==UserScript==
// @name        FB key bindings
// @namespace   Ichaelus
// @include     https://www.facebook.com/*
// @version     1
// @grant       none
// ==/UserScript==

document.addEventListener('keydown', function(evt){
    evt = evt || window.event;
    if (evt.ctrlKey && evt.shiftKey && (evt.key == "l" || evt.key == "L")){
      var el = document.querySelector('li._54ni:nth-child(19) > a:nth-child(1)');
      if(el === null || el.offsetParent === null)
       document.getElementById('userNavigationLabel').click();
      setInterval(function(){
        el = document.querySelector('li._54ni:nth-child(19) > a:nth-child(1)');
       if(el.offsetParent !== null)
          el.click();
      }, 100);
    }
});
