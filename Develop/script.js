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