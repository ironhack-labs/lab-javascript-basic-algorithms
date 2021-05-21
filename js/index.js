
// Iteration 1: Names and Input
let hacker1 = "Francisco Amaral"
let hacker2 = "Francisco Amaral"
let test = " "
let backwords = " "

console.log(`The driver´s name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver 1 has the longest name, it has ${hacker1.length} characters`)
}
else if(hacker2.length > hacker1.length) {
    console.log(`The driver 2 has the longest name, it ${hacker2.length} characters`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}





// Iteration 3: Loops
for(i = 0; i <= hacker1.length; i++){
    test += hacker1[i] + " "
}
console.log(test.toUpperCase())

for(let i = hacker2.length -1; i>=0; i--){
    backwords += hacker2[i]
}
console.log(backwords)

// BONUS 1 
let lorem = "Lorem etet"

let count = 0

console.log(lorem.split(" ").length)
 
for(let i= 0; i< lorem.length; i++){
    if(lorem[i] === "e" && lorem[i+1] === "t" ){
        count+= 1
    }
    
}
console.log(count)

//BONUS 2

let phraseToCheck = "No 'x' in Nixon"

let phraseToCheckBack = ""
let phraseClear = ""
for(let i = 0; i < phraseToCheck.length; i+=1){
    if(phraseToCheck.charAt(i).toLowerCase() >= "a" && phraseToCheck.charAt(i).toLowerCase() <= "z")
    {
        phraseClear+=phraseToCheck[i].toLowerCase()
    }
}
for(let i=phraseClear.length -1; i >= 0; i--){
    phraseToCheckBack += phraseClear[i] 
    
    

}
console.log(phraseClear)
console.log(phraseToCheckBack)
if(phraseToCheckBack === phraseClear){
    console.log("this word is palindrome")
}
else{
    console.log("this word is not palindrome")
}

