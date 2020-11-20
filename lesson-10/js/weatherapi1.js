var daynames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const apiURL="http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=07e8cdd414f51e368d4433fb5d72ef74";
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
      document.getElementById(`dayname${day+1}`).textContent = daynames[d.getDay()];
      const imagesrc = 'https://openweathermap.org/img/w/' + element.weather[0].icon + '.png';
      document.querySelectorAll(".weather-forecast ul li img")[day].src=imagesrc;
      document.querySelectorAll(".weather-forecast ul li p span")[day].textContent=element.main.temp;
      day++
    });
  });
