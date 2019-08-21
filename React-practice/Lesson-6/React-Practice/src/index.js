// Pure Function
/* function travel(props) {
   return props.distance - props.speed;
}

let trip = {distance: 20, speed: 10};

trip = {distance: travel(trip), speed: 10}


travel(trip);
console.log(trip);
travel(trip);
console.log(trip);
 */

 // Destructuring
 /* const obj = {
     first: "june",
     last: "shithead"
 };

 const {first: Rick, last: James} = obj;

 console.log(Rick);
 console.log(James); */

 // Spread Operator
 /* const parameters = [2,4,6,8,1,2];

 const MaxWithOutSpread = Math.max (
     parameters[0],
     parameters[1],
     parameters[2],
     parameters[3]
    
 );

 const MaxWithOutSpread = Math.max(parameters[0], parameters[1], parameters[2], parameters[3]); */

 // Filtering

 function isEnough(value) {
    return value >= 10;
  }
  
  const filtered = [12, 5, 8, 130, 44].filter(isEnough);