'use strict';

function blockPressPlus() {
    var popup = document.getElementById('ppUI');
    var overlay = document.getElementById('pressplusOverlay')
    if (popup && overlay) {
    	console.log("blocking PressPlus");
        popup.parentNode.removeChild(popup);
        overlay.parentNode.removeChild(overlay);
        clearInterval(window.blockPPint);
    }
}