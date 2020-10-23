// Iteration 1: Names and Input
const hacker1 ="Rodrigo";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Eduardo";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length<hacker2.length) {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
} else {
  console.log(`Wow you both have equally long names, ${hacker2.length} characters `);
}; 


for (let i=0;i<hacker1.length;i++ ){
  console.log(hacker1[i].toUpperCase()+ ' ');
};


console.log(hacker2.split('').reverse().join(''));

// Iteration 3: Loops

for (let i=0; i<hacker1.length; i++) {
  if (hacker1.slice(i)<hacker2.slice(i)){
    console.log("The driver's name goes first")
    break;
  }else if (hacker2.slice(i)<hacker1.slice(i)){
    console.log("Yo, the navigator goes first indefinetely")
    break;
  }else {
    console.log("What!?  You both have the same name?")
  }
}











