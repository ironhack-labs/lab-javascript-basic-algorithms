console.log("I'm ready!");
//! Iteration 1: Names and Input

//* 1.1
let hacker1 = "Pablo";
//* 1.2
console.log(`"The driver's name is ${hacker1}"`);
//* 1.3
let hacker2 = "Ana";
//* 1.4
console.log(`"The navigator's name is ${hacker2}"`);

//! Iteration 2: Conditionals

let hacker1Length = hacker1.length;
let hacker2Length = hacker2.length;

if (hacker1Length > hacker2Length) {
  console.log(
    `The driver has the longest name, it has ${hacker1Length} characters.`
  );
} else if (hacker2Length > hacker1Length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2Length} characters.`
  );
} else {
  console.log(`Wow, you both have equally long names, ${hacker1Length} characters!`);
}

//! Iteration 3: Loops

//* 3.1
let finalResult = "";

for (let i = 0; i < hacker1.length; i++) {
  let upperCasedLetterHacker1 = hacker1[i].toUpperCase();
  // console.log(upperCasedLetterHacker1);
  finalResult = finalResult + " " + upperCasedLetterHacker1;
}
console.log(finalResult);

//* 3.2
reverse = "";

/* for (let i = 0; i < hacker2Length; i++) {
  reverse = reverse + hacker2[i];
}
console.log(reverse);
 */

for (let i = hacker2Length - 1; i >= 0; i-- ) 
//* let i = hacker2Length - 1 -> es donde arranca el bucle. Longitud (length) es 3 (1A 2N 3A), pero en la iteración del bucle es respecto del índice (0, 1, 2). Entonces si queremos empezar en el final debemos hacer length - 1.
//? i>= 0                     -> condición de permanencia para que el bucle siga funcionando.
//! i --                      -> Progresión del bucle. En este caso está restando una unidad al contador.
                                        {
  reverse = reverse + hacker2[i];
}
console.log(reverse);



//! BONUS

//* B.1
let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed consequat arcu. In egestas est a dolor maximus, sagittis tristique nibh gravida. Morbi libero nulla, sagittis vel condimentum quis, bibendum et tortor. Morbi ornare eros id eros bibendum, a interdum justo aliquet. Sed ut volutpat sem. Pellentesque auctor mauris ultricies gravida lacinia. Quisque vitae est non lectus malesuada commodo. Fusce condimentum quam mauris. Nam ultrices convallis elit. Aliquam orci diam, commodo id dapibus a, commodo eget ipsum. Cras eleifend fermentum arcu, id mattis tortor malesuada ac. Praesent ex dolor, aliquam eget orci vel, porta auctor augue. Praesent eget justo eu quam tempor faucibus sit amet sed erat. Proin elit felis, malesuada semper malesuada sit amet, egestas lacinia ex. Suspendisse turpis tellus, dapibus ac nunc nec, blandit venenatis sapien. Aliquam in nisi luctus justo interdum commodo sed quis eros. Nam quis mi eget nisi semper tincidunt id a ex. Proin malesuada tincidunt efficitur. Phasellus et felis quis ligula rhoncus suscipit et eu dolor. Nunc id maximus orci. Phasellus venenatis in sem ac egestas. Aliquam euismod, risus non elementum commodo, sapien tortor finibus orci, cursus condimentum mauris elit a neque. Sed nec aliquet purus. Nullam posuere neque in eros facilisis, quis eleifend arcu ultrices. Morbi sit amet ornare velit. Vestibulum non est ante. Integer eget lacinia nibh. Fusce in metus justo. Etiam consectetur dignissim nunc. Nullam libero lectus, congue sed placerat nec, volutpat quis magna. Pellentesque fermentum tortor nec pulvinar vehicula. Sed ullamcorper dolor suscipit risus pulvinar, ut feugiat nulla auctor. Vivamus pretium dui vitae leo dignissim tristique. Aenean sit amet magna erat. Suspendisse sed scelerisque urna. Fusce in elementum felis. Vestibulum non semper felis. Phasellus ullamcorper arcu quis justo varius, a facilisis sem porta. Etiam non pharetra elit, eu facilisis purus.";


// contar los caracteres contenidos en Lorem = console.log(lorem.length)

let loremLength = lorem.length;
let counterWords = 1; //* Empiezo el contador en 1 porque la primera palabra que hay antes del primer espacio se la salta.
let counterEts = 0;
for (let i = 0; i < loremLength; i++){    
    if(lorem[i] === " "){
        counterWords = counterWords + 1;
    } 

    if (lorem[i] === " " && lorem[i+1] === "e" && lorem[i+2] === "t") {
        counterEts = counterEts + 1;
    }
}

console.log(counterWords)
console.log(counterEts)

//* B.2
let phraseToCheck = "Amor, Roma";
phraseToCheck = phraseToCheck.toUpperCase();

let phraseLength = phraseToCheck.length;

let phraseReversed = "";

for (let i = phraseLength - 1; i >= 0; i--) {
    if (phraseToCheck[i] === ","){
        phraseToCheck[i].replace(" ")
    }    
    phraseReversed = phraseReversed + phraseToCheck[i];
    phraseReversed = phraseReversed.toUpperCase();
    
}

phraseToCheck = phraseToCheck.replace(","," ")
phraseReversed = phraseReversed.replace(","," ")



console.log(phraseToCheck)
console.log(phraseReversed)

if (phraseToCheck === phraseReversed) {
  console.log("Yess! Its a palindrome")
} else {
  console.log("Nooop! Its not a palindrome")
}

