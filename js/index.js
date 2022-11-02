//Iteration One
let hacker1 = "Jake";
let hacker2 = "Vincent";
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

//Iteration Two
if( hacker1.length >  hacker2.length) {
  console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters.`)
}
if(hacker2.length >  hacker1.length) {
 console.log(`It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
} else {
 console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

//Iteration Three
let hacker1Space = " ";

for(let x = 0; x < hacker1.length; x++) {
  if(x === hacker1.length) {
    hacker1Space += hacker1[x];
  } else {
    hacker1Space += hacker1[x] + " ";
  }
}
console.log(hacker1Space.toUpperCase());

let hacker2reverse = " ";

for(let x = hacker2.length - 1; x >= 0; x--) {
  hacker2reverse += hacker2[x];
}
console.log(hacker2reverse);
