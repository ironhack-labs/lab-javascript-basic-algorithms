// exercice 1
console.log("I'm ready!");
let hacker1 = "Luc";
console.log(`The driver's name is ${hacker1}.`);
let hacker2 = "Jonas";
console.log(`The navigator's name is ${hacker2}.`);

// exercice 2
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
else {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}

// exercice 3
let stringedName = ""; 
let hacker1UpperCase = hacker1.toUpperCase(); 

for (let i = 0; i < hacker1UpperCase.length; i++) {
  stringedName += hacker1UpperCase[i] + " ";
  // stringedName = "" and add hacker1UpperCase[i] inside of it and then add a space
}

console.log(stringedName);

// part 2 : reverse 
let reversedName = ""

for (i = hacker2.length - 1; i >= 0; i--) {
  reversedName += hacker2[i];
  }

console.log(reversedName)

// alphabetical 

let teamNames = [hacker1, hacker2]
let alphabeticalOrder = [teamNames.sort()];
//sort is not very reliable with special caracters 
console.log(alphabeticalOrder);


if (teamNames.indexOf(hacker1) < teamNames.indexOf(hacker2)) {
  console.log(`The driver's name is first`)
  }
else if (teamNames.indexOf(hacker1) > teamNames.indexOf(hacker2)) {
  console.log(`The navigator's name is first`)
  }
else if (hacker1 === hacker2) {
  console.log(`That's the same name!`)
  }

// alternatively with a loop 
for (let i = 0 ; i < hacker1.length ; i ++) { 
  if (hacker1[i] < hacker2[i]) {
    console.log(`The driver's name is first`)
    break; 
  }
  else if (hacker1[i] > hacker2[i]) {
    console.log(`The navigator's name is first`)
    break;
  }
  else if (hacker1 === hacker2) {
  console.log(`That's the same name!`)
}
}
 