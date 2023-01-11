// Iteration 1: Names and Input

const hacker1 = "Max"; // driver

console.log(`The driver'\s name is ${hacker1}`);

const hacker2 = "Fjodor"; // navigator
console.log(`The navigator'\s name is ${hacker2}`); 

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1} characters`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
    } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }



//3.1

/*

Initial attempt: 

function addSpace(driver) {
  return driver.split("").join(" ");
}

console.log(addSpace(driver));
 */



const driver = hacker1;
const navigator = hacker2;  

let newName = '';
for (let i = 0; i < hacker1.length; i++) {
    const addition = hacker1[i].toUpperCase() + ' ';
    newName = newName + `${addition}`;
};
console.log(`${newName.trim()}`);

//3.2 

let navigatorReversed = ''; 
for (let i = navigator.length - 1; i >= 0; i--) {
  const char = navigator[i];
  navigatorReversed += char;
}
console.log(`${navigatorReversed}`);


//3.3 

/* 

First attempt using function:

let names = [driver, navigator];
names.sort();

let sortedNames = names.sort();
console.log(sortedNames); 

*/

if (hacker1[0] < hacker2[0]) {
  console.log('The driver\'s name go first.')
}
else if (hacker2[0] < hacker1[0]) {
  console.log('Yo, the navigator goes first definitely.')
} 
else {
  console.log('What?! You both have the same name?')
}