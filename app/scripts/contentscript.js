'use strict'

let relative_times
let time_agos
let default_relative_time_arr = []
let default_time_ago_arr = []

window.onload = function(){
    relative_times = document.getElementsByTagName('relative-time')
    time_agos = document.getElementsByTagName('time-ago')
}

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    if (request == "show") {
        showDetailTime();
    } else if (request == "hidden") {
        hideDetailTime();
    }
});

function showDetailTime() {
    for (let relative_time of relative_times) {
        default_relative_time_arr.push(relative_time.textContent)
        let time = relative_time.title
        relative_time.textContent = " " + time
    }
    for (let time_ago of time_agos) {
        default_time_ago_arr.push(time_ago.textContent)
        let time = time_ago.title
        time_ago.textContent = " " + time
    }
}

function hideDetailTime(){
    for(let i = 0; i < default_relative_time_arr.length; i++) {
      relative_times[i].textContent = default_relative_time_arr[i]
    }
    for(let i = 0; i < default_time_ago_arr.length; i++) {
      time_agos[i].textContent = default_time_ago_arr[i]
    }

    default_relative_time_arr = []
    default_time_ago_arr = []
}