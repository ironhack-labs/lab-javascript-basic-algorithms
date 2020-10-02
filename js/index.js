// Iteration 1: Names and Input
let hacker1 = "Pablo";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Monica";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

let driverLength = hacker1.length;
let navigatorLength = hacker2.length;

if(driverLength > navigatorLength){
console.log(`The driver has the longest name, it has ${driverLength} characters.`);
}else if(driverLength < navigatorLength){
console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`);
}else{
console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
}

// Iteration 3: Loops
let capitals ="";
for(let i=0; i<driverLength; i++){
  capitals += hacker1[i].toUpperCase() + " ";
}
console.log(capitals);

let reverse ="";
for(let i=navigatorLength-1; i>=0; i--){
  reverse += hacker2[i];
}
console.log(reverse);

let comparation = hacker1.localeCompare(hacker2);

switch(comparation){
  case -1: 
  console.log("The driver's name goes first.");
  break;
  case 1: 
  console.log("Yo, the navigator goes first definitely.");
  break;
  default: 
  console.log("What?! You both have the same name?"); 
}

// Bonus 1

const lorem =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quam arcu, lacinia at eros quis, sollicitudin maximus magna. Quisque eu elit id dui viverra placerat. Vestibulum sit amet tincidunt libero, eget sagittis eros. Sed et velit ornare, dapibus odio nec, semper metus. Pellentesque a eros nec lorem convallis sollicitudin. Duis neque eros, finibus quis neque nec, sollicitudin euismod turpis. Vestibulum non ornare urna, posuere placerat neque. Nullam tempus est nec imperdiet suscipit.

Praesent aliquam nec risus non maximus. Quisque in fermentum dolor. In eu semper augue. Fusce eget volutpat erat. Donec ullamcorper nunc nec nisl pulvinar bibendum. Cras eu nulla odio. Nam consequat facilisis pulvinar. Nam tincidunt lacus nec risus maximus, vel porta nisi eleifend. Donec vitae quam at eros pharetra pulvinar. Sed sodales malesuada ante sit amet lobortis. Vestibulum feugiat massa eu libero scelerisque volutpat. Vivamus eleifend sodales ipsum id ornare. Sed turpis neque, fringilla sed nisi eget, suscipit tincidunt enim. Integer tellus lacus, ultrices ac fringilla non, condimentum et mi.

Etiam elementum purus at ante fermentum, a ullamcorper turpis iaculis. Duis congue blandit ipsum, sed hendrerit ante dictum a. Vestibulum vel eleifend orci, ut faucibus ligula. Aenean auctor, erat suscipit euismod placerat, risus lorem maximus lorem, ut iaculis dolor quam sit amet felis. Nunc sapien metus, porta facilisis nunc vitae, malesuada lacinia leo. Phasellus et nisi sodales, tincidunt odio hendrerit, tempus metus. Suspendisse pharetra ultricies orci, eget facilisis velit tincidunt quis. Morbi mattis tincidunt suscipit. Pellentesque lorem eros, vulputate eget dolor nec, convallis posuere justo. Integer sed nisl lectus. Sed eleifend tincidunt purus, ut fermentum est pulvinar eu. Duis eget lectus orci. Quisque sed lorem mattis, rhoncus lacus ac, luctus nibh. Donec facilisis hendrerit risus nec dictum. Sed ornare purus vel elit interdum, eu rhoncus metus ultricies. Nam ut odio eleifend, pulvinar dui a, lobortis sapien.`;

const vectorWords = lorem.split(" "); //separamos en un array por los espacios en blanco
console.log(vectorWords.length -1 ); // el número de espacios será la longitud del array -1

//otra alternativa para la búsqueda del et
let count = 0
let position = lorem.indexOf("et")

while (position !== -1) {
  count++
  position = lorem.indexOf("et", position + 1)
}
console.log(count)

