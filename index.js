// Iteration 1: Names and Input
let name1 = "hacker1";
console.log(`Drivers'name is ${name1}`);
 
let name2 = "hacker2";
console.log(`navigator's name is ${name2}`);
 


// Iteration 2: Conditionals

if (name1.length > name2.length) {
    console.log(`It seems the driver has the longest ${name1}, it has ${name1.length} characters`);
    }
else if (name1.length < name2.length) {
    console.log(`It seems the Navigator has the longest ${name2}, it has ${name2.length} characters`);
    }
else {(console.log(`Wow, you both have equally long names, ${name1.length} characters`))};
 

 
// Iteration 3: Loops
console.log(name1.toUpperCase());

console.log(name1.split('').join(''));

 function reverseName (name2) {
    return name2.split('').reverse().join('');
} 
console.log(reverseName(name2));

 
    if (name1.charAt(0) > name2.charAt(0) ) {
    console.log(`${name1} goes first`);}

    else if (name1.charAt(0) < name2.charAt(0) ) {
    console.log(`Yo, ${name2} goes first, definitely`);}

else console.log("What?! You both have the same name?");
    
//Bonus 1:
let longText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiueu fugiat nulla pariatur. Excepteur sint ocim id est laborum.";
for (i=0 ; i <= longText.length; i++) {
let text = longText.split("");
console.log(text.length);
}

// REVERSE

