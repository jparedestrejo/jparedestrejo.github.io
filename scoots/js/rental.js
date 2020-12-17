
//console.log(rentaltypes[5].walkin[1]);

const apiURL="https://jparedestrejo.github.io/data/rental.json";
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    
    const list = data['typesrental'];
    list.forEach(town => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h4 = document.createElement('h4');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let p4 = document.createElement('p');
      let p5 = document.createElement('p');
      let image = document.createElement('img');

      let townInfo = document.createElement('div');
      let townImage = document.createElement('div');
     
      h2.textContent = town.type;
      h4.textContent = town.description;
      p1.textContent = "Max. per: "+town.maxper;
      p2.textContent = "Reservation Half Day: "+town.reservation[0];
      p3.textContent = "Reservation Full Day: "+town.reservation[1];
      p4.textContent = "Walk-in Half Day: "+town.walkin[0];
      p5.textContent = "Walk-in Full Day: "+town.walkin[1];
      image.setAttribute('src', 'images/rental/'+town.url);
      image.setAttribute('alt', town.description);

      townInfo.appendChild(h2);
      townInfo.appendChild(h4);
      townInfo.appendChild(p1);
      townInfo.appendChild(p2);
      townInfo.appendChild(p3);
      townInfo.appendChild(p4);
      townInfo.appendChild(p5);
      townImage.appendChild(image);

      card.appendChild(townInfo);
      card.appendChild(townImage);

      document.querySelector('div#rent').appendChild(card);

    });
});
