const daynames=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Monday"];
const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function currentHour(){
const todaysdate=new Date();
const dayName= daynames[todaysdate.getDay()];
const monthName= months[todaysdate.getMonth()];
const currentdate=dayName+ ", "+todaysdate.getDate() +" "+ monthName+", "+ todaysdate.getFullYear();
var hour=todaysdate.getHours();
var minutes=todaysdate.getMinutes();
var seconds=todaysdate.getSeconds();
hour = check0(hour);
minutes = check0(minutes);
seconds = check0(seconds);
 currenthour=hour+":"+minutes+":"+seconds;
document.getElementById("currentday").textContent="Last updated: "+currentdate+" - "+currenthour;
t=setTimeout("currentHour()",1000);
}
function check0(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

currentHour();