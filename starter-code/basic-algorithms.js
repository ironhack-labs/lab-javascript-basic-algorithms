// Names and Input
let hacker1 = "Taluama";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Andre";
console.log(`The navigator's name is ${hacker2}.`);
//Conditionals
if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both got equaly long names, ${hacker1.length} characters!!`)
} else if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else {
  console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters!!`)
}
// Lorem ipsum generator
let driver = "";
for (let i = 0; i < hacker1.length; i++) {
  driver += hacker1[i].toUpperCase() + " ";
}
console.log(driver);
let navigator = "";
for (let i = hacker2.length - 1; i > -1; i--) {
  navigator += hacker2[i];
}
console.log(navigator);
if (hacker1 == hacker2) {
  console.log(`What?! You both got the same name?`);
} else if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else {
  console.log(`Yo, the navigator goes first, definitely.`)
}
let palindrome = "";
function isPalindrome(aString) {
  for (let i = aString.length - 1; i > -1; i--) {
  palindrome += aString[i];
}  
  if (aString.replace(/\s/g, '').toLowerCase() === palindrome.replace(/\s/g, '').toLowerCase()) {
    console.log(`It's a palindrome! :D`);
  } else {
    console.log(`It's not a palindrome. :(`);
  }
}
isPalindrome("rAce Car");
let loremIp = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel dictum ex. Sed in iaculis leo. In suscipit, nisl pharetra gravida consequat, turpis ligula porttitor sapien, a congue mi massa id justo. Integer gravida mollis purus, nec accumsan ipsum luctus quis. Morbi augue diam, venenatis sit amet placerat ac, efficitur id dolor. Morbi sodales dui ut lorem commodo cursus in et urna. Nam pretium tellus ultricies, dictum nibh sed, lobortis est. Etiam aliquet dictum libero eget dictum. Morbi rutrum metus orci, vel aliquet urna pellentesque sed. Sed in lorem malesuada, mattis leo id, egestas sem. Suspendisse eu vestibulum risus. Phasellus ac arcu sed purus tincidunt semper eu et ligula. In lobortis, arcu non dignissim porta, augue ligula eleifend lacus, non maximus augue tellus facilisis nisl. 
Pellentesque vestibulum ac nibh non condimentum. Fusce eu quam sed justo viverra vestibulum. Proin nec est lectus. Sed quis volutpat elit. Aenean purus mi, pellentesque ac erat ac, tincidunt mattis ante. Phasellus varius arcu a quam pretium consectetur. Suspendisse id tempor augue. Suspendisse non metus hendrerit, faucibus quam non, dictum lectus. Praesent consectetur urna a dolor dapibus, a egestas nisi posuere. Maecenas pellentesque volutpat nibh vel tempor. 
Vestibulum iaculis interdum turpis nec lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed volutpat ante at metus viverra, non ultrices felis volutpat. Vestibulum bibendum molestie augue non auctor. Vestibulum venenatis felis nisl, id feugiat sem gravida a. Nam at est vitae sem faucibus rhoncus ac et justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse dui augue, volutpat quis libero at, bibendum hendrerit est. Maecenas ultricies rutrum condimentum. Suspendisse hendrerit placerat elit vitae egestas.`
console.log(loremIp.split(' ').length)