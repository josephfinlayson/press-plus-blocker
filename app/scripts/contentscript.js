'use strict';
var counter = 0
function blockPressPlus() {
    counter++
    var popup = document.getElementById('ppUI');
    var overlay = document.getElementById('pressplusOverlay')
    if (popup && overlay) {
    	console.log("blocking PressPlus");
        popup.parentNode.removeChild(popup);
        overlay.parentNode.removeChild(overlay);
    }
    if (counter == 60) {
    	console.log("Probably no PressPlus on this page (waited "+counter/10+" seconds)");
        clearInterval(window.blockPPint);
    }
}