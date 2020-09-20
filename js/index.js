const daynames=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Monday"];
const months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function currentHour(){
const todaysdate=new Date();
const dayName= daynames[todaysdate.getDay()];
const monthName= months[todaysdate.getMonth()];
const currentdate=dayName+ ", "+todaysdate.getDate() +" "+ monthName+", "+ todaysdate.getFullYear();
const hour=todaysdate.getHours();
const minutes=todaysdate.getMinutes();
const seconds=todaysdate.getSeconds();
 if(seconds<10) 
currenthour=hour+":"+minutes+":0"+seconds;
else if(seconds<10) 
currenthour=hour+":"+minutes+":0"+seconds;
else if(minutes<10)
currenthour=hour+":"+minutes+":0"+seconds;
else
 currenthour=hour+":"+minutes+":"+seconds;
document.getElementById("currentday").textContent="Last updated: "+currentdate+" - "+currenthour;
t=setTimeout("currentHour()",1000);
}
currentHour();