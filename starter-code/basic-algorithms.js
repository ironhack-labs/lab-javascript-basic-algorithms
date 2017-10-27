//Names and input;

var hacker1 = "Cristina";

console.log("The driver's name is " + hacker1);

var hacker2 = prompt("What's your name?");

console.log("The navigator's name is " + hacker2);

//Conditionals;

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");

} else if (hacker2.length > hacker1.length) {
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");

} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters!!");
}

//Loops;

hacker1 = hacker1.toUpperCase();

var gapName = [];

gapName = hacker1.split("").join("");

gapNameReversed = hacker1.split("").reverse().join("");

console.log(gapName);

console.log(gapNameReversed);

var isEqual = hacker1.toUpperCase().localeCompare(hacker2.toUpperCase());

switch (isEqual) {
  case 1:
    console.log("What?! You both got the same name?");
    break;
  case 2:
    console.log("The driver's name goes first");
    break;
  case 3:
    console.log("Yo, the navigator goes first definitely");
    break;
}

// BONUS TIME

var palindromeName = prompt("Write a new string to see if it's a palindrome");
var palindromeHacker1 = gapNameReversed.split("");
if (palindromeName == palindromeHacker1) {
  console.log("It IS a palindrome");
} else {
  console.log("Is NOT a palindrome");
}


// BONUS TIME 2

var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec metus dui. Maecenas a mi quis nibh dignissim luctus. Cras facilisis facilisis suscipit. Vestibulum interdum, dolor ut blandit vehicula, turpis sapien elementum ipsum, vitae tincidunt ligula neque in nunc. Aliquam erat volutpat. In eleifend dictum venenatis. Nam sit amet libero malesuada, elementum purus vel, vulputate diam. In in vehicula sapien. Aenean sapien urna, fringilla eu dictum id, rhoncus a urna. Aenean lacus elit, convallis eget fermentum a, congue ut dui. Morbi luctus feugiat purus, eget viverra arcu gravida quis. Quisque dictum vitae arcu sit amet suscipit. Proin congue, sem in tincidunt condimentum, odio purus rhoncus nunc, ac pulvinar nisl leo vitae sem. Nam euismod placerat nisi.Nulla porta augue eget ex aliquet facilisis. Mauris a molestie ante, eu luctus sapien. Nunc nec laoreet odio. Nunc eu efficitur velit, at mattis nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec accumsan tortor et tortor ornare lacinia. Etiam sit amet neque a leo venenatis commodo et id purus. Ut eget mattis augue, et ornare arcu.Proin et ex sit amet risus aliquam interdum. Curabitur rutrum venenatis nunc, vel cursus turpis venenatis nec. Mauris vestibulum lacus turpis, in aliquam dui pulvinar et. Aliquam nunc libero, faucibus ut felis in, varius porttitor odio. Praesent rhoncus erat est, vitae tincidunt dolor tempor quis. Cras volutpat cursus pulvinar. Suspendisse sodales elementum odio, ac elementum est pellentesque in. Duis cursus nulla at quam venenatis, vel finibus tortor cursus.";

console.log("Lorem Ipsum tiene: " + loremIpsum.split(" ").length + " palabras");

// count how many times the latin word "et" appears

console.log("Lorem Ipsum has: " + loremIpsum.match(/et/g).length + "et");
