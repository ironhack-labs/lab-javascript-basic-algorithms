//Iteration 1

let hacker1 ='bouba'
console.log(`the driver's name is ${hacker1}`);

let hacker2 ='Mat'
console.log(`the navigator's name is ${hacker2}`);

//Iteration 2
if (hacker1.length > hacker2.length) {console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)} 
else if (hacker1.length < hacker2.length) {console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)} 
else if (hacker1.length = hacker2.length) {console.log(`Wow, you both have equally long names, it has ${hacker2.length} characters.`)};

//Iteration 3

console.log(hacker1.toUpperCase().split('').join(' '));

console.log(hacker2.split('').reverse().join(''));




if (hacker1.localeCompare(hacker2)===-1) {
  console.log(`the driver's name goes first`)
} else if ((hacker1.localeCompare(hacker2)=== 1)){console.log(`Yo; the navigator goes first, defintily
`)} else if((hacker1.localeCompare(hacker2)===0)) {
  console.log(`What?! you both have the same name?`)
};

let i=`the driver's name goes first`



for (let i = 0; i < hacker1.length; i++) {
  console.log(hacker1[i]);
}

for (let i = 0; i < hacker2.length; i++) {
  console.log(hacker2[i]);
}

