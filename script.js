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
        var time = parseInt($(this).attr("value"));
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

$(".saveBtn").on("click", function(){
    var userInput = $(this).siblings(".form-control").val();
    console.log(userInput)
    var hours = $(this).siblings(".input-group-prepend").text();
    console.log(hours)
    localStorage.setItem(hours, JSON.stringify(userInput));
});

// Initilization
timeBlockHour()