// Iteration 1: Names and Input
console.log(`hello I'm ready!`);

let hacker1= "David";
let hacker2= "Carlos";

console.log (`The driver's name is ${hacker1}`);

console.log (`The navigator's name is ${hacker2}`);


//Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${ hacker1.length}`)
} else if (hacker2.length>hacker1.length){
  console.log(`It seems the navigator has the longest name, it has ${ hacker2.length}`)
}
else{
  console.log(`Wow, you both have equally long names ${hacker1.length}`)
};

//Iteration 3: Loops 
let upperCase = hacker1.toUpperCase();
console.log(upperCase.split('').join(' '));


console.log(hacker2.split('').reverse().join(''));
//You also can use for.

switch (hacker1.localeCompare(hacker2)) {
    case -1:
        console.log(`The driver's name goes first`);
        break;

    case 1:
        console.log(`Yo, the navigator goes first`);
        break;

    case 0:
        console.log(`What! You both has the same name.`);
        
        break;
    
};


//Bonus 1;

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function wordCount(paragraph) {
    return paragraph.split(' ').length;
};
console.log(wordCount(paragraph));


let paragraphArr = paragraph.split(' ');
let counter=0;
for (let i=0; i<paragraphArr.length; i++){
  if(paragraphArr[i].indexOf('et') !== -1){
    counter++;
  }
}
console.log(counter);

