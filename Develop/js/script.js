
// Global Variables 



// current time in the Jumbotron
setInterval (function() {
    document.getElementById('currentDay').innerHTML =  moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000);
  

// textarea elements 
var time9am = $('#9AM');
var time10am = $('#10AM');
var time11am = $('#11AM');
var time12pm = $('#12PM');
var time1pm = $('#1PM');
var time2pm = $('#2PM');
var time3pm = $('#3PM');
var time4pm = $('#4PM');
var time5pm = $('#5PM');

// text area elements in array 
var timeArray = [
    time9am,
    time10am,
    time11am,
    time12pm,
    time1pm,
    time2pm,
    time3pm,
    time4pm,
    time5pm
];

// check localStorage, get from localStorage
function loadScheduler() {
    for (let el of timeArray) {
        el.val(JSON.parse(localStorage.getItem(el.data("hour"))));

    }
};

// save buttons




// update textarea based off the past, present, future

