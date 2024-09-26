// Iteration 1: Names and Input
const hacker1 = "Julio"
console.log ("The drivers name is ${hacker1}")
const hacker2 = "Cristian"
console.log ("The navigator's name is ${hacker2}")


// Iteration 2: Conditionals

const longitud1 = hacker1.length
const longitud2 = hacker2.length

if (longitud2 < longitud1) {
   console.log( `The ${hacker1} has the longest name, it has ${longitud1} characters.`)
}
 else if (longitud1 > longitud2) {
   console.log( `The ${hacker2} has the longest name, it has ${longitud2} characters.`)
}
 else {
    console.log(`wow, you both have equally long names, ${longitud1} characters!`)
}


// Iteration 3: Loops


// 3 - 1

const espacio = hacker1.split("").join(" ")
console.log (espacio.toUpperCase())


for (let i = hacker2.length ; i <= hacker2.length ; i--) {
    console.log (i)
}

const ada = "malaga"
const ade = "algeciras"


// 3 - 2.1

console.log (ada.localeCompare(ade));

if (ada.localeCompare(ade) === -1) {
  console.log ("ada es mas largo")
}
else if (ade.localeCompare(ada) === 1) {
  console.log ("ade es mas largo")
}
else {
  console.log ("Son iguales")
}

// 3 - 2.2 

//3.2
let reverse = "";
​
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverse += hacker2[i];
}
​
console.log(reverse);

// 3 - 3 

const ordenLexico = hacker1.localeCompare(hacker2);
​
if (ordenLexico < 0) {
  console.log("The driver's name goes first.");
} else if (ordenLexico> 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}




//bonus

//1 

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce felis massa, mattis sed ipsum nec, finibus tincidunt orci. Morbi ornare arcu lacinia condimentum mollis. Mauris tristique ornare elit eget varius. Donec facilisis dictum lacus quis varius. Maecenas vel fringilla magna. Praesent augue eros, semper vitae tellus facilisis, pulvinar ornare augue. Nunc hendrerit efficitur mollis. Duis interdum auctor magna, vel porta massa efficitur tempus. Quisque eget lectus ut mi porttitor pretium eu in lorem. Nulla luctus fringilla mauris sed commodo. Nulla facilisi. Sed sit amet massa ac ligula dignissim suscipit at vitae nulla. Mauris ut finibus purus, eget faucibus arcu.
Etiam lobortis porttitor justo vitae tincidunt. Nulla ornare, elit non placerat sodales, dui elit feugiat dolor, ut venenatis dui diam sit amet orci. In tristique justo non laoreet sollicitudin. Donec fermentum lobortis gravida. Mauris posuere, risus quis placerat fringilla, lectus tellus tristique tellus, non egestas magna lectus nec metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque mollis lectus nibh, eget ultricies nulla imperdiet eu. Nulla nisi nulla, venenatis sit amet lobortis fermentum, sagittis at nibh. Nulla suscipit tortor ut volutpat bibendum. Morbi ullamcorper erat ac mauris molestie semper. Sed iaculis pretium ipsum ut porta.
Proin ultricies risus mauris, ac faucibus tellus luctus sed. Nam ornare elit id justo tempus eleifend. Aliquam vitae mi lobortis, vestibulum purus in, luctus mauris. Nullam tempus vestibulum tortor, at pharetra justo laoreet eget. Donec eget augue nisi. Nullam ac placerat massa, et aliquet metus. Morbi non scelerisque justo. Mauris sit amet augue consectetur, faucibus odio sed, laoreet odio. Donec fermentum fermentum nibh ut suscipit. Nullam justo lacus, cursus a ornare sed, maximus a eros. Donec non turpis et felis ullamcorper accumsan. Suspendisse in odio arcu. Duis vel maximus dui, nec consectetur justo.`

let wordCount = 0;

const words = longText.split(" ");

for (let i = 0; i < words.length; i++) {
  if (words[i] === "et") {
    cantidadEt++;
  }
}
console.log("Número de palabras", wordCount);

//2 

const phraseToCheck = "A man, a plan, a canal, Panama!";
let isPalindrome = true;

const limpiarFrase = phraseToCheck.replace(/[^a-zA-Z]/g, "").toLowerCase();

for (let i = 0; i < Math.floor(limpiarFrase.length / 2); i++) {
  if (limpiarFrase[i] !== limpiarFrase[limpiarFrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log("La frase es un palíndromo.");
} else {
  console.log("La frase no es un palíndromo.");
}