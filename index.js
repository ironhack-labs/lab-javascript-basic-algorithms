// Iteration 1: Names and Input
console.log("Hola!")

let hacker1 = "George"
console.log("The driver's name is", hacker1)
let hacker1Mayus = hacker1.toLocaleUpperCase()

let hacker2 = "Mcfly"
console.log("The navigator's name is", hacker2)

hacker1.length

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {  
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length){
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`)
}else if (hacker1.length === hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters.`)
}


// Iteration 3: Loops

const separardriver = hacker1Mayus.split("")
console.log(separardriver)

const Revertirhacker2 = hacker2.split("").reverse("").join("")
console.log(Revertirhacker2)

if (hacker1 < hacker2) {
    console.log(`The driver´s name goes first`)
} else if (hacker1 > hacker2) {
    console.log(`The navigator's name goes first`)
} else if (hacker1 === hacker2){
    console.log(`What?! You both have the same name?`)
}

// Iteration 3: Bonus Time Bonus 1

let longtext = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a vulputate nisl. Et Vestibulum neque mauris, rutrum nec justo nec, consequat sollicitudin felis. Aenean ultricies placerat libero quis consectetur. 

Vivamus ut laoreet lacus. Suspendisse non massa at et neque convallis finibus. Integer sit amet turpis blandit, semper odio sodales, dapibus velit. Aliquam sagittis nibh tortor, sed vehicula mi consectetur eget. Vivamus viverra fringilla erat. Fusce congue magna vel libero auctor ultrices. Quisque in urna ornare, convallis dolor non, maximus sapien. Nulla urna magna, faucibus eget rutrum a, pharetra quis tortor. Praesent id tortor leo. Sed facilisis, eros ac semper dignissim, metus turpis commodo turpis, sed consectetur nulla nunc in massa. Morbi eu sem ac lorem pharetra ultrices at volutpat lectus. Donec hendrerit quam nibh, at gravida quam porta in. Pellentesque suscipit maximus erat nec interdum. Ut quis quam felis. Sed in aliquam libero, ac ultricies nunc. Pellentesque et urna sit amet ipsum efficitur tempor sed euismod orci. 

Cras cursus elit nulla, sit amet convallis odio ultricies ut. Donec convallis nibh in cursus volutpat. Maecenas sed augue sed est cursus tempor. Fusce id arcu rhoncus, tristique nulla id, faucibus ex. Ut nunc velit, efficitur eget risus vitae, facilisis sagittis felis. Fusce at nisi turpis. Pellentesque dapibus ante a diam tincidunt pulvinar. Maecenas fermentum aliquet tincidunt. Nullam porta venenatis mi nec imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.`

console.log("Lorem ipsum text", longtext)
let palabras = longtext.split(" ")
console.log("Number of words is", palabras.length)

let contadorET = 0
for (let palabra of palabras){
    if (palabra === "et"){
        contadorET += 1;
    }
}
console.log("The word et is repeated", contadorET, "times")

let frase = "No 'X' in Nixon"
console.log (frase)

let fraseNormal = frase.toLowerCase().replace(/[^a-z0-9]/g, "");

let reversed = fraseNormal.split("").reverse().join("");


if (fraseNormal === reversed) {
  console.log("Es un palíndromo");
} else {
  console.log("No es un palíndromo");
}