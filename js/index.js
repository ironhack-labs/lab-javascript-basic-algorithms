// 1ª Iteración
const hacker1 = 'Javier'
console.log(`"The driver's name is ${hacker1}"`)

const hacker2 = 'Ángela'
console.log(`"The navigator's name is ${hacker2}"`);


// 2ª Iteración
if(hacker1.length>hacker2.length){
 console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length<hacker2.length){
 console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else {
 console.log (`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// 3ª Iteración
// 3.1 - Planteamiento 1
let newHacker1 = hacker1.toUpperCase().split('').join(' ')

console.log (newHacker1)

// 3.1  - Planteamiento 2 (Loops)
let newName1 = ''

for (i=0; i<hacker1.length; i++) {
  newName1 += hacker1[i].toUpperCase() + ' '
}

console.log(newName1);

// 3.2 - Planteamiento 1
let newHacker2 = hacker2.split('').reverse().join('')

console.log (newHacker2)

// 3.2 - Planteamiento 2 (Loops)
let newName2 = ''

for (i=hacker2.length-1; i>=0; i--) {
  newName2 += hacker2[i]
}

console.log(newName2);

// 3.3
if(hacker1.localeCompare(hacker2) === -1){
  console.log(`The driver's name goes first.`)
}
else if (hacker1.localeCompare(hacker2) === 1){
  console.log(`Yo, the navigator goes first definitely.`)
}
else {
  console.log (`What?! You both have the same name?`)
}

// BONUS
// Bonus1
// B.1
let loremIpsumText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum augue eu tortor euismod egestas. In hac habitasse platea dictumst. Fusce feugiat fermentum nisl, quis tempor quam semper cursus. Suspendisse vestibulum bibendum turpis, nec rutrum orci dignissim et. Pellentesque eget nibh blandit, pharetra neque ac, vulputate turpis. Suspendisse sit amet nisl in tortor varius efficitur vel ut sapien. Duis ut vestibulum massa, non volutpat lectus. Proin mollis lacus libero, sit amet molestie neque placerat quis. Duis quis turpis in tellus finibus lobortis ut et nibh. In libero elit, lobortis varius lacinia vitae, sodales vitae libero. Ut ullamcorper neque sit amet convallis mattis. Curabitur ante ligula, consectetur sit amet tempus ut, venenatis et erat. Curabitur et ullamcorper purus, non suscipit leo. Aliquam quis tellus et massa efficitur maximus quis nec ligula. Praesent sit amet diam aliquet turpis molestie porttitor ac nec ante. Sed leo elit, vulputate eu tortor vel, mollis laoreet dolor.

Nam vel massa urna. Donec vehicula ornare quam, volutpat ornare urna ultricies nec. Integer ac nulla odio. Morbi volutpat vulputate enim non rhoncus. Suspendisse id lectus tristique, volutpat elit vitae, fermentum augue. Ut porttitor ligula vitae placerat auctor. Sed nec aliquam nisl. Aenean et massa eu turpis cursus lacinia vitae eu lacus. Proin bibendum tortor ut sem consequat, in facilisis lorem blandit. Vivamus congue semper felis. Nunc pulvinar, ex ut facilisis mattis, arcu mi egestas odio, eu consequat tellus ligula et purus. Pellentesque ex urna, iaculis id aliquet vel, pharetra semper erat. Sed hendrerit nec quam a imperdiet.

Sed sed enim non tortor pulvinar sodales. Vestibulum accumsan tristique velit, at dictum quam. Etiam nec tortor velit. Integer id convallis orci. Donec augue enim, vestibulum vel efficitur at, consectetur quis ipsum. Vestibulum at vestibulum odio, at molestie eros. Donec laoreet augue eget tincidunt accumsan. Nullam fermentum leo in neque pellentesque hendrerit. Quisque quis quam vel massa dictum tincidunt id non sapien.`

// B.2 Planteamiento 1
console.log(loremIpsumText.split(' ').length);

// B.2 Planteamiento 2 (Loops)
let numberOfBlankSpaces = 0

  for (i=0; i<loremIpsumText.length; i++) {
      if (loremIpsumText[i] === ' ') {
        numberOfBlankSpaces += 1;
      }
  }

let numberOfWords = numberOfBlankSpaces + 1;

console.log(numberOfWords)

// B.3 Planteamiento 1
// Expected output --> 6 
console.log(loremIpsumText.split(' et ').length-1)

// B.3 Planteamiento 2 (Loops)
let numberOfEt = 0

for (i=0; i<loremIpsumText.length; i++) {
    if (loremIpsumText.slice(i, i+4) === ' et ') {
        numberOfEt += 1;
    }
}

console.log(numberOfEt)

// Bonus2
let phraseToCheck = 'A man, a plan, a canal, Panama!'

let phrase1 = phraseToCheck.replace(/\W/gi,'').toLowerCase()

//console.log (phrase1)

let phrase2 = phraseToCheck.split('').reverse().join('').replace(/\W/gi,'').toLowerCase()

//console.log (phrase2)

if (phrase1.localeCompare(phrase2) == 0) {
  console.log ("It's a palindrome")
} else {
  console.log("It's not a palindrome")
}

/*
replace(//g, '')
g - Reemplazo global. Reemplaza todas las instancias de la cadena coincidente en el texto proporcionado.
i - Reemplazo sin distinción entre mayúsculas y minúsculas. Reemplace todas las instancias de la cadena coincidente, ignorando las diferencias en el caso.
m - Reemplazo de varias líneas. La expresión regular debe probarse en busca de coincidencias en varias líneas.
*/










