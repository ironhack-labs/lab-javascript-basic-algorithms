let hacker1 = "Carol";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Junior";
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2
if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length){
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
} else {
  console.log("Name Error");
}

//iteration 3
let caps = hacker1.toUpperCase();
console.log(caps.split(''));


if(hacker1.sort > hacker2.sort){
  console.log("The driver's name goes first");
} else if (hacker1.sort < hacker2.sort){
  console.log("Yo, the navigator goes first definitely");
} else if (hacker1.length === hacker2.length){
  console.log("What?! You both have the same name?");
} else {
  console.log("Name Error");
}