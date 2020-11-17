const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(response => response.json())
    .then(data => {
        console.table(data);
        const list = data['prophets'];
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
    });
  


/*
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.log(jsonObject);  // temporary checking for valid response and data parsing
  });
  */