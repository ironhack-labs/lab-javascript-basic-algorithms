// Iteration 1: Names and Input
const hacker1 = "Burcin";
console.log("The driver's name is " + hacker1);
const hacker2 = "Eren";
console.log("The navigator's name is " + hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (hacker1.length < hacker2.length) {
  console.log("The navigator has the longest name, it has " + hacker2.length + " characters.");
} else {
  console.log("Both names have the same length.");
}
// Iteration 3: Loops
let finalHacker = "";
for(let i = 0; i<hacker1.length; i++){
  finalHacker += hacker1[i] .toUpperCase() + " ";
}
console.log(finalHacker);
let reverseNav = '';
for (let i =hacker2.length -1; i >=0; i--) {
    reverseNav += hacker2 [i];
}
console.log(reverseNav);
let strings = [hacker1, hacker2];
strings.sort();
console.log(strings);
if (hacker1 < hacker2) {
    console.log('The drivers name goes first.');
}
else if (hacker1 > hacker2) {
    console.log('nav goes first');
}
let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum dolor erat, at dictum odio aliquet convallis. Curabitur at elit sed urna ornare pharetra. Suspendisse eget malesuada purus. Donec eleifend imperdiet lorem, a euismod nisi tristique ac. Pellentesque eget massa nunc. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent eu dapibus libero. Nunc sollicitudin et dolor eu commodo. In dapibus ex non sapien porta fermentum. Nulla ut nunc ac libero hendrerit scelerisque vel vel velit. Donec pharetra mi malesuada leo facilisis, ac aliquam dolor congue. Vestibulum non nibh dolor. Fusce sit amet diam sagittis, pulvinar sem eget, fringilla augue. Suspendisse laoreet ultricies neque eu viverra. Nam rhoncus, odio vestibulum pulvinar vulputate, dolor justo varius libero, ut hendrerit mauris massa quis arcu. Sed ultrices eu mauris a sodales.'
let wordCount = lorem.split(/\s+/).filter(word => word.length > 0).length;
console.log(wordCount);