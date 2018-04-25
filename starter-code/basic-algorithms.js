// Names and Input
//1
let hacker1 = 'Alex';
//2
console.log("The driver's  name is " + hacker1);
//3
let hacker2 = prompt("What's your name");
//4
console.log("The navigator's name is " + hacker2);
//Conditionals
//5
if (hacker1.length === hacker2.length) {
    console.log('wow, you both got equally long names, ' + hacker1.length + ' characters');
} else if (hacker1.length > hacker2.length) {
    console.log('The Driver has the longest name, it has ' + hacker1.length + ' characters');
} else if (hacker1.length < hacker2.length) {
    console.log('Yo, navigator got the longest name, it has ' + hacker2.length + ' characters');
}
//6
console.log(hacker1.toUpperCase().split("").join(" "))
//7
console.log(hacker2.split("").reverse().join(""))

//8

var n = hacker1.localeCompare(hacker2);

if(n === 0){
    console.log("What?! You both got the same name?");
  }else if(n < 0){
    console.log("The driver's name goes first");
  }else if(n > 0){
    console.log("Yo, the navigator goes first definitely");
  }
  

//9
let palindromeString = prompt("Write to know if it's a palindrome").toLowerCase();

let normalString;

for (let i = 0; i < palindromeString.length; i++) {
    if (palindromeString[i] !== " " && palindromeString[i] !== ",") {
        normalString = normalString + palindromeString[i];
    }
}

let reverseString = normalString.split(" ").reverse().join();

if (reverseString === normalString) {
    console.log("It's a palindrome");
} else {
    console.log("It isn't a palindrome");
}
// Lorem ipsum generator
//10
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin metus est, gravida vel ullamcorper eget, imperdiet sit amet nulla. Nam faucibus, nisi et venenatis interdum, risus sapien viverra lectus, a laoreet lorem dolor consequat purus. Sed tempor sapien ac tellus tincidunt ullamcorper. Aliquam sollicitudin semper dolor eu tristique. Aliquam aliquam, sem ac lacinia volutpat, tellus felis pellentesque mauris, et consectetur nibh purus non nisi. Etiam faucibus tellus at turpis bibendum fermentum. Mauris nibh orci, tempus a massa at, laoreet faucibus justo. Morbi vitae suscipit nunc. Integer lacinia est et metus congue, id tincidunt leo viverra. Mauris volutpat non nisi nec dapibus. Donec lacinia mauris diam, convallis lacinia ipsum vestibulum sed. Phasellus vulputate et diam non ultricies. Duis sit amet ipsum vel lacus pulvinar facilisis eu sit amet lacus. Donec condimentum arcu erat, ut feugiat odio sodales eu. Pellentesque et gravida sem. In hac habitasse platea dictumst. Curabitur aliquam sed erat nec accumsan. Vivamus vestibulum pharetra est. Suspendisse ut lectus turpis. Nam pulvinar eros eu mauris viverra fringilla. Nunc urna risus, posuere id ipsum eget, finibus viverra urna. Cras sagittis est a libero gravida rhoncus. Vestibulum nec elit at enim dignissim vulputate id non augue. Phasellus sed accumsan erat, nec efficitur tellus. Aenean sem nulla, viverra a posuere vitae, tincidunt id est. Phasellus non porta diam, non pellentesque sapien. Fusce at felis eget leo porta semper. Pellentesque sit amet bibendum elit. Vivamus varius aliquam diam, in vestibulum sapien. Nunc convallis egestas erat, ac porttitor ligula molestie id."

let wordCount = 0;

for (let i = 0; i <= text.length; i++) {
    if (text[i] === " ") {
        wordCount++;
    }
    if (i === text.length) {
        wordCount++;
    }
}
console.log("Number of words: " + wordCount);

let wordAux = text.split(" ").filter(item => item === 'et');
console.log("Number of times the latin word et appears: " + wordAux.length)
