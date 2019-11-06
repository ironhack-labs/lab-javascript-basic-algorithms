// Iteration 1: Names and Input
let hacker1 = "Luismi";
console.log("The driver's name is" , hacker1);

let hacker2 = "also Luismi. I don`t have a navigator 😢";
console.log("The navigator's name is" , hacker2);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has" ,hacker1.length ,"characters.")
} else if (hacker1.length < hacker2.length){
  console.log("It seems that the navigator has the longest name, it has", hacker2.length ,"characters.")
} else {
  console.log("Wow, you both have equally long names,", hacker1.length,  "characters!")
}

// Iteration 3: Loops
let driverLetters = "";
for (let i = 0; i < hacker1.length; i++) {
  driverLetters += hacker1[i].toUpperCase() + " ";
}
console.log(driverLetters);

let navLetters = "";
for (let i = hacker2.length -1; i >= 0; i--) {
  navLetters += hacker2[i];
}
console.log(navLetters);

if (hacker1.localeCompare(hacker2) < 0) {  
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor ex in lorem pellentesque, ac consectetur tortor pretium. Sed posuere elit at velit porta, sed scelerisque arcu pellentesque. Proin non dapibus ipsum, vel fringilla mauris. Vestibulum rutrum venenatis erat vitae elementum. Nullam blandit neque ut ultricies pretium. Suspendisse sed orci blandit, aliquet erat eu, fringilla tortor. Etiam ut tortor gravida, interdum erat ac, pharetra eros. In sit amet condimentum magna, et placerat sapien. Nulla sodales laoreet eros, eget cursus nibh fringilla sed. Vestibulum malesuada ut ligula sit amet faucibus. Duis ut odio sed sapien vestibulum auctor. Sed tincidunt eu elit ac eleifend. Integer aliquam arcu et aliquet bibendum. Donec vestibulum lorem in neque consequat, eu ultricies enim posuere. Ut ut orci laoreet, mattis ligula vehicula, tempus metus. Vivamus fermentum, leo efficitur tempor sagittis, justo ante finibus sapien, id mattis sem elit sed lacus. \n Suspendisse potenti. Pellentesque at augue ante. Fusce fermentum viverra est, nec varius quam facilisis at. Curabitur vestibulum nec erat eu feugiat. Cras molestie tortor nulla, et lobortis dui dapibus sed. Nunc finibus tempus lorem, ut dictum nisi tincidunt sed. Sed ac convallis risus, eu sodales urna. Ut sit amet arcu non tortor maximus gravida. Proin fermentum non dui at feugiat. Etiam blandit a est id placerat. Suspendisse viverra facilisis sem, in dictum lectus elementum et. \n Donec posuere dictum sem vitae feugiat. Aliquam at metus nisl. Maecenas auctor, orci ac semper ullamcorper, risus sem aliquam dolor, quis porta mi lectus ut urna. Sed maximus, orci vitae posuere interdum, neque ante convallis sem, non viverra purus nisi non nunc. Maecenas porta imperdiet neque, vitae semper eros vestibulum in. Etiam ullamcorper viverra ipsum ut faucibus. Praesent ante velit, ultrices non ligula et, tincidunt volutpat felis. Praesent consequat lorem vel libero pellentesque pharetra. Curabitur molestie condimentum lorem eu vestibulum. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec pulvinar nibh, quis porta dui. Aliquam vel mi iaculis, vestibulum dui a, iaculis mauris. Pellentesque et mauris dui. Fusce vitae libero sapien."

let words = lorem.split(" ");
console.log(words)
console.log("The number of words in the previous string is" , words.length);

let numberOfEt = [];
