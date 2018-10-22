// Names and Input
var driver = "John";
console.log("The driver's name is ",driver);
let navigator = prompt("What's the navigator's name?");
console.log("The navigator's name is ",navigator);
//Conditionals
if (driver.length > navigator.length){
  console.log("The Driver has the longest name, it has",driver.length,"characters");
}
else if (driver.length < navigator.length){
  console.log("Yo, navigator got the longest name, it has",navigator.length,"characters");
}
else {
  console.log("wow, you both got equally long names,",driver.length,"characters!!");
}
//Loops
var driverOrder = "";
var navigatorOrder = "";
for (var i = 0; i <= (driver.length-1); i++){
  driverOrder += driver[i] + " ";
}
console.log(driverOrder.toUpperCase());

for (var j = (navigator.length-1); j >= 0; j--){
  navigatorOrder += navigator[j];
}
console.log(navigatorOrder);

//Dictionary Order
var dict = {
  "a":1,
  "b":2,
  "c":3,
  "d":4,
  "e":5,
  "f":6,
  "g":7,
  "h":8,
  "i":9,
  "j":10,
  "k":11,
  "l":12,
  "m":13,
  "n":14,
  "o":15,
  "p":16,
  "q":17,
  "r":18,
  "s":19,
  "t":20,
  "u":21,
  "v":22,
  "w":23,
  "x":24,
  "y":25,
  "z":26
};
debugger;
var checker = 0;
if (driver.length === navigator.length){
  for (var i = 0; i <= (driver.length-1); i++){
    if(driver[i] === navigator[i]){
      checker += 1;
    }
    else{
      checker = checker;
    }
  }
  if(checker === driver.length){
    console.log("What?! You both got the same name?");
  }
  else if(dict[driver[checker].toLowerCase()] < dict[navigator[checker].toLowerCase()]){
    console.log("The driver's name goes first");
  }
  else {
    console.log("Yo, the navigator goes first definitely");
  }
}
else if (driver.length < navigator.length){
  for (var i = 0; i <= (driver.length-1); i++){
    if(dict[driver[i].toLowerCase()] < dict[navigator[i].toLowerCase()]){
      i = (driver.length -1);
      console.log("The driver's name goes first");
    }
    else {
      console.log("Yo, the navigator goes first definitely");
    }
  }
}
// Lorem ipsum generator
