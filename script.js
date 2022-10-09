// Dependencies (DOM)
// Time
var currentDay = moment();
var hourTracker = moment().hour();


// Data
$("#currentDay").text(currentDay.format("LLLL"));



// User interaction
// when user look at the time block the colors show current, past and future time.
// function timeBlockHour(){
//     $(".form-control").each(function () {
        
//     }
// }
// when user click the button on the right it will save to local storage.
$(".saveBtn").on("click", function(){
    var userInput = $(this).siblings(".form-control").val();
    var hours = $(this).siblings(".input-group-prepend").text();
    localStorage.setItem(hours, JSON.stringify(userInput));
});

// Initilization