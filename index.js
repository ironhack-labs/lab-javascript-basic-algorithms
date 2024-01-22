// Iteration 1: Names and Input

let hacker1 = "viswanath";
console.log(`The driver's name is ${hacker1}`);
let hacker2= "sowjanya";
console.log( `The navigator's name is ${hacker2}`);



// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } 
  else if(hacker1.length<hacker2.length)
  {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  }
  else
  {
    console.log( `Wow, you both have equally long names, ${hacker1.length} characters!`);
  }


// Iteration 3: Loops

let nameUpper = "";
for (let i = 0; i < hacker1.length; i++) {
  let comp = hacker1[i + 1]
  nameUpper += hacker1[i].toUpperCase();  {
        if (comp === undefined) {
      break;
    }
    nameUpper += " ";

    }
}
console.log(nameUpper);

//3.2
let nameReverse = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  nameReverse += hacker1[i];
}
console.log(nameReverse);

// //3.3
let naviLexi = "";

for (let i = 0; i < hacker2.length; i++) {
  let count1 = hacker1[i];
  console.log(hacker1[i])
  let count2 = hacker2[i];
   console.log(hacker2[i])
  if (count1 < count2) {
    naviLexi = "The driver's name goes first.";
  } else if (count1 > count2) {
    naviLexi = "Yo, the navigator goes first definitely.";
  } else if (count1 === count2) {
    naviLexi = "What?! You both have the same name?";
  }
}
console.log(naviLexi);

