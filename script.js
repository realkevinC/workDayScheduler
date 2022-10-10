// Dependencies (DOM)
// Time
var currentDay = moment();
var hourTracker = moment().hour();

// Data
$("#currentDay").text(currentDay.format("LLLL"));


// User interaction
// when user look at the time block the colors show current, past and future time.
function timeBlockHour() {
    $(".form-control").each(function () {
        var time = parseInt($(this).attr("id"));
        console.log(time)
        hourTracker = parseInt(hourTracker);
        
        if (hourTracker > time){
            $(this).addClass("past");
        }
        else if (hourTracker < time){
            $(this).addClass("future");
        }
        else {
            $(this).addClass("present");
        }
    });
}
// when user click the button on the right it will save to local storage.
$("#9").val(JSON.parse(localStorage.getItem("9AM")));
$("#10").val(JSON.parse(localStorage.getItem("10AM")));
$("#11").val(JSON.parse(localStorage.getItem("11AM")));
$("#12").val(JSON.parse(localStorage.getItem("12AM")));
$("#13").val(JSON.parse(localStorage.getItem("1PM")));
$("#14").val(JSON.parse(localStorage.getItem("2PM")));
$("#15").val(JSON.parse(localStorage.getItem("3PM")));
$("#16").val(JSON.parse(localStorage.getItem("4PM")));
$("#17").val(JSON.parse(localStorage.getItem("5PM")));


$(".saveBtn").on("click", function(){
    var userInput = $(this).siblings(".form-control").val().trim();
    console.log(userInput)
    var hours = $(this).siblings(".input-group-prepend").text().trim();
    console.log(hours)
    localStorage.setItem(hours, JSON.stringify(userInput));
});

// Initilization
timeBlockHour()