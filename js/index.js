const hacker1 = "Gabriela";
const hacker2 = "Pedro";


console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else {
 console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}


let charactersName = hacker1.toUpperCase();
console.log(charactersName);
