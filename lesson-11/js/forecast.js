var dayweeknames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const ntown = document.querySelector("#town_box h2").textContent;
if(ntown.includes("Preston"))
  codi="id=5604473";
else if(ntown.includes("Soda"))
  codi="id=5607916";
else
  codi="lat=42.0380399&lon=-111.4048681";

const apiURL="https://api.openweathermap.org/data/2.5/forecast?"+codi+"&units=imperial&appid=07e8cdd414f51e368d4433fb5d72ef74";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    const list = jsObject['list'];
    let des = list[0].weather[0].description;
    let tempmax = list[0].main.temp_max;
    let humi = list[0].main.humidity;
    let winsp = list[0].wind.speed;
    document.getElementById('desc').textContent = des;
    document.getElementById('temp').textContent = tempmax;
    document.getElementById('humid').textContent = humi;
    document.getElementById('speed').textContent = winsp;
    console.log(jsObject);
    const fivedays = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
    console.log(fivedays);
    let day=0;
    fivedays.forEach(element => {
      const d = new Date(element.dt_txt);
      document.getElementById(`dayname${day+1}`).textContent = dayweeknames[d.getDay()];
      const imagesrc = 'https://openweathermap.org/img/w/' + element.weather[0].icon + '.png';
      document.querySelectorAll(".weather-forecast ul li img")[day].src=imagesrc;
      document.querySelectorAll(".weather-forecast ul li p span")[day].textContent=Math.ceil(parseFloat(element.main.temp));
      day++;
    });
  });
