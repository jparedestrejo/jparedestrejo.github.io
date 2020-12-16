
const rentaltypes=[
  {
      "type":"Honda metro",
      "maxper":"1",
      "reservation":[
          "20","30" 
      ],
      "walkin":[
          "25","35"
      ]
  },
  {
      "type":"Honda dio", 
      "maxper":"2",
      "reservation":[
          "30","40"
      ],
      "walkin":[
          "35","45"
      ]
  },
  {
      "type":"Honda pcx150", "maxper":"2",
      "reservation":[
         "40","50"
      ],
      "walkin":[
          "45","55"
      ]
  },
  {
      "type":"Honda pioner ATV", "maxper":"4",
      "reservation":[
          "50","70"
      ],
      "walkin":[
          "60","80"
      ]
  },
  {
      "type":"Jeep Wrangler - 4 door", "maxper":"5",
      "reservation":[
          "70","100"
      ],
      "walkin":[
          "85","125"
      ]
  },
  {
      "type":"Jeep Wrangler - 2 door", "maxper":"4",
      "reservation":[
          "60","85"
      ],
      "walkin":[
          "70","90"
      ]
  }
]

//console.log(rentaltypes[5].walkin[1]);

const apiURL="https://jparedestrejo.github.io/data/rental.json";
fetch(apiURL)
  .then((response) => response.json())
  
  .then((jsObject) => {
    
    console.log(jsObject)
});

