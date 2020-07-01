// Iteration 1: Names and Input

let hacker1 = 'Mariana';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Ferran';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
let names= [hacker1,hacker2]

if (names[0].length > names[1].length) {
    console.log (`driver's has the longest name, it has ${names[0].length} characters`)
} else if (names[1].length > names[0].length) {
    console.log(`it seems that the navigator has the longest name, it has ${names[1].length} characters`)
} else {
    console.log (`wow, you both have equally long names, ${names[0].length} characters`)
};


// Iteration 3: Loops

/* Ejercicio 1 */

let resultado = "";
for(let i=0; i < hacker1.length; i++){
    resultado += `${hacker1.charAt(i).toUpperCase()} `;
}
console.log(resultado);


/* Ejercicio 2 */

let resultado1 = "";
for(let i=hacker2.length; i > -1; i--){
    resultado1 += `${hacker2.charAt(i)}`;
}
console.log(resultado1);

let resultado2 = "";

/* Ejercicio 3 */

let phrases= [hacker1,hacker2];

let phraseNumbers = 0;
let phraseNumbersHight = 0;
let namephraseNumbersHight = "";

// Iteramos en el array que contiene las frases dentro del array phrases
for (let i=0; i<phrases.length; i++) {
  //Inicializamos valor a 0 para que no se sume con el anterior
  phraseNumbers = 0;
  //Iteramos dentro de la frase prases[i] para recorrer cada letra que compone dicha frase
  for (let j=0; j<phrases[i].length; j++){
    //Averiguamos el valor de cada letra con charCodeAt y lo sumamos a la variable phraseNumbers
    phraseNumbers += phrases[i].charCodeAt(j)   
  }

  //Mostramos la puntuación lexicográfica de cada frase
  console.log(phraseNumbers)

  // Si la frase nueva es mayor que la antigua, asignamos como la frase con más puntuación mediante la variable phraseNumbersHight, y asignamos el string de la frase a la variable namephraseNumbersHight
  if (phraseNumbers > phraseNumbersHight) {
    phraseNumbersHight= phraseNumbers
    namephraseNumbersHight = phrases[i]
  }  
}
//Pintamos la frase con más puntuación lexicográfica
if(namephraseNumbersHight == hacker1){
  console.log(`The driver's name ${hacker1} goes first.`)
}else if(namephraseNumbersHight == hacker2){
  console.log(`Yo, the navigator ${hacker2} goes first definitely.`)
} else {
  console.log(`What?! You both have the same name?.`)
}


////////////////// Bonus track 


let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis nibh at lectus rutrum congue. Proin ut sapien vulputate, gravida nunc non, sollicitudin nisi. Praesent dictum fermentum mollis. Quisque ultrices vehicula erat. Aliquam erat volutpat. Fusce tincidunt tellus suscipit risus ultricies, ut maximus nibh blandit. Sed iaculis, risus nec sollicitudin accumsan, elit lorem posuere dolor, ut sodales neque tortor sit amet mi. Proin ultrices maximus turpis vel tincidunt. Vestibulum enim elit, pellentesque sed ligula eget, euismod fringilla libero. Praesent vulputate nisl nisi, eu semper orci ultrices eget. Quisque placerat, dolor id auctor dictum, sem felis laoreet justo, a pharetra mi risus nec felis.

In id sapien bibendum, porta eros ac, consequat urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas blandit nisi et mi dapibus dapibus. Vestibulum congue dolor luctus faucibus vehicula. Etiam enim mauris, sagittis at tristique a, sodales a felis. Phasellus vestibulum ex eu sem lobortis, et mollis magna volutpat. Mauris quis ligula luctus, ornare urna vel, laoreet felis. Pellentesque volutpat purus non nisl malesuada pellentesque. Morbi elementum non felis et congue. Phasellus tincidunt nibh et tristique facilisis. Nulla libero nibh, eleifend nec augue et, pellentesque viverra dui. Aliquam a leo a dui cursus tincidunt nec ut est. Integer vehicula aliquet libero in luctus. Integer cursus, purus ac posuere ornare, purus nunc dictum lectus, a sagittis nibh eros quis arcu. Nulla neque nisl, facilisis et rutrum sed, sollicitudin non neque. Donec consequat eu dui eu rutrum.

Vestibulum non pretium turpis, congue rhoncus erat. Curabitur at molestie nisl. Vivamus suscipit tempor lorem non pretium. Ut pharetra malesuada nisl eget suscipit. Aliquam erat volutpat. Fusce dignissim elit nisl, a commodo magna pharetra nec. Proin ornare faucibus diam, at maximus sem efficitur quis. Vivamus in dictum urna. Nullam faucibus ut dui at pulvinar. Donec in quam turpis. Duis porttitor sapien sed nisl interdum, sit amet molestie elit suscipit. Phasellus et libero mauris.`;

let words = [];
let word = "";
let keyword = "et";

for (let i = 0; i < lorem.length; i++) {
  if (lorem.charAt(i) == " " || lorem.charAt(i) == "\n") {
    words.push(word);
    word = "";
  } else {
    word += lorem.charAt(i);
  }
}

console.log(`En este string hay ${words.length} palabras`);
console.log(`La palabra "${keyword}" sale ${words.indexOf(keyword)} veces`);


//////////////////////////////////////////////////////////////////////////////////

//Array para evitar que cuente añanda signos de puntuación en las palabras
let notWords = ["?", "!", "¡", '"', "'", ".", ","];

let palindrome = `Amor, Roma.`;
let palindromeNumWords = 0;
let palindromeWord = "";
let palindromeWords = [];

// Recorremos el palindromo
for (let i = 0; i < palindrome.length; i++) {
  
  // Si el caracter es un espacio o un . usamos la variable palindromeWord que ha ido almacenando los caracteres precedentes y lo añadimos al array palindromeWords
  if (palindrome.charAt(i) == " " || palindrome.charAt(i) == ".") {
    palindromeNumWords++;
    palindromeWords.push(palindromeWord);
    palindromeWord = "";
  } else {
    
    // Cuando vamos almacenando la palabra antes del . o el espacio, comprobamos que no se nos cuelen signos de puntuación en la palabra. Usamos el arrey notWords para cotejar los caracteres que no se incluyen
    let isAWord = true;
    for (let j = 0; j < notWords.length; j++) {
      if (palindrome.charAt(i) == notWords[j]) {
        isAWord = false;
      }
    }
    if (isAWord) palindromeWord += palindrome.charAt(i);
  }
}

// Si hay más de dos palabras en la frase, requisito mínimo para un palindromo, los comparamos, invirtiendo la última palabra y comparándola con la pimera
if (palindromeNumWords >= 1) {
  let firstWord = palindromeWords[0].toLowerCase();
  let lastWord = palindromeWords[palindromeWords.length - 1].toLowerCase();
  let lastWordReverse = "";

  for (let i = lastWord.length; i > -1; i--) {
    lastWordReverse += lastWord.charAt(i)
  }

  //console.log(lastWordReverse);

  /*let lastWordReverse = palindromeWords[palindromeWords.length - 1]
    .split("")
    .reverse()
    .join("")
    .toLowerCase();
  */

  if (firstWord === lastWordReverse) {
    console.log(`Existe un palindromo`);
  } else {
    console.log("No hay un palindromo");
  }
}