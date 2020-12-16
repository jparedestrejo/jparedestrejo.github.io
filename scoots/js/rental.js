
const apiURL="https://jparedestrejo.github.io/scoots/data/rental.json";
fetch(apiURL)
  .then((response) => response.json())
  
  .then((jsObject) => {
    
    console.log(jsObject)
});

