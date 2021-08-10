// Iteration 1: Names and Input
let hacker1 = "Lucas";
let hacker2 = "John";

console.log(`The driver's name is ${hacker1}.`);
console.log(`The navigator's name is ${hacker2}.`);

// Iteration 2: Conditionals
let strLength1 = hacker1.length;
let strLength2 = hacker2.length;
let strDriver = "";
let strNav = "";

if (strLength1 > strLength2) {
  console.log(`The driver has the longest name, it has ${strLength1} characters.`);
}

else if (strLength1 < strLength2) {
  console.log(` It seems that the navigator has the longest name, it has ${strLength2} characters.`);
}

else {
  console.log(`Wow, you both have equally long names, ${strLength1} characters!.`);
}

for (let i = 0; i < strLength1; i++) {
  strDriver+=(hacker1[i].toUpperCase() +" ");
}

for (let i = strLength2-1; i >= 0; i--) {
  strNav+=hacker2[i];
}

console.log (strDriver);
console.log (strNav);

// Iteration 3: Loops
let strLengthMin = Math.min(strLength1, strLength2);
let alphabetOrder = "abcdefghijklmnopqrstuvwxyz";
 
for (let i = 0; i < strLengthMin; i++) {
  if(hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
    break;
  }

  else if (alphabetOrder.indexOf(hacker1[i].toLowerCase()) < alphabetOrder.indexOf(hacker2[i].toLowerCase())) {
    console.log("The driver's name goes first.");
    break;
  }

  else if (alphabetOrder.indexOf(hacker1[i].toLowerCase()) > alphabetOrder.indexOf(hacker2[i].toLowerCase())) {
    console.log("Yo, the navigator goes first definitely");
    break;
  }

  else if (i === strLengthMin-1) {
    if (strLength1 < strLength2) {
      console.log("The driver's name goes first.");
      break;
    }
    else {
      console.log("Yo, the navigator goes first definitely");
      break;
    }
  }
}

