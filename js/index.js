// Iteration 1: Names and Input

let hacker1 = "Samantha"
console.log("The driver's name is " + hacker1);

let hacker2= "Christian"
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

  if (hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");

  }else if (hacker2.length > hacker1.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");

  } else{
    hacker1.length = hacker2.length;
      console.log("Wow, you both have equally long names," + hacker1.length + " characters!");
  }
  
  
// Iteration 3: Loops

hacker1.toUpperCase().split("").join(" ");
// Iteration 3
  
let i = hacker1.length;
let reverse = "";

while (i>= 0){
  reverse += hacker1.charAt(i);
  i--;
}
console.log(reverse);

// 3.3
if(hacker1.localeCompare(hacker2)== -1){
  console.log("The driver's name goes first.");
  } else if (hacker1.localeCompare(hacker2)== 1){
    console.log("Yo, the navigator goes first definitely.");
  }else{
    console.log("What?! You both have the same name?");
  }

// Bonus 1

var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quam turpis, suscipit ut tortor sit amet, dignissim pretium eros. Donec gravida tellus nec eros rutrum, sit amet varius justo vestibulum. Maecenas non porttitor lectus. Donec a felis dignissim, mattis urna et, pharetra massa. In vestibulum, lorem at semper convallis, nunc enim consequat neque, eget iaculis enim nisi et felis. Donec dignissim pretium urna, ut vulputate tortor cursus quis. Sed tristique euismod diam ut feugiat."

console.log(str.split(' ').length)

console.log(str.split(' et ').length)


// Bonus 2

let phraseToCheck = "Amor, Roma"
phraseToCheck.split("").reverse().join(" ")