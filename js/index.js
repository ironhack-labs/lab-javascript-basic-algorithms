let driver = 'Miguel';
let navigator = 'Jaime';

console.log(`the driver's name is ${driver}`);
console.log(`the navigator's name is ${navigator}`);

if (driver.length > navigator.length){
  console.log(`The driver has the longest name, it has ${driver.length} characters`);
} else if (driver.length < navigator.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${driver.length} characters!`)
}

let newDr =  driver.toUpperCase().slice(' ').split('');

let drSpace = driver.toUpperCase().split('').slice(' ').join(' ');

console.log(drSpace);

let navReverse = navigator.split('').reverse().join('');

console.log(navReverse);

const compOrder = driver.localeCompare(navigator);
  if (compOrder < 0) {
    console.log(`The driver's name goes first`);
      } else if (compOrder > 0) {
           console.log('Yo, the navigator goes first definitely.');
      } else {
           console.log('What?! You both have the same name?')
      }