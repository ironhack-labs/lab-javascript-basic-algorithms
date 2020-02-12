//Iteration 1
let hacker1 = "Luke";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Yoda";
console.log(`The navigator's name is ${hacker2}`);


//Iteration 2
if (hacker1.length > hacker2.length){
  console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`);
}else if(hacker1.length < hacker2.length){
  console.log(`The driver ${hacker2} has the longest name, it has ${hacker2.length} characters.`);
}else{
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters.`);
}


//Iteration 3
let driversNameUpperCase = "";

for (let i = 0; i < hacker1.length; i++){
  driversNameUpperCase += hacker1[i].toUpperCase() + " ";
}
console.log(driversNameUpperCase);

/* Only a test to remember the logic behind
for (let i = 100; i > 0; i--){
  console.log(i);
}
*/

//console.log(hacker2.length);

let navigatorsNameReverse = "";

for (let i = hacker2.length - 1; i >= 0; i--){
  navigatorsNameReverse += hacker2[i];
}
console.log(navigatorsNameReverse);

// Q: if hacker2.length is 4, why does the loop run 5 times and prints out "undefinednhoJ" if i don't write "hacker2.length - 1"? Shouldn't it only run 4 times?



/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

/* --- THIS WORKS, BUT I DIDN'T USE A LOOP
if(hacker1<hacker2){
  console.log("The driver's name goes first.");
}else if (hacker1>hacker2){
  console.log("Yo, the navigator goes first definitely.");
}else{
  console.log("What?! You both have the same name?");
}
*/

/*
let lexicographicOrder ="";

// console.log(hacker1.localeCompare(hacker2));

for (let i = 0; i < 1; i++){
  if(hacker1.localeCompare(hacker2) === -1){
    lexicographicOrder += "The driver's name goes first.";
    break;
  }else if(hacker1.localeCompare(hacker2) === 1){
    lexicographicOrder += "Yo, the navigator goes first definitely.";
    break;
  }else{
    lexicographicOrder += "What?! You both have the same name?";
    break;
  }
}

console.log(lexicographicOrder);
*/

if(hacker1.localeCompare(hacker2) < 0){
    console.log("The driver's name goes first.");
  }else if(hacker1.localeCompare(hacker2) > 0){
    console.log("Yo, the navigator goes first definitely.");
  }else{
    console.log("What?! You both have the same name?");
  }

