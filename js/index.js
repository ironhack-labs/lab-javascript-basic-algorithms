// Iteration 1: Names and Input
const hacker1 = 'deniz';
console.log('The driver\'s name is ' + hacker1); 
const hacker2 = 'sema';
console.log(`The navigator\'s name is Sema`);





// Iteration 2: Conditionals

if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

let separated = '';
for(let i = 0; i < hacker1.length; i++){
    separated += hacker1[i].toUpperCase() + ' ';
}

console.log(separated);

let reversed = '';
for(let i = hacker1.length -1; i >= 0; i--){
    reversed += hacker1[i];
}

console.log(reversed);

let result = hacker1.localeCompare(hacker2)
// console.log(result)
if(result){
    console.log('The driver\'s name goes first.')
} else if (!result){
    console.log('Yo, the navigator goes first definitely.')
} else if(hacker1.localeCompare(hacker2) === hacker2.localeCompare(hacker1)){
    console.log('What?! You both have the same name?')
}

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'

console.log(loremIpsum.length);

function countEts (paragraph){
  // let arr = loremIpsum.split(' ');
  let etCounter = 0;
  let paragraphToLowerCase = paragraph.toLowerCase()
  for(let i = 0; i < paragraphToLowerCase.length; i++){
    if (paragraphToLowerCase[i] === ' ' && paragraphToLowerCase[i+1] === 'e' && paragraphToLowerCase[i+2] === 't' && paragraphToLowerCase[i+3] === ' '){
    etCounter++;
    }
}
return etCounter
}
countEts(loremIpsum);
console.log(countEts(loremIpsum));


let try12 = 'sit am et da et bla'
console.log(try12.split(' et '));

