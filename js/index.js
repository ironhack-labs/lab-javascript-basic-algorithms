// Iteration 1: Names and Input

let hacker1 = "Marta";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Albert";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`El mas largo esThe driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else if (hacker1.length = hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }



// Iteration 3: Loops

let newHacker1 = "";

for (let i = 0; i < hacker1.length; i++){
    newHacker1 += hacker1[i].toUpperCase() + " ";
}
console.log(newHacker1);

let reverseHacker2 = "";

for (let k = hacker2.length -1; k >= 0; k-=1){
reverseHacker2 = reverseHacker2 + hacker2[k];
}

console.log(reverseHacker2);

if (hacker1 > hacker2){
  console.log('The driver´s name goes first')
} else if(hacker1 < hacker2){
  console.log('The navigator goes first definitely')
} else{
  console.log('What?! You both got the same name?')
}
