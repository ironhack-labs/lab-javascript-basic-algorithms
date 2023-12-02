let hacker1 = "abelardo";
console.log(`The driver\`s name is ${hacker1}`);
let hacker2 = "abelarda";
console.log(`The navigator\'s name is ${hacker2}`);

// Iteration 2: Conditionals
const charNumberHacker1 = hacker1.length;
const charNumberHacker2 = hacker2.length;
if (charNumberHacker1 > charNumberHacker2) {
  console.log(
    `The driver has the longest name, it has ${charNumberHacker1}  characters`
  );
    } else if (charNumberHacker2 > charNumberHacker1) {
  console.log(
    `It seems that the navigator has the longest name, it has ${charNumberHacker2} characters`
  );
        } else if (charNumberHacker2 === charNumberHacker1) {
  console.log(
    `Wow, you both have equally long names, ${charNumberHacker1} characters!`
            );
            }

// Iteration 3: loops

let result = "";
    for (let i = 0; i < hacker1.length; i++) {
        result += hacker1[i].toUpperCase() + " ";
            }
            console.log(result);

//3.2
let contrary = "";

    for (let i = hacker1.length - 1; i >= 0; i--) {
        contrary += hacker1[i];
            }

console.log(contrary);

//3.3
const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
hacker1=hacker1.toLocaleUpperCase()//pasmos a mayusculas todo 
hacker2=hacker2.toLocaleUpperCase()//pasamos a mayusculas todo

let resultadoFinal=""//creo una especie de marcador

for (let i = 0; i < hacker1.length; i++) {
  
  let wordsAtTheMomentHacker1=alphabet.search(hacker1[i])//letra hacker1 en esta iteracion
  let wordsAtTheMomentHacker2=alphabet.search(hacker2[i])//letra hacker2 en esta iteracion

  //console para ver  el numero que equivale a cada letra de hacker1 y hacker2
  console.log(wordsAtTheMomentHacker1)
  console.log(wordsAtTheMomentHacker2)
  //si son iguales continua hasta y despues nos dice el numero mas grande que equivale a mas alante en el alfabeto por lo tanto seria el que va el segundo  
  if (wordsAtTheMomentHacker1===wordsAtTheMomentHacker2) {
    resultadoFinal="What?! You both have the same name?"
      
    
    continue;
    }
    else if(wordsAtTheMomentHacker1>wordsAtTheMomentHacker2){
    resultadoFinal="Yo, the navigator goes first, definitely."
    
    break
        }
        else if(wordsAtTheMomentHacker1<wordsAtTheMomentHacker2){
        resultadoFinal="The driver's name goes first. "
        break
            }
        }
console.log(resultadoFinal)
