var daynames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var t;
function currentHour(){
var todaysdate = new Date();
var dayName = daynames[todaysdate.getDay()-1];
var monthName = months[todaysdate.getMonth()];
var currentdate = dayName+ ", "+todaysdate.getDate() +" "+ monthName+", "+ todaysdate.getFullYear();
var hour = todaysdate.getHours();
var minutes = todaysdate.getMinutes();
var seconds = todaysdate.getSeconds();
hour = check0(hour);
minutes = check0(minutes);
seconds = check0(seconds);
 currenthour=hour+":"+minutes+":"+seconds;
document.getElementById("lastupdated").innerHTML="Last Updated: "+currentdate+" - "+currenthour;

//t=setTimeout("currentHour()",1000);
}
document.getElementById("copyright-year").innerText = new Date().getFullYear();
function check0(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
currentHour();
/*-------------------*/
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(response => response.json())
    .then(data => {
        console.table(data);
        const list = data['towns'];
       const myTowns = list.filter(x=>(x.name=="Fish Haven"||x.name=="Preston"||x.name=="Soda Springs"));
       console.table(myTowns);
        myTowns.forEach(town => {
            console.log(town.name);
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h4 = document.createElement('h4');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let image = document.createElement('img');
           
            h2.textContent = town.name;
            h4.textContent = town.motto;
            p1.textContent = "Year Founded: "+town.yearFounded;
            p2.textContent = "Population: "+town.currentPopulation;
            p3.textContent = "Annual Rain Fall: "+town.averageRainfall;
            image.setAttribute('src', 'images/'+town.photo);
            image.setAttribute('alt', town.name);

            card.appendChild(h2);
            card.appendChild(h4);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);
            card.appendChild(image);
            document.querySelector('div.towns').appendChild(card);
            
        });

    });
  
/*
 for (let i = 0; i < list.length; i++ ) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = list[i].name + ' ' + list[i].lastname;
            p1.textContent = 'Date of Birth: ' + list[i].birthdate;
            p2.textContent = 'Place of Birth: ' + list[i].birthplace;
            image.setAttribute('src', list[i].imageurl);
            image.setAttribute('alt', list[i].name + ' ' + list[i].lastname + " - " + list[i].order);

            card.appendChild(h2);
            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);

        }

*/