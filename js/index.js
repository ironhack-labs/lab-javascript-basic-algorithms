// Iteration 1: Names and Input
////////////////////////////////

var hacker1 = "Steve";
var hacker2 = "Frederick";

console.log(`The drivers name is ${hacker1}`);
console.log(`The navigators name is ${hacker2}`);

// Iteration 2: Conditionals
/////////////////////////////

if (hacker1.length > hacker2.length) {
  console.log(
    `the driver has the longest name it has ${hacker1.length} charachters`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `the navigator has the longest name it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} charachters`
  );
}

// Iteration 3: Loops
//////////////////////

//3.1 Print all the characters of the driver's name,
//separated by a space and in capitals i.e. "J O H N"

var tempName = "";
for (i = 0; i < hacker1.length; i++) {
  tempname += hacker1[i].toUpperCase() + " ";
}
console.log(tempName);

//3.2 Print all the characters of the navigator's name,
//in reverse order. i.e. "nhoJ"

var tempName2 = "";
for (i = hacker2.length - 1; i >= 0; i--) {
  tempname2 += hacker2[i];
}

console.log(tempName2);

//3.3 Depending on the lexicographic order of the strings, print:

if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first definitely.");
} else console.log("What?! You both have the same name?");

//BONUS TIME!!//
////////////////////////////////////
//BONUS 1
///////////////////////////////////

//sorry couldnt figure this one out without splitting
//it into an array first

var string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue imperdiet risus id bibendum. Ut vehicula turpis eleifend, euismod nisl sed, facilisis libero. Pellentesque dignissim ante dui, at vestibulum sem viverra nec. In varius eros quis velit vehicula, vitae fringilla felis pellentesque. Etiam ultrices tortor ex, sed molestie mauris congue vel. Aenean cursus aliquam sem eget tempus. Etiam dignissim blandit elit, id dignissim sem suscipit eget. Sed non aliquam ligula, lacinia lobortis odio. Ut nec nulla ac orci iaculis suscipit. Nunc ultrices, mi maximus pharetra laoreet, tellus libero suscipit purus, sit amet placerat nibh enim sit amet orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id nulla tempor, tempus eros in, condimentum metus. Sed varius orci ac dolor aliquet rutrum.

Integer laoreet id mi nec sodales. Mauris pharetra ultrices erat vel sagittis. Donec dolor neque, porttitor ac efficitur eget, maximus iaculis tellus. Nunc tristique sem libero, eu fermentum magna bibendum at. Etiam eu semper velit. Vestibulum vehicula tortor eu ipsum malesuada consectetur. Nullam mollis suscipit urna et pharetra. Maecenas placerat at ante vel commodo. Nulla vel mi condimentum, imperdiet tellus eu, convallis justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas dui tellus, ornare vehicula aliquet eu, vulputate sit amet risus. Aliquam velit felis, volutpat at neque quis, ullamcorper vehicula mauris. Curabitur faucibus tristique volutpat. Ut quis eleifend orci, vitae ultricies mi. In varius tincidunt magna in vestibulum. Nulla facilisi.

Quisque non est pharetra, venenatis enim a, egestas augue. Sed pellentesque, orci non vestibulum tincidunt, ligula magna vulputate ante, convallis mollis nisl ex nec mauris. Maecenas scelerisque orci aliquet enim congue auctor. Aenean suscipit nunc id tempus condimentum. Fusce metus neque, molestie eget convallis at, cursus id odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla lacinia metus mi, non mattis justo ultrices nec. Vivamus blandit odio sed nibh pharetra ultricies. Nulla facilisi. Maecenas id vestibulum ex. Ut mi sapien, molestie vitae est in, pulvinar finibus eros. Curabitur laoreet nisi mollis tristique posuere. Aenean a augue vitae risus interdum molestie. Vestibulum ullamcorper ac sapien venenatis rhoncus. Quisque mi nulla, feugiat at eros sit amet, elementum feugiat augue. Proin purus risus, sollicitudin sed euismod varius, finibus ut ante.`;

var word = "et";
var count = 0;
var array = string.split(" ");

for (i = 0; i < array.length; i++) {
  if (array[i] === word) {
    count++;
  }
}

console.log(arr.length); //counts the words in the string
console.log(count); //counts the number of times "et" appears

/////////////////
//BONUS2
////////////////////////

//working solution on single words (without using any
//fancy array methods)
//but doesnt work on multiple word strings. because I
//Dont know how to remove the spaces.

var word2 = "racecar";

for (i = 0; i < word2.length; i++) {
  if (word2[i] === word2[word2.length - 1 - i]) {
    console.log("yep, its a palindrome");
    break;
  } else console.log("nope, no palindrome");
  break;
}

///complete working solition using (some) array methods

let word3 = "race car";
let checkMe = word3.toLowerCase().split(" ").join("");

//and then the same loop as before

for (i = 0; i < checkMe.length; i++) {
  if (checkMe[i] === checkMe[checkMe.length - 1 - i]) {
    console.log("yep, its a palindrome");
    break;
  } else console.log("nope, no palindrome");
  break;
}

/////////////////////////////////////////
