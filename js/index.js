// Iteration 1: Names and Input
let hacker1 = "Kevin"
let hacker2 = "Vidal"

console.log(`The driver´s name is ${hacker1}`)

console.log(`The navigator´s name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length}.`)
  } 
  else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  }
  else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
  }

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split("").join(" "));
console.log(hacker2.split("").reverse().join(""))

if(hacker1 > hacker2){
  console.log("The driver´s name goes first")
}
else if (hacker2 > hacker1){
  console.log("Yo, the navigator goes first definitely.")
} 
else{
  console.log("What?! You both have the same name?")
}

let paragraphs = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was et et popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was et et popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was et et popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

//Bonus 1
console.log("El numero de palabras en el parrafo es: " + paragraphs.split(" ").length);

let arregloParagraphs = paragraphs.split(" ");
let counterEt = 0;

for(let i = 0; i < arregloParagraphs.length; i++) {
  if (arregloParagraphs[i] === "et"){
      counterEt += 1;
  }
}
console.log("El numero de veces que aparece la palabra es: " + counterEt);

//Bonus 2
let phraseToCheck = "A man a plan a canal Panama";
let newString = "";


phraseToCheck = phraseToCheck.replace(/\s/g, '')

for (let i = phraseToCheck.length -1; i >= 0 ; i--){
  newString += phraseToCheck[i]
}
if(phraseToCheck.toLowerCase() === newString.toLowerCase()){
  console.log("It´s a palindrome!")
} else{
  console.log("It´s not a palindrome!")
}

