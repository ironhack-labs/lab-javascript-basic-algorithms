// Names and Input
var hacker1 = "Monroe";
var hacker2 = "Guillermo";
console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

if (hacker1.length > hacker2.length) {
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker2.length > hacker1.length) { 
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("wow, you both got equally long names, " + hacker1.length + " characters");
}

var str = "";
for (var i = 0; i < hacker1.length; i++) {
  str += hacker1[i].toUpperCase() + " ";
}
console.log(str);

var str2 = "";
for (var i = (hacker2.length - 1); i >= 0; i--) {
  str2 += hacker2[i];
}
console.log(str2);
//Conditionals
var palindrome = prompt('Insert string:').toLowerCase();
//console.log(palindrome);
var palindrome2 = "";
for (var i = 0; i < palindrome.length; i++) {
  if (palindrome[i] !== " ") {
    palindrome2 += palindrome[i];
    console.log(palindrome[i]);
  } else {
    //console.log("do nothing");
  }
}
var palindrome3 = ""
for (var i = (palindrome2.length - 1); i >=0; i--) {
  palindrome3 += palindrome2[i];
}
console.log(palindrome3);
if (palindrome2 === palindrome3) {
  console.log("It's a palindrome!!!");
} else {
  console.log("It's not a palindrome :( ");
}
// Lorem ipsum generator
var ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel molestie mi, in sagittis nisi. Suspendisse viverra, eros vitae efficitur molestie, tortor diam viverra augue, id faucibus augue diam vitae libero. Aliquam erat volutpat. Aliquam at pharetra nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum, eros at ornare ornare, velit nibh blandit libero, eu molestie mauris turpis sit amet dolor. Curabitur tempor nisl mauris, ac finibus quam interdum id. In vitae leo nisl. Donec lectus mauris, bibendum nec lectus quis, sodales sollicitudin mi. Vestibulum nec interdum dui. Aliquam eu velit est. Sed finibus purus a nisl maximus gravida. Curabitur felis lorem, interdum vel orci ut, pharetra finibus enim. Ut volutpat urna nec nulla tempus, non varius felis interdum. Ut placerat nulla sed mauris hendrerit, vel iaculis sem sodales. Nunc ullamcorper et magna vitae tincidunt. Nulla quis mauris turpis. Integer in lorem rutrum, consectetur ligula vel, maximus odio. Etiam porta lectus velit. Suspendisse vestibulum fermentum luctus. Curabitur vel nulla condimentum, condimentum felis sit amet, congue metus. Suspendisse quis ultrices mauris. Nunc accumsan, elit tempus accumsan lobortis, risus lacus hendrerit odio, a laoreet elit nunc sed elit. Nullam lacinia condimentum neque. Nunc sed urna nec orci rutrum facilisis. Phasellus urna dui, congue et nunc et, blandit placerat libero. Curabitur congue nisi sed enim pulvinar, eu posuere sapien fringilla. Maecenas id gravida tortor. Maecenas ante nibh, imperdiet sit amet sapien at, mattis lobortis arcu. Integer orci dolor, tincidunt at erat vel, venenatis tempor mauris. Fusce pulvinar in neque vitae porttitor. Donec laoreet efficitur hendrerit. Nam fermentum accumsan sem, sit amet cursus lacus vulputate vitae. Donec eu leo nibh. Fusce eget viverra ligula, eu interdum massa. Vivamus congue justo sit amet dui porttitor viverra.";
//
//console.log(ipsum);
var wordcount = 0;
for (var i = 0; i < ipsum.length; i++) {
  if (ipsum[i] == " ") {
    wordcount++;
  }
}
wordcount++
console.log("The number of words is " + wordcount);
//
var etcounter = 0;
for (var i = 0; i < ipsum.length; i++) {
  if (ipsum[i] == "t" && ipsum[i - 1] == "e" && ipsum[i - 2] == " ") {
    if (ipsum[i + 1] == " " || ipsum[i + 1] == "." || ipsum[i + 1] == ",") {
      etcounter++;
    }
  }
}
console.log("The number of times the word et appears is: " + etcounter);