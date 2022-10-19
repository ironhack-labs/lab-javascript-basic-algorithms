let hacker1 = 'Max';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Ethan'
console.log(`The navigator's name is ${hacker2}`)





if (hacker1.length > hacker2.length ) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`);}
 else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length ) {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}




let newDriver = ''
for (let i = 0; i < hacker1.length; i++) {
  hacker1[i]; newDriver += hacker1[i].toUpperCase();
} console.log(newDriver.split('').join(' '));


let newString = ""
for (let i = hacker2.length - 1; i >= 0; i--) {
  newString += hacker2[i]
}

console.log(newString)



if (hacker1.localeCompare(hacker2) === -1) {
  console.log('Driver goes first');
}
else if (hacker1.localeCompare(hacker2)=== 1) {
console.log('Navigator goes first');
}
else {
  console.log('What?!You both have the same name?');
}

