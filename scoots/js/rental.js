
//console.log(rentaltypes[5].walkin[1]);

const apiURL="https://jparedestrejo.github.io/data/rental.json";
fetch(apiURL)
  .then((response) => response.json())
  .then((data) => {
    
    console.table(data)
    const list = data['typesrental'];
    console.table(list);
});


//        myTowns.forEach(town => {