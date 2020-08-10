// Iteration 1: Names and Input
let hacker1 = 'khushboo';
console.log("The driver's name is " + hacker1);

let hacker2 = 'nadja'
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log('The driver has the longest name');
  console.log('it has '+hacker1Length + 'characters');
}else if (hacker1Length < hacker2Length) {
  console.log('The navigator has the longest name');
  console.log('it has '+hacker2Length + ' characters');
}else {
  console.log('Wow, you both have equally long names,'+ hacker1Length + ' characters!');
}

// Iteration 3: Loops

let name = '';
for( let i=0 ; i < hacker1Length ; i++) {
  let letter = hacker1[i].toUpperCase();
  name += `${letter} `;
}
console.log(name);

let name2 = ''
for( let i = hacker2Length -1; i>=0 ; i--) {
  name2 += `${hacker2[i]}`;
}
console.log(name2)

  
//   if(hacker1 > hacker2) {
//     console.log("Yo, the navigator goes first definitely." + hacker2)
//   } else if(hacker1 < hacker2){
//     console.log("The driver's name goes first." + hacker1)
//   } else
//     console.log('What?! You both have the same name?');

let compare1 = hacker1.localeCompare(hacker2);
//console.log(compare1);
if(compare1<0) {
  console.log(hacker1);
} else if(compare > 0) {
  console.log(hacker2)
} else {
  console.log("Same name");
}

