var showDay = document.getElementById("currentDay");
var date = moment().format("MMM Do YY"); 
//console.log(date)
var currentHour = moment().format("H");
//console.log(currentHour);
showDay.textContent = date;
$(".saveBtn").on("click",function(){
    //console.log("click");
    var task = $(this).siblings(".description").val().trim();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,task);
})

$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));



