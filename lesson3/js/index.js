var daynames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Monday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var t;
function currentHour(){
var todaysdate = new Date();
var dayName = daynames[todaysdate.getDay()];
var monthName = months[todaysdate.getMonth()];
var currentdate = dayName+ ", "+todaysdate.getDate() +" "+ monthName+", "+ todaysdate.getFullYear();
var hour = todaysdate.getHours();
var minutes = todaysdate.getMinutes();
var seconds = todaysdate.getSeconds();
hour = check0(hour);
minutes = check0(minutes);
seconds = check0(seconds);
 currenthour=hour+":"+minutes+":"+seconds;
document.getElementById("currentday").textContent="Current Day: "+currentdate+" - "+currenthour;
t=setTimeout("currentHour()",1000);
}
function check0(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
currentHour();