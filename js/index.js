// Iteration 1: Names and Input

//this in the *Code Editor*
console.log("I'm ready !")

var hacker1 = 'Marine'
console.log(`The driver's name is ${hacker1}`);

var hacker2 = 'Clémentine'
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  
  }else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }else {console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

let newName = "";
for (let i = 0; hacker1.charAt(i); i++) {
  newName = newName + hacker1[i].toUpperCase() + " ";
}

console.log(hacker2.split('').reverse().join(''));

if (hacker1.localeCompare(hacker2)) {
    console.log("Yo, the navigator goes first definitely.");
  } else if (hacker2.localeCompare(hacker1)) {
    console.log("The driver's name goes first.")
  } else {
    console.log("What?! You both have the same name?");
  }