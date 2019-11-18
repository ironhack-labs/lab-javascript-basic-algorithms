// Iteration 1: Names and Input
const hacker1 = "Karin";
console.log(`"The driver´s name is ${hacker1}"`);
const hacker2 = "Dirk";
console.log(`"The navigator´s name is ${hacker2}"`);


// Iteration 2: Conditionals
let lenHacker1= hacker1.length;
let lenHacker2= hacker2.length;

if(lenHacker1>lenHacker2){
  console.log(`The driver has the longest name, it has ${lenHacker1} characters.`);
}else if(lenHacker1<lenHacker2){
  console.log(`It seems that the navigator has the longest name, it has ${lenHacker2} characters.`);
}else{
  console.log(`Wow, you both have equally long names, ${lenHacker2} characters!`);
}
// Iteration 3: Loops