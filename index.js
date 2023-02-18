//Interaction 1

let hacker1= 'Pepe';
console.log(`The driver's name is ${hacker1}`);

let hacker2= 'Dani';
console.log(`The navigator's. name is ${hacker2}`);

//Interaction 2

if (hacker1.lenght > hacker2.lenght) {console.log(`The driver has the longeest name, it has ${hacker1.length} characters`)}

else if (hacker2.length > hacker1.length) {console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)}

else {console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)}

//Interaction3
let printHacker1 = ''

for (let i=0; i<hacker1.length; i++) {
  printHacker1 += `${hacker1[i].toUpperCase()} `
} 
console.log(printHacker1)
