// Iteration 1: Names and Input

let hacker1 = "Luisa"
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Bernardo"
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1 > hacker2) {
    console.log(`The driver has the longest name, it has  ${hacker2.length} characters.`);
  }
    else if (hacker1 < hacker2) {
     console.log(`It seems that the navigator has the longest name, it has ${hacker1.length} characters.`);
    }
    else {
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)   
    }

// Iteration 3: Loops

//3.1

let blank = "";
for (let i = 0 ; i < hacker1.length ; i++) {
 
        blank += hacker1[i].toUpperCase() + " ";
}
console.log(blank);


//3.2 following this example https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

    var newString = "";
    for (var i = hacker1.length - 1; i >= 0; i--) {
        newString += hacker1[i];
    }
    console.log(newString);


//3.3

if (hacker1 < hacker2) {
     console.log(`The driver's name goes first.`)};
if (hacker1 > hacker2) {
     console.log(`Yo, the navigator goes first definitely.`)};
if (hacker1 === hacker2) {
     console.log('What?! You both have the same name?')};