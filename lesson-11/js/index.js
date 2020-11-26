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

            let townInfo = document.createElement('div');
            let townImage = document.createElement('div');
           
            h2.textContent = town.name;
            h4.textContent = town.motto;
            p1.textContent = "Year Founded: "+town.yearFounded;
            p2.textContent = "Population: "+town.currentPopulation;
            p3.textContent = "Annual Rain Fall: "+town.averageRainfall;
            image.setAttribute('src', 'images/'+town.photo);
            image.setAttribute('alt', town.name);

            townInfo.appendChild(h2);
            townInfo.appendChild(h4);
            townInfo.appendChild(p1);
            townInfo.appendChild(p2);
            townInfo.appendChild(p3);
            townImage.appendChild(image);

            card.appendChild(townInfo);
            card.appendChild(townImage);

            document.querySelector('div.towns').appendChild(card);
            
        });

    });
