
//console.log(rentaltypes[5].walkin[1]);

const apiURL="https://jparedestrejo.github.io/data/rental.json";
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    
    const list = data['typesrental'];
    list.forEach(town => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let p4 = document.createElement('p');
      let p5 = document.createElement('p');
      let image = document.createElement('img');
      let p6 = document.createElement('p6');
      let btn = document.createElement('button');
      
      let titulo = document.createElement('div');
      let rentinfo = document.createElement('div');
      let rentimage = document.createElement('div');
      let boton = document.createElement('div');

      h2.textContent = town.type;
      p1.textContent = "Max. per: "+town.maxper;
      p2.textContent = "Reservation Half Day: "+town.reservation[0];
      p3.textContent = "Reservation Full Day: "+town.reservation[1];
      p4.textContent = "Walk-in Half Day: "+town.walkin[0];
      p5.textContent = "Walk-in Full Day: "+town.walkin[1];
      p6.textContent = town.description;
      image.setAttribute('src', 'images/rental/'+town.url);
      image.setAttribute('alt', town.description);
      btn.textContent = "Rent Now!";

      titulo.appendChild(h2);
      rentinfo.appendChild(p1);
      rentinfo.appendChild(p2);
      rentinfo.appendChild(p3);
      rentinfo.appendChild(p4);
      rentinfo.appendChild(p5);
      rentimage.appendChild(image);
      rentimage.appendChild(btn);
      boton.appendChild(btn);

      card.appendChild(titulo);
      card.appendChild(rentinfo);
      card.appendChild(rentimage);
      card.appendChild(boton);

      document.querySelector('div#rent').appendChild(card);

    });
    
});
