// Iteration 1: Names and Input

let hacker1 = "John";
console.log('The driver Name is '+ hacker1);
let hacker2 = "Safari";
console.log('The navigator name is '+ hacker2);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  } else {
    console.log (`Wow, you both have equally long names, ${hacker2.length} characters!`)
  }

// Iteration 3: Loops

let newDriverName = hacker1.toUpperCase().split("").join(" ");
console.log(newDriverName);

let reverseNavigatorName = hacker2.split("").reverse().join(" ");
console.log(reverseNavigatorName);

if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver's name goes first.`);
  } else if (hacker1.localcompare(hacker2) === 0) {
    console.log(`What?! You both have the same name?`)
  } else {
    console.log(`Yo, the navigator goes first definitely.`);
  }

// Bonus 1

const text = 'Lorem ipsum dolor et nergitur';

console.log(text.split(" ").length);

let etCount=0 ; 
for (let i=0; i < text.length; i++){
  if (text[i]==="e" && text[i+1]==="t"){
    etCount++;
  }
}
console.log(`There are ${etCount} "et" in the text`);