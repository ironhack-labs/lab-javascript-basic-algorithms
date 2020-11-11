// Iteration 1: Names and Input


//1.1
var hacker1 ='Intan';
//1.2
console.log(`The driver's name is ${hacker1}.`);


//1.3
var hacker2 ='Katalin';
//1.4
console.log(`The driver's name is ${hacker2}.`);



// Iteration 2: Conditionals

//2.1

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}  characters.`);
   } if (hacker2.length > hacker1.length) {
    console.log( `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } else if(hacker1.length=hacker2.length) {
      console.log (`Wow, you both have equally long names, ${hacker1.length + hacker2.length} characters!`)
    }

// Iteration 3: Loops

//3.1

let driver=""

 for (let i=0; i < hacker1.length; i++) {
   driver = hacker1[i].toUpperCase()
   console.log(driver)
 } 

//3.2

var reversed = [];
var name = hacker2.split("");
for(var i = name.length-1; i >= 0; i--) {
    reversed.push(name[i]);
}
console.log(reversed.join(""));


//3.3

let arr = ["- The driver's name goes first.", "- Yo, the navigator goes first definitely.", "- What?! You both have the same name?"];
arr.sort(function(a, b) {
    return a.localeCompare(b);
});
console.log(arr);
