
//console.log(rentaltypes[5].walkin[1]);

const apiURL="https://jparedestrejo.github.io/data/rental.json";
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    
    const list = data['typesrental'];
    list.forEach(trent => {
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
      let rentimage = document.createElement('picture');
      let descrip = document.createElement('div');
      let boton = document.createElement('div');

      h2.textContent = trent.type;
      p1.textContent = "Max. per: "+trent.maxper;
      p2.textContent = "Reservation Half Day: $"+trent.reservation[0];
      p3.textContent = "Reservation Full Day: $"+trent.reservation[1];
      p4.textContent = "Walk-in Half Day: $"+trent.walkin[0];
      p5.textContent = "Walk-in Full Day: $"+trent.walkin[1];
      p6.textContent = trent.description;
      image.setAttribute('data-src', 'images/rental/'+trent.url);
      image.setAttribute('src', 'images/rental/'+trent.url);
      image.setAttribute('alt', trent.description);
      btn.textContent = "Rent Now!";
      btn.setAttribute("class","rentnow");
      btn.setAttribute("onclick","javascript:location='reservations.html'");

      titulo.appendChild(h2);
      rentinfo.appendChild(p1);
      rentinfo.appendChild(p2);
      rentinfo.appendChild(p3);
      rentinfo.appendChild(p4);
      rentinfo.appendChild(p5);
      rentimage.appendChild(image);
      descrip.appendChild(p6);
      boton.appendChild(btn);

      card.appendChild(titulo);
      card.appendChild(rentinfo);
      card.appendChild(rentimage);
      card.appendChild(descrip);
      card.appendChild(boton);

      document.querySelector('div#rent').appendChild(card);

    });

});


