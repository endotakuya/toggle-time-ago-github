// Enable chromereload by uncommenting this line:
// import 'chromereload/devonly';

// chrome.runtime.onInstalled.addListener(function (details) {
//   console.log('previousVersion', details.previousVersion)
// })

// console.log('\'Allo \'Allo! Event Page')

let flag = true
chrome.browserAction.onClicked.addListener(function(tab) {
	let action_case = flag ? "show" : "hidden"
    chrome.tabs.sendMessage(tab.id, action_case)
	flag = !flag
});
