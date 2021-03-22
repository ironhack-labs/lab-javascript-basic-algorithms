//Iteration 1: Names and Input
// Declaro las variables y les asigno su "nombre"

let hacker1 = 'German'
let hacker2 = 'German'
//Muestro los nombres en la consola
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

//Iteration 2: Conditionals
//Comparo la longitud de los nombres
if(hacker1.length > hacker2.length){
 console.log(`The driver has the longest name, it has ${hacker1.length} characters.`) 
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}


//Iteration 3: Loops
//Devuelve el nombre del hacker 1 separado por espacios y en mayúsculas.
let driverUpperCase = hacker1.toUpperCase()
let separatedBySpace= ""
for (let i = 0;  i < driverUpperCase.length ; i++){
      separatedBySpace += driverUpperCase[i] +" " 
    }
console.log(separatedBySpace)


//Devuelve el nombre del hacker2 del revés
let reverse = ""
for (let i = hacker2.length-1;  i >= 0 ; i--){
      reverse += hacker2[i]
    }
console.log(reverse)

// Devuelve el orden alfabetico de ambos nombres
hacker1 = hacker1.toLowerCase()
hacker2 = hacker2.toLowerCase()
       if (hacker1.localeCompare(hacker2) < 0){
        console.log("The driver's name goes first.")
       } else if(hacker1.localeCompare(hacker2) > 0){
         console.log("Yo, the navigator goes first definitely.")
       } else{
         console.log("What?! You both have the same name?")
       }
    

//Bonus 1:

let lorum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate risus diam, quis mollis quam efficitur vitae. Proin aliquet id metus ut lacinia. Nam commodo nunc at elit pharetra, id euismod urna vehicula. Phasellus sit amet est sit amet nisi sagittis sagittis et ut magna. Vestibulum felis justo, mattis quis magna id, congue porttitor nisl. Quisque magna dolor, ultrices sed feugiat sed, tristique ut libero. Praesent sed nunc a tellus porttitor mollis eget eu mi. Sed varius odio vel pellentesque scelerisque. Maecenas dignissim risus a metus lacinia accumsan. Maecenas vitae auctor lorem, at fermentum diam. Etiam iaculis non nunc et gravida. Cras ac metus efficitur, vulputate velit a, posuere lorem. Proin sagittis sem at libero luctus euismod.

Integer vel porta leo. Phasellus sed ipsum vel dolor pellentesque porta eleifend congue nisi. Aenean at sodales lectus. Maecenas placerat nisi vestibulum finibus varius. Vivamus id tellus facilisis, lobortis lectus eu, tincidunt massa. Aenean turpis nisl, tincidunt nec maximus eu, ultricies in dolor. Phasellus nec consectetur libero. Mauris tempus nulla ac erat lobortis gravida. Nunc cursus augue eu odio auctor suscipit. Ut vehicula quam a libero malesuada, sed accumsan ante semper. Etiam vel nisl sagittis, varius sem et, consequat risus.

Aenean mollis velit vitae varius scelerisque. Integer venenatis diam diam, vitae fermentum eros tempor vitae. Quisque dictum metus eu erat sagittis ultrices. Nam malesuada velit sed lorem sagittis, et luctus justo volutpat. Curabitur rhoncus orci massa, eu rhoncus libero gravida sed. Nulla vestibulum mauris massa, id dignissim lacus consequat pharetra. Cras nec tortor neque. Ut sed mauris feugiat, imperdiet lacus at, finibus est. Pellentesque nisl nisl, efficitur quis justo at, maximus porta urna. Fusce lacinia finibus massa.`

console.log(`The number of words is ${lorum.split(" ").length}`)

//Bonus 2        No me he quedado satisfecho porque cuando contiene algun signo no puedo compararlo. Tienen que estar las palabras muy bien ordenadas para que se de el Palindrome.
let phraseToCheck = "Amor Roma"
phraseToCheck = phraseToCheck.toLowerCase()
let reversePhrase = ""
for (let i = phraseToCheck.length-1;  i >= 0 ; i--){
      reversePhrase += phraseToCheck[i]
    }
if (phraseToCheck === reversePhrase){
  console.log("Is a Palindrome")
} else {console.log("Is not a Palindrome")}

console.log(reversePhrase)