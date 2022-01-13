
// Iteration 1: Names and Input

const hacker1= "Monica"
let phrase = (`The driver's name is ${hacker1}`)
console.log(phrase)
const hacker2="Mario"
let phrase1 = (`The navigator's name is ${hacker2}`)
console.log(phrase1)

// Iteration 2: Conditionals

if(hacker1.length>hacker2.length){
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)}
  else if (hacker1.length<hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
  }else if (hacker1.length=hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`)
  }

// Iteration 3: Loops

let hacker1Upper = hacker1.toUpperCase()
for (let i= 0; i < hacker1Upper.length; i++)
{

  console.log(hacker1Upper.charAt(i))
  
}

for (let i = 0; i > hacker1.length; i++){
  let wrongName
  wrongName = "[i]" + " "
  console.log(wrongName)
}

function invertir(cadena) {
  let x = cadena.length;
  let cadenaInvertida = "";

  while (x>=0) {
    cadenaInvertida = cadenaInvertida + cadena.charAt(x);
    x--;
  }
  console.log(cadenaInvertida);
}

invertir(hacker2)