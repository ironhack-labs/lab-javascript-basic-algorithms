// Iteration 1: Names and Input
let hacker1 = "Theo";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Raphael";
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`${hacker1} has the longest name, it has ${hacker1.length} characters.`)
  }else if (hacker2.length > hacker1.length){
    console.log(`It seems that ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
  }else {
    console.log("Wow, you both have equally long names, XX characters!.")
  }


// Iteration 3: Loops

// Print first name in capital with space
let newHacker1 = "";
for(let i = 0; i < hacker1.length; i++){
 newHacker1 += hacker1[i].toUpperCase() + " "; 
}
console.log(newHacker1)

// Méthode avancé
 console.log(hacker1.split("").join(' ').toUpperCase())

// Reverse second name
let reverseNewhacker2 = ""
    for (let i = hacker2.length - 1; i >= 0; i--) { 
      reverseNewhacker2 +=  hacker2[i];
    }
console.log(reverseNewhacker2)
     


if (hacker1.localeCompare(hacker2) < 0) {
  console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definetly");
} else {
  console.log("What?! You both have the same name?");
}
