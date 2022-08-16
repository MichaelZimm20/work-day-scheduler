
// current time in the Jumbotron
setInterval(function () {
    document.getElementById('currentDay').innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000);




// save buttons and save to localStorage 
$('.saveBtn').on('click', function () {
    var saveClick = $(this).siblings('.description').val();
    var time = $(this).parent().attr("id");

    // set item to localStorage
    localStorage.setItem(time, saveClick);

    // timeout interval to show saved message notification
    $(".notification").addClass("show");
    setTimeout(function () {
        $(".notification").removeClass("show");
    }, 2000);

});



// update textarea based off the past, present, future
function backgroundUpdate() {
    var currentHour = moment().hours();

    // looop through each time block and color highlight specific time block
    $(".time-block").each(function () {
        var hourBlock = parseInt($(this).attr("id").split("-")[1]);

        if (hourBlock < currentHour) {
            $(this).addClass("past");
        } else if (hourBlock === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
}
//call backgroundUpdate function
backgroundUpdate();


// Interval to check for every 15 secs for new messages to scheduler
var interval = setInterval(backgroundUpdate, 15000);

// get items from localStorage
function retrieveItems() {
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-18"));

}


// call getitems function
retrieveItems();




// clear my schedule button
$('#clear-schedule').on('click', function () {
    localStorage.clear();
    retrieveItems();
});






