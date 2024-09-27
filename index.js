// Iteration 1: Names and Input

console.log("I'm ready");

let hacker1 = "Sergio";
let hacker2 = "Ironhack";

console.log(hacker1, hacker2);




// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest, it has ${hacker1.length} characters`)
  }
  else if  (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  }
  else {
    console.log(` Wow, you both have equally long names, ${hacker1.length} characters!.`)
  }

// Iteration 3: Loops



let hacker1Mayus = hacker1.toUpperCase("");
console.log(hacker1Mayus);


console.log(hacker1Mayus.split("").join(""));

console.log(hacker1.split("").reverse().join(""));




let reversedName = "";
for (let i = hacker1.length - 1; i >= 0; i--) {
  reversedName += hacker1[i];
}
console.log(reversedName);





if (hacker1.length > hacker2.length) {
  console.log("The driver's name goes first.");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}


// bonus 1 

let longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, cumque? Reiciendis possimus consectetur culpa consequuntur doloribus laudantium nam, eos fugit, ullam alias animi doloremque enim! Porro labore provident asperiores consectetur?";

if (hacker1.length > hacker2.length) {
  console.log("The driver's name goes firts.");
} else if (hacker1.length < hacker2.length) {
  console.log("Yo, the navigator goes first, definitely.")
} else {
  console.log("What?¡ You both have the same name?")
}


// bonus 1 

let longtext = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis iusto vel dicta excepturi quo earum, iste aperiam nobis voluptatibus at et repellendus facilis officia vitae consequuntur ea dolorum voluptatum aspernatur?"

console.log(longText.split(' ').length);

console.log(longText.match(/et/g).length);



/* bonus 2 


let phraseToCheck = "Amor, Roma";

if (phraseToCheck === reversePhraseToCheck) {
  console.log("This is a palindrome");

} else {
  console.log("this is not a palidrome");
}
 
*/

