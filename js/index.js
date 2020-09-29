// Iteration 1: Names and Input
let hacker1 = "Oscar";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Alex";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if(hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  } else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }

// Iteration 3: Loops
// 3.1
let name = "";
for (let i=0; i<hacker1.length; i++){
  let letter = hacker1[i].toUpperCase();
  if(i===hacker1.length-1){
    name += letter;
  } else {
    name += letter + " ";
  }
}
console.log(name);

// 3.2
let reversedName = "";

for(let i=hacker2.length-1; i>=0; i--){
  reversedName += hacker2[i];
}

console.log(reversedName);

// 3.3 (Using loop instead of direct string comparison to match the exercise instructions)

if (hacker1 === hacker2){
    console.log("What?! You both have the same name?");
} else {
    for(let i=0; i<hacker1.length; i++){
        if(hacker1[i] < hacker2[i]){
          console.log("The driver's name goes first.");
          break;
        } else if (hacker1[i] > hacker2[i]){
          console.log("Yo, the navigator goes first definitely.");
          break;
        }
    }
}

  