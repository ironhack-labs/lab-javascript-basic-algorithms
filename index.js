
// Iteration 1: Names and Input

let myName = 'Facuss'

console.log(`The driver´s name is: "${myName}"`)

let nameTwo = 'Pepito'

console.log(`The navigator´s name is: "${nameTwo}"`)

// Iteration 2: Conditionals

if(myName.length > nameTwo.length) {
    console.log(`The driver has the longest name, it has ${myName.length} characters`)
} else if (nameTwo.length > myName.length) {
    console.log(`The navigator has the longest name, it has ${nameTwo.length} characters`)
} else if (myName.length == nameTwo.length) {
    console.log(`'Wow, you both have equally long names, ${nameTwo.length || myName.length} characters!'`)
}


// Iteration 3: Loops


let result = myName.toUpperCase().split("").join(' ')
console.log(result)

let result2 = myName.split('').reverse().join('')
console.log(result2)

let result3 = [myName, nameTwo]
console.log(result3.sort())


// Bonus 1

let longText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quaerat at, molestiae eligendi id dolorum fugit, eveniet a vel non quasi tempora quis consectetur quia est debitis! Ipsam, esse ut?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi nesciunt quidem accusamus aperiam eaque harum! Minus possimus ullam ea eligendi doloribus et rerum excepturi vel! Reiciendis nisi inventore iure sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dicta soluta explicabo voluptatum praesentium, aspernatur esse quod nemo iusto, eveniet temporibus possimus quaerat facere minus voluptatem, similique eaque doloremque odit? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nobis sit corporis nesciunt, harum eveniet nam aliquam explicabo officia itaque eligendi autem facere iure tempora excepturi veniam aliquid reiciendis! Aperiam." 

let wordsQuantity = longText.split(' ').length
console.log(`La cantidad de palabras es de: ${wordsQuantity}`)

let etCount = longText.match(/ et /g).length
console.log(etCount)

// Bonus 2

let phraseTocheck = 'neuquen'

for (let i = phraseTocheck.length - 1; i >= 0; i--){
   let reversedString = ''
   result = reversedString + phraseTocheck[i];
   console.log(result) 
}

