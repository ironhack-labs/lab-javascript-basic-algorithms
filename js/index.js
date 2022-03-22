
console.log("I'm ready!");

// Iteration 1: Names and Input
const hacker1 = "João Dias";
console.log(`"The driver's name is ${hacker1}"`);
const hacker2 = "Pelé Dos Santos";
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
function lengthNames(hacker1, hacker2) {
    const numberHacker1 = hacker1.length;
    const numberHacker2 = hacker2.length;

    if(numberHacker1 > numberHacker2) {
        return `The driver has the longest name, it has ${numberHacker1} characters.`
    } else if(numberHacker2 > numberHacker1){
        return `It seems that the navigator has the longest name, it has ${numberHacker2} characters.`
    } else {
        return `Wow, you both have equally long names, ${numberHacker1} characters!`
    }
}

lengthNames(hacker1, hacker2);
// Iteration 3: Loops
const name = hacker1.toUpperCase();
let arr = hacker2.split('');

  /* 3.1 */ console.log(name.split("").join(" "));
   /* 3.2 */ for (const nome of arr.reverse()) {
                console.log(nome);
                }

/* 3.3 */   const arr1 = Array.from(hacker1); 
            const arr2 = Array.from(hacker2);

          function comparar(a, b) {
            if (arr1 < arr2 ) {
              return `The driver's name goes first.`;
            }
            if (arr1 > arr2 ) {
              return `Yo, the navigator goes first definitely.`;
            }
            // a deve ser igual a b
            return `What?! You both have the same name?`;
          }
                       
comparar(arr1, arr2)
// console.log( arr1, arr2);
     




