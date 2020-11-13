// Iteration 1: Names and Input
let hacker1 = "Nico";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Luis";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
}


// Iteration 3: Loops
//3.1
let hacker1Mayusculas = hacker1.toUpperCase()
let hacker1Vacia = "";

for (let i = 0;  i < hacker1Mayusculas.length; i++) {
  if (i!=hacker1Mayusculas.lenght-1) {
    hacker1Vacia = hacker1Vacia + hacker1Mayusculas[i]+" ";  }else {
      hacker1Vacia = hacker1Vacia + hacker1Mayusculas[i];
    }
}

console.log(hacker1Vacia)

// 3.2

let str = 'Luis'
let newStr = str.split('');
console.log(newStr.reverse().join(' '))


// 3.3 

if (hacker1[0] < hacker2[0]) {
  console.log(`The driver's name goes first.`)
}
else if (hacker1[0] > hacker2[0])
{
  console.log(`Yo, the navigator goes first definitely.`)
}
else {
  console.log(`What?! You both have the same name?`)
}

