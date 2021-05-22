// Iteration 1: Names and Input
let hacker1 = 'RODRIGO'
console.log (`The driver's name is ${hacker1}`)
let hacker2 = 'ALUIZIO'
console.log (`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log (`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length > hacker1.length) {
  console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length == hacker2.length) {
  console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

//3.1 with JOIN
console.log(hacker1.split('').join(' '));

//3.1 with FOR

let separatedName = '';

for (let i = 0; i<hacker2.length; i+=1) {

    separatedName += hacker2[i].toUpperCase() + ' ';
}
console.log(separatedName);

//3.2 with FOR

let nameInverted ='';
for (let i = hacker1.length - 1; i>=0; i-=1) {
    nameInverted += hacker1[i];
}
console.log(nameInverted);

//3.3 with IF ELSE

if(hacker1.length > hacker2.length) {
  console.log(`The ${hacker1} goes first.`);
} else if(hacker1.length < hacker2.length) {
  console.log(`Yo,the ${hacker2} goes first definitely.`);
} else if(hacker1.length === hacker2.length) {
  console.log(`What?! You both have the same name?`)
}

// BONUS 1

let loren = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer et a galley of type and scrambled it to make a type specimen et. It has survived not only five centuries, but also the leap into electronic typesetting, remaining et unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with"

console.log(loren.split(' ').length);

let count = 0 //parseInt("0")

for (let i = 0; i < loren.length; i +=1) {
  if (loren[i] === 'e' && loren[i+1] === 't') {
    count += 1
  } 
} console.log(count)