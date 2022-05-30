// Iteration 1: Names and Input
let hacker1 = "Marcello";
console.log("The drivers name is" + " " + hacker1);
let hacker2 = "Zavi";
console.log("The navigators name is" + " " + hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
      console.log(hacker1 + " is longer than " + hacker2 )
} else if (hacker1.length < hacker2.length){
      console.log(hacker2 + " is longer than " + hacker1)
} else {
      console.log("Names have a equal length.")
}
// Iteration 3: Loops
//SEPERATE CHARS FROM HACKER1
const result = hacker1.split('').join(' ').toUpperCase();
console.log(result);

const reverse = hacker1.split('').reverse().join('');
console.log(reverse);


console.log(hacker1.localeCompare(hacker2));
 if (hacker1.localeCompare(hacker2) === -1) {
   console.log("The drivers name goes first")
 } else if (hacker1.localeCompare(hacker2) === 1) {
   console.log("The Navs name goes first")
 } else {
   console.log("Same name")
 }



