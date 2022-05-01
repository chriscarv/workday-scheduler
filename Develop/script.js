var showDay = document.getElementById("currentDay");
var date;
date = moment().format("MMM Do YY"); 
showDay.textContent = date;
