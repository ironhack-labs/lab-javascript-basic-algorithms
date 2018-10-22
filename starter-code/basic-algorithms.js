// Names and Input
let hacker1 = "Oscar";

console.log("The driver's name is " + hacker1);

let hacker2 = prompt("What's the navigator's name?");

console.log("Navigator's name is " + hacker2);
//Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`Driver has the longest name and it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters.`);
} else {
  console.log(`Wow, you both got equally long name, ${hacker1.length} characters`);
}
// Lorem ipsum generator
let array1 = hacker1.toUpperCase().split("").join(" ");
let array2 = hacker2.split("").reverse().join("");
let array3 = [hacker1,hacker2];
array3.sort();
console.log(array3);
if (hacker1===hacker2){
  console.log("What? You both got the same name?")
}
else if (array3[0]===hacker1){
  console.log("The driver's name goes first")
}
else if(array3[0]===hacker2){
console.log("Yo, navigator's name goes first")
}

let palindrome = prompt("Give me a string please");
let check = palindrome.replace(/[\W]/g, "").toLowerCase();
let reverseCheck = check.split("").reverse().join("");
if (check === reverseCheck) {
  console.log("This is a palindrome");
} else {
  console.log("This is not a palindrome");
}

let str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dapibus nisi est, quis imperdiet sapien suscipit quis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam consectetur ipsum viverra molestie convallis. Vivamus finibus lacus vitae nisl accumsan gravida. Donec sed maximus urna. Aliquam aliquam massa felis, vitae auctor libero pellentesque sed. Sed pulvinar ante lectus. Ut ut metus eu justo laoreet laoreet. Etiam fringilla neque in pharetra volutpat. Fusce in consequat quam, at dignissim urna. Donec blandit, metus sed accumsan placerat, nulla nunc tempor sapien, porta lacinia odio ex id eros.

Fusce eu fringilla justo. Suspendisse semper pulvinar pellentesque. Suspendisse vel tortor tristique, convallis nunc in, commodo tortor. Nullam id leo congue orci sollicitudin venenatis eget et lorem. Aliquam ultrices volutpat ex et aliquet. Ut gravida placerat tempus. Praesent sit amet elit et massa semper interdum. Suspendisse pharetra tincidunt mi. Nunc sed enim ac quam porttitor posuere.

Fusce varius leo porttitor, volutpat ex et, varius ligula. Suspendisse vitae imperdiet tellus. Phasellus rutrum tristique neque. Quisque ut mi semper, imperdiet velit ut, semper mauris. Nullam ac ipsum at nisi posuere aliquam. Pellentesque interdum id nunc eu varius. Aenean varius, justo vel sagittis facilisis, diam orci porttitor urna, bibendum dictum elit orci sed ipsum.`;

let words = str.split(" ").length + 2;

console.log(words);

let array4 = str.split(" ");
let etCounter = 0;
for (let i = 0; i < array4.length; i++) {
  if (array4[i] === "et") {
    etCounter++;
  };
};

console.log(etCounter);

