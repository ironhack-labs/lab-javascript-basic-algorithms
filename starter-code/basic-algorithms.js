// Names and Input

let hacker1 = 'Kiryl';
let hacker2 = 'mike';
console.log( `The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

//Conditionals

if(hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`);
} else if(hacker2.length > hacker1.length) {
    console.log(`Yo, navigator got the longest name, it has ${hacker2.length} characters`);
} else {
    console.log(`wow, you both got equally long names, ${hacker1.length} characters!!`);
}

let arrName = hacker1.split('');
let result = [];
for(let i = 0; i < arrName.length; i++) {
  result.push(arrName[i].toUpperCase());
}
console.log(result.join(' '));

console.log(hacker2.split('').reverse().join(''));

if( hacker1 > hacker2) {
  console.log(`The driver's name goes first`);
} else if(hacker2 > hacker1) {
  console.log(`Yo, the navigator goes first definitely`);
} else {
  console.log(`What?! You both got the same name?`);
}

//Bonus

function palindrome(userString) {
    let re = /[^A-Za-z0-9]/g;

    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');

    return reverseStr === lowRegStr;
}

palindrome(str);