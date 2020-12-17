
//console.log(rentaltypes[5].walkin[1]);

const apiURL="https://jparedestrejo.github.io/data/rental.json";
fetch(apiURL)
  .then((response) => response.json())
  
  .then((jsObject) => {
    
    console.log(jsObject)
    console.log()
});

