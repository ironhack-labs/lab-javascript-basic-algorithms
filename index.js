// Iteration 1: Names and Input
var hacker1 = 'Nadine';
console.log(`The driver's name is ${hacker1}`);
var hacker2 = 'Guillermo';
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else {
    if (hacker1.length < hacker2.length){
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }
  }

// Iteration 3: Loops
let hacker1Up = '';
for(i = 0; i < hacker1.length; i++){
  hacker1[i];
  hacker1Up+= hacker1[i].toUpperCase() + ' ';
  console.log(hacker1Up);
}
  
console.log(`${hacker1.toUpperCase().split("").join(" ").replace(/\s+/g, " ")}`);

let alReves = '';
for(i = hacker2.length - 1; i >=0; i--){
  hacker2[i];
  alReves += hacker2[i];
  console.log(alReves);
}
