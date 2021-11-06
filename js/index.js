// Iteration 1: Names and Input
const hacker1 = 'Sergio Villabrille'

console.log(`The driver´s name is ${hacker1}`)

const hacker2 = 'David Polanco'

console.log(`The navigator´s name is ${hacker2}`)

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    } else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }

// Iteration 3: Loops
//punto 1
spacedString = ""

for (let i = 0; i < hacker2.length; i++){

spacedString = spacedString + hacker2[i].toUpperCase() + ' ';

}

console.log(spacedString);

//punto 2


reverseString = "";


for (let j = hacker2.length - 1; j >= 0 ; j--){

reverseString = reverseString + hacker2[j];
  
}

console.log(reverseString);

//punto 3

const compare = hacker1.localeCompare(hacker2);

if (compare === -1){

  console.log("test1")

} else if(compare === 1) {

console.log("test2");

} else {

console.log("test3");

}