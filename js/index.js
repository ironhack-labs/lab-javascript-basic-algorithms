console.log("I'm ready!");

// Iteration 1: Names and Input 
let hacker1 = "Gisela";
console.log("The driver's name is", hacker1);

let hacker2 = "Ryuk";
console.log("The navigator's name is", hacker2);

//Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has", hacker1.length, "characters.");
  } else if (hacker1.length < hacker2.length){
    console.log("It seems that the navigator has the longest name, it has",hacker2.length, "characters.");
  } else if (hacker1.length = hacker2.length){
    console.log("Wow, you both have equally long names", hacker1.length,"characters!")
  }
  
//Iteration 3: Loops
let hackerCap = "";
for (i = 0; i < hacker1.length; i++) {
  hackerCap += hacker1[i].toUpperCase() + " ";
}
console.log(hackerCap);

let hackerRev = "";
for(i = hacker2.length-1; i >= 0 ; i--){
  hackerRev += hacker2[i];
};
console.log(hackerRev)

if (hacker1 < hacker2) {
  console.log("The driver´s name goes first.");
} else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both got the same name?");
}

//Bonus Time!

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris imperdiet consectetur fringilla. In hac habitasse platea dictumst. Vivamus quis leo et augue rutrum mattis sed quis metus. Curabitur pulvinar enim consectetur nulla malesuada, eget placerat dolor mattis. Praesent malesuada ligula massa, non aliquet massa tempus sit amet. Sed elementum dolor et dolor lacinia malesuada. Fusce sed nunc massa. Phasellus feugiat diam nisl, at tempor tortor laoreet ut. Etiam et faucibus est. Sed et arcu vel arcu cursus pretium. Mauris sed laoreet lacus. In hac habitasse platea dictumst. Sed imperdiet, massa nec finibus fringilla, libero ligula ultrices enim, bibendum mattis ex magna eget diam. Fusce auctor odio ut nisi euismod ornare. In eu risus elementum, malesuada leo in, dignissim lacus. Morbi gravida turpis arcu, nec accumsan lorem molestie ac. Aenean id tellus ut purus consequat lacinia at ac ante. Phasellus nisl lectus, pellentesque at lacus sed, scelerisque aliquam nisi. Quisque eleifend felis a ligula finibus efficitur. Sed aliquam pretium risus, in venenatis ligula viverra cursus. Proin rhoncus sollicitudin lectus, non congue velit. Mauris quis dictum libero, quis tincidunt leo. Etiam euismod, elit ac euismod tempor, felis tortor tincidunt risus, vel elementum ligula nulla non ligula. Donec et felis ultrices, finibus mauris et, consectetur lectus. Nullam libero velit, elementum vel erat eu, laoreet luctus ligula. Maecenas tempor lacus felis, sit amet rhoncus felis hendrerit nec. Pellentesque justo lacus, gravida quis consequat aliquam, ornare eu massa. Integer eleifend eleifend justo, vitae tempus mi posuere eget. Donec vulputate magna a faucibus rhoncus. Sed non ante scelerisque, sodales quam et, lacinia neque. Aenean mollis sem vitae massa tempus feugiat."
let wordsNumber = lorem.split(" ");
console.log(wordsNumber.length);
//Make your program count the number of times the Latin word et appears.
counter = 0;
for (let n = 0; n < wordsNumber.length; n++) {
  if (wordsNumber[n] === 'et') {
    counter++;
  }
}
console.log(counter);

