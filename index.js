
// Iteration 1: Names and Input
const hacker1 = 'acundo'
console.log('The driver´s name is ' +hacker1)

const hacker2 = 'Eli'
console.log('The navigator´s name is ' + hacker2)



// Iteration 2: Conditionals
if(hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops
let finalName = ''
for (let i = 0; i < hacker1.length; i++) {
  let name = hacker1[i].toUpperCase()
  finalName += name + ''
  
}

console.log(finalName);

/* 3.2 */
let finalNameReverse = ''
for (let i = hacker2.length-1; i>= 0; i--) {
  let name = hacker2[i];
  finalNameReverse += name + ''
}

console.log(finalNameReverse)

/* 3.3 */
const firstLeter = hacker1.charAt(0).toLowerCase()
const firstLeter2 = hacker2.charAt(0).toLowerCase()

if(firstLeter < firstLeter2) {
  console.log("The driver's name goes first")
} else if (firstLeter > firstLeter2) {
  console.log("Yo, the navigator goes first, definitely.")
} else {
  console.log("What?! You both have the same name?")
}

/* otra forma de hacerlo */
console.log(hacker1.localeCompare(hacker2))


/* Bonus 1 */
const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate, eros sed sodales posuere, sem dolor sagittis nulla, et hendrerit sem lorem id erat. Sed varius risus vitae urna tempus porta in eu justo. Fusce id elit sed leo tempor ullamcorper eget sed purus. Donec rutrum turpis libero, sagittis mollis nisi condimentum at. Proin eu leo in nunc tincidunt blandit non nec quam. Cras sollicitudin nulla eu quam mattis aliquam. Nunc placerat, augue nec aliquam rutrum, felis ligula rutrum nibh, a dictum metus diam ut felis. Cras porttitor, orci commodo tempus pretium, nunc lacus vestibulum nunc, non volutpat ante diam et ante. Vivamus id elit magna. Duis condimentum ex eget tortor molestie eleifend.Curabitur consectetur sem a metus lacinia, in tristique justo sodales. Proin tempus nulla congue, consequat nibh eget, mattis sapien. Integer sodales ante lacus, non euismod diam suscipit ac. Maecenas viverra nunc varius elit aliquet tincidunt. Ut pulvinar scelerisque turpis vel volutpat. Maecenas lacinia lorem sed ornare cursus. Cras dictum tortor ut ante gravida sagittis ac tempus quam. Phasellus ut rutrum purus. Sed in ultrices risus, vitae ultricies metus. Aenean euismod imperdiet sodales. Aliquam erat volutpat. Donec dictum orci eu porttitor placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec suscipit metus, a ultrices tortor. Pellentesque nibh est, mollis id nulla at, fermentum convallis arcu. Proin egestas blandit purus. Vestibulum quis eros sit amet purus imperdiet ultrices. Nulla ultrices ullamcorper lacus non blandit. Praesent varius, massa placerat consectetur imperdiet, odio mi auctor nulla, sit amet scelerisque tortor arcu eget lacus. Phasellus faucibus iaculis elementum. Quisque quam velit, cursus et maximus quis, cursus vitae lectus. Sed condimentum justo quis odio cursus malesuada.'

const myArray = longText.split(' ')
console.log(myArray.length)

let contadorEt = 0
for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  if(element === 'et') {
    contadorEt ++
  }
  
}
console.log(contadorEt)


/* Bonus 2 */
const phraseToCheck = 'taco cat'
let palabraAtras = ''
for (let i = phraseToCheck.length-1; i>= 0; i--) {
  palabraAtras += phraseToCheck[i].toLowerCase().trim(' ');
}
console.log(palabraAtras)

let palabraDerecha = ''
for (let i = 0; i < phraseToCheck.length; i++) {
  palabraDerecha += phraseToCheck[i].toLowerCase().trim(' ');
}
console.log(palabraDerecha)

if(palabraAtras === palabraDerecha) {
  console.log('Si son palindromos')
} else {
  console.log('No lo son')
}

