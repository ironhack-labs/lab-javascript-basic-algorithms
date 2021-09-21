// Iteration 1: Names and Input

//hacker 1
const hacker1 = "Aintzane";

console.log(`The driver's name is ${hacker1}`);

//hacker 2
const hacker2 = "Alice";

console.log(`The navigator's name is ${hacker2}`);

//------------------------------------------------------------------//

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
        console.log('The driver has the longest name, it has  '+ hacker1.length + ' characters.' );
    } else if (hacker2.length > hacker1.length) {
        console.log( 'It seems that the navigator has the longest name, it has '+ hacker2.length + ' characters.');
    } else {
        console.log('Wow, you both have equally long names, ' + hacker1.length + ' characters!');
};

//------------------------------------------------------------------//

// Iteration 3: Loops

//to sort the names alphabetically
let items = [hacker1, hacker2];
const namesInOrder = items.sort((a, b) => a.localeCompare(b));

//console.log(namesInOrder)


//to print the desired messages depending on the order of the names
if(hacker1 === hacker2) {
  console.log("What?! You both have the same name?")
} else if (namesInOrder[0] === hacker1) {
  console.log("The driver's name goes first.")
} else {
  console.log("Yo, the navigator goes first definitely.")
}

