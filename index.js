// Iteration 1: Names and Input
const hacker1 = "Ruben"
console.log(`The driver's name is ${hacker1}`)
const hacker2 = "Pedro"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if( hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker11.length} characters.`)
} else if(hacker1.length == hacker2.length){
    console.log(`Wow, you both have equally long names, ${hacker1.length}characters!`)

} else{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}



// Iteration 3: Loops
<<<<<<< HEAD
let hacker1 = "ruben"
driverUppercased = hacker1.toUpperCase()
for (let i = 0; i< hacker1.length; i++)

    
    console.log(driverUppercased [i])
=======
let nombreEspacios = ""

for(let i=0; i < hacker1.length; i++){

    nombreEspacios = nombreEspacios+ hacker1[i].toUpperCase() + " ";
    
}

console.log(nombreEspacios) 
let result = ""
for(let  i = hacker2.length ; i>0; i--){
   result+= hacker2[i -1]
}
console.log(result)


if(hacker1 > hacker2){
    console.log("The driver's name goes first." )
} else if (hacker1 < hacker2){
    console.log("Yo, the navigator goes first, definitely. ")
}else{
    console.log("What?! You both have the same name?")
}

//BONUS
//bonus 1
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a gravida massa. Nulla at sem ac purus commodo egestas sit amet vel quam. Donec et augue a lorem blandit vehicula id ut purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras eget eros sit amet turpis luctus fermentum. Sed mollis, urna ac tincidunt facilisis, elit lectus blandit lorem, non semper ipsum dui a metus. Phasellus dolor lectus, egestas non blandit ut, eleifend nec orci. Phasellus aliquam, sapien ac auctor scelerisque, urna elit pretium nisl, vitae vehicula tellus mauris a dolor. Fusce tincidunt nibh metus, viverra accumsan felis finibus vel. Pellentesque in tempor arcu.Aliquam ullamcorper sem sit amet scelerisque mollis. Fusce vulputate congue venenatis. Donec in tincidunt turpis, nec luctus nisi. Nulla aliquet libero et nulla egestas sagittis. Curabitur feugiat metus risus, eget iaculis felis ullamcorper quis. Nam tempor feugiat lectus et tincidunt. Aenean vitae justo ullamcorper, pulvinar tellus quis, posuere urna. Suspendisse sem magna, porttitor a varius a, dignissim sit amet velit. Maecenas vitae odio finibus, tincidunt odio at, pretium justo.Aliquam augue nulla, dictum faucibus placerat non, ultrices sit amet est. Ut facilisis dolor quis est imperdiet, eu placerat lorem placerat. Nullam vel magna lacus. Proin sapien felis, tristique eu nulla at, consequat mattis mauris. Nam nec lorem quis odio gravida elementum ac viverra nisl. Donec lobortis orci quis magna semper accumsan. Fusce sem enim, hendrerit vitae velit quis, sollicitudin imperdiet nulla. Sed consectetur quis tellus sollicitudin scelerisque. Sed nec tempus sapien, id eleifend turpis. Sed nec felis imperdiet velit scelerisque pharetra. Suspendisse eu nunc vel mauris placerat pulvinar. Fusce quis nunc ac nibh cursus rhoncus eget ut tellus. "

console.log(longText.length)
let etCounter = 0
for(let i = 0; i < longText.length; i++){
   let char = longText[i] + longText[i+1]
   if(char === "et"){
    etCounter++
   }

}
console.log(etCounter)

//bonus 2

let phraseToCheck= "A man a plan a canal Panama"
let phraseToCheckLower = phraseToCheck.toLowerCase()
let phraseToCheckLimpio= ""
for(let i= 0; i < phraseToCheckLower.length; i++){
    phraseToCheckLimpio= phraseToCheckLower[i]
    if(phraseToCheckLimpio === " "){
    continue
    }
    
} 
console.log(phraseToCheckLimpio)

/*let phraseToCheckReversed = ""
for(let  i = phraseToCheck.length ; i>0; i--){
   phraseToCheckReversed+= phraseToCheck[i -1]
if (phraseToCheck === phraseToCheckReversed){
    console.log(`${phraseToCheck} is a Palindrome`)
} else{
    console.log(`${phraseToCheck} is not a Palindrome`)
    }
}*/




>>>>>>> e76d77c8d4499993c440d43dc48e657e625afa68
