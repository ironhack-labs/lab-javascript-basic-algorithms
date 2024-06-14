// Iteration 1: Names and Input
let hacker1 = "Daniel Martel"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Mary Judi Kavitha"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name,it has ${hacker1.length} characters`)
    
}

else if(hacker2.length>hacker1.length){
       console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else{
    console.log(`Wow, you both have equally long names with ${hacker1.length}`)
}
// Iteration 3: Loops

let spacedriver=""
for(let i=0;  i<hacker1.length; i++){
    spacedriver+=hacker1[i].toUpperCase() +" "
    
}
console.log(spacedriver)

let reversename=""
for(let i=hacker2.length-1; i>=0; i--){
    reversename+=hacker2[i]
}
console.log(reversename)

let compare1 =hacker1.localeCompare(hacker2)

if(compare1===-1){
    console.log("The driver's name goes first")
}
else if(compare1===1){
    console.log("Yo, the navigator goes first, definitely.")
}
else{
    console.log("What?! You both have the same name")
}

//Bonus 1 
let longText = "Lorem Ipsum is simply dummy text of the printing and et typesetting industry. Lorem et Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
let words = 0;
let et = 0;
for(let i=0; i<longText.length; i++){
    if(longText[i]==" "){
        words++
    }
    if(longText.slice(i,i+4)==" et "){
        et++
    }
}
console.log(words+1)
console.log(et)

//Bonus 2
let phraseToCheck = palindrome