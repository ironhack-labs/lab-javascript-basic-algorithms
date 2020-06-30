



Buscar en ironhack-webbcn0620


1

IW
1
2


ironhack-webbcn0620
Alejandro abad

Hilos de conversaciones

Elementos guardados
// Iteration 1: Names and Input
let hacker1 = 'Alejandro';
console.log(`The driver's name is ${hacker1}`);
let hacker2 = 'Patricio';
console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length}`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length}`);
} else if(hacker1.length===hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker2.length}`);
}
// Iteration 3: Loops
let hacker1Capitalized=hacker1.toUpperCase();
let temp='';
for (let i = 0; i <= hacker1Capitalized.length; i++) {
  temp += hacker1Capitalized.charAt(i) + ' ';
  console.log(hacker1Capitalized[i])
}
console.log(temp)
let reverseHacker2='';
for(let i=hacker2.length; i>=0;i--){
  reverseHacker2+=hacker2.charAt(i);
}
console.log(reverseHacker2);
let hackersArray=[hacker1,hacker2];
hackersArray.sort();
switch(hackersArray[0]){
  case hacker1:
    console.log("The driver's name goes first");
    break;
  case hacker2:
    console.log("Yo, the navigator goes first definitely");
    break;
  default:
    console.log("What?! You both have the same name?")
}


//bonus 2
let a= `A man, a plan, a canal, Panama!`
let b= `Amor, Roma`
let c= `race car`
let d= `stack cats`
let e= `step on no pets`
let f= `taco cat`
let g= `put it up`
let h= `Was it a car or a cat I saw?" and "No 'x' in Nixon`

function isPalindromo(str) {
  let palindromoReverseArray=[];
  palindromoReverseArray.push(str.split(' '));
  
  //reverse variables palindromo
  let palindromoReverse=[]
  let palindromoWordReverse='';
  let palindromoWord='';
  let a=''

  let b=str.toString().replace(/\W/g, '').toLowerCase();

  for (let i = 0; i < palindromoReverseArray.length; i++) {
    palindromoWord=palindromoReverseArray[i].toString();

      for(let j=palindromoWord.length; j>=0; j--){
        palindromoWordReverse+=palindromoWord.charAt(j);
      }    
      a=palindromoWordReverse.replace(/\W/g, '').toLowerCase();    
  }
  if(a.localeCompare(b)!==0) {
    console.log(a);
    console.log(b);
    return 'No es un palindromo'
  } else {
    console.log(a);
    console.log(b);
    return 'Es un palindromo';
  }  
}

console.log(isPalindromo(a));
console.log(isPalindromo(b));
console.log(isPalindromo(c));
console.log(isPalindromo(d));
console.log(isPalindromo(e));
console.log(isPalindromo(f));
console.log(isPalindromo(g));
console.log(isPalindromo(h));
