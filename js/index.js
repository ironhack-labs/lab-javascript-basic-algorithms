// Iteration 1: Names and Input

console.log("i am ready");
const hacker1="andreeDocumet";
console.log(`the drivers name is ${hacker1}`);
const hacker2="angelaRueda";

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length ) {
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if ( hacker2.length > hacker1.length) {
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
const hacker1WithSpace = hacker1.toUpperCase().split("").join(" ");
console.log(hacker1WithSpace);

for(let i=hacker2.length -1; i>=0;i--){
  console.log(hacker2.charAt(i));
}
