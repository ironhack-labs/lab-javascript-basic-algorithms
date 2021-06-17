// Iteration 1: Names and Input

//1.1
let hacker1 = "camilo";
//1.2
console.log(`The driver's name is ${hacker1}.`);
//1.3
let hacker2 = "Richard";
//1.4
console.log(`The navigator's name is ${hacker2}.`)


// Iteration 2: Conditionals
//2.1
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, 
it has ${hacker1.length} cahracters.`);
}
else if(hacker2.length > hacker1.length){
  console.log(`It seems that the navigator has 
the longest name, it has ${hacker2.length} characters.`);
}
else{
  console.log(`Wow, you both have equally long names,
${hacker1.length} characters!`)
}


// Iteration 3: Loops
//3.1
let hacker1New = hacker1.split("").join(" ").toUpperCase();

console.log(hacker1New);
//3.2
let hacker2New = hacker2.split("").reverse().join("");

console.log(hacker2New);

//3.3
if(hacker1.charAt(0) < hacker2.charAt(0))
{
console.log(`The driver's name goes first.`)
}
else if(hacker1 === hacker2){
  console.log(`What?! You both have the same name?`)
}
else{
  console.log(`Yo, the navigator goes first definitely.`)
}

