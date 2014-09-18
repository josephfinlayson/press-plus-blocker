'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

// chrome.tabs.onUpdated.addListener(function (tabId) {
// 	console.log(tabId);
// 	console.log(a);

//     chrome.pageAction.show(tabId);
// });


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) {
    if (changeInfo.status === 'complete') {
        chrome.tabs.executeScript(tabId, {
            code: 'window.blockPPint = setInterval(blockPressPlus, 100)'
        });
    }
});