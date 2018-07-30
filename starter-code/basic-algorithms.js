//var hacker1 = prompt("What is the driver's name?");
var hacker1 = "Tom";
console.log("The driver's name is " + hacker1);

//var hacker2 = prompt("What is the navigator's name?");
var hacker2 = "Benjamin";
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters")
} else { 
  console.log("Wow, you both got equally long names, " + hacker1.length + " characters")
}

var driversName = "";

for (var i = 0; i < hacker1.length; i++){
  driversName += hacker1[i].toUpperCase();
  driversName += " ";  
}
console.log(driversName);

var navigatorsName = "";

for (var i = hacker2.length - 1; i >= 0; i--){
  navigatorsName += hacker2[i];
}
console.log(navigatorsName);


if (hacker1 > hacker2){
  console.log("The driver's name goes first");
} else if (hacker1 < hacker2){
  console.log("Yo, the navigator goes firs definitely")
} else {
  console.log("What?! You both got the same name?");
}

var newStr = "race car";
var secondStr = "";
var firstStr = "";

for (var i = newStr.length - 1; i >= 0; i--){
  if (newStr[i] === " " || newStr[i] === ","){
    continue;
  } else { 
  secondStr += newStr[i];
  }
}

for (var i = 0; i < newStr.length; i++){
  if (newStr[i] === " " || newStr[i] === ","){
    continue;
  } else { 
  firstStr += newStr[i];
  }
}

console.log(secondStr);
console.log(firstStr);

if (firstStr === secondStr){
   console.log ("It is a palindrome!");  
} else {
  console.log ("It is not a palindrome!");
}


var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque volutpat urna vitae egestas. Suspendisse blandit egestas felis mollis scelerisque. Nam non mattis turpis, vel accumsan nunc. Proin at sodales erat. Quisque vulputate orci sit amet ante bibendum rutrum. Maecenas eleifend commodo maximus. Donec velit mi, volutpat in lacus ac, sagittis imperdiet risus. Praesent varius posuere quam, eget aliquam est condimentum ac. /n Vivamus lacinia nunc sapien, sed auctor massa egestas quis. Phasellus ut turpis eget tortor faucibus consequat. Aenean consequat vitae arcu vitae sodales. Nam dui sapien, laoreet a porttitor sit amet, mattis a nibh. Nam et sollicitudin felis. Nam ornare dignissim metus, a porta est mollis in. Donec libero mauris, consectetur quis eros aliquet, mollis venenatis dui. Morbi ut egestas neque. Etiam ornare finibus porta. /n Sed varius purus orci, sed euismod elit imperdiet vel. Vivamus consequat ante non turpis molestie, et interdum dui iaculis. Nunc eu feugiat justo. Nullam convallis quam ut nulla vehicula dictum. Etiam gravida odio in elit condimentum ultricies. Suspendisse lacinia fringilla dolor. Vivamus rutrum nibh nec mollis euismod. Morbi vulputate nunc ac lacus pharetra, eget pellentesque ipsum tristique. Sed commodo mattis ex, eu imperdiet massa semper in. Cras gravida, massa at accumsan consectetur, erat mauris dictum sapien, ut vehicula dolor nisl ornare mi. Suspendisse potenti."

console.log(lorem.split(' ').length);