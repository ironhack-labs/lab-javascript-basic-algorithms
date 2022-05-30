// Iteration 1: Names and Input

let hacker1 = "alex";
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "stefan";
console.log(`The navigator's name is ${hacker2}`)


//
// Iteration 2: Conditionals

if(hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  } else if (hacker1.length === hacker2.length)  {
    console.log('Wow, you both have equally long names, XX characters!')
  } else {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2} characters.`)
  }
  

 
// Iteration 3: Loops

for(i = 0; i < hacker1.length; i++) {
    console.log(hacker1[i].toUpperCase() + " ")
  }
  
  for (let i = hacker2.length - 1; i >= 0; i--) {
    console.log(hacker2[i])
  }

if(hacker1.localeCompare(hacker2) == -1) {
    console.log(`The drivers name goes first`) }
    else if (hacker1.localeCompare(hacker2)==1) {
      console.log(`Yo, the navigator goes first definitely.`)
    } else if (hacker1.localeCompare(hacker2) == 0) {
      console.log(`What?! You both have the same name?`)
    }
  
  console.log(hacker1.localeCompare(hacker2));


// Bonus 1

let paragraphs = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`

let counter = 0;
let ets = 0;

for(let i = 0; i < paragraphs.length; i++) {
  if(paragraphs[i-1] == ' ' && paragraphs[i] == 'e' && paragraphs[i+1] == 't' && paragraphs[i+2] == ' ') {
    ets++
  }
  if(paragraphs[i] == ' ') {
    counter++
  }
}

console.log(counter);
console.log(ets)

// Bonus 2

let phraseToCheck = "race car"
let backwards = ''
let newPhrase = ''
for(let i = 0; i < phraseToCheck.length; i++){
  if(phraseToCheck[i] == ' '){
      continue
      }
  else{
    newPhrase += phraseToCheck[i]
  }
}
for(let i = newPhrase.length-1; i>=0;i--){
  backwards += newPhrase[i]
}
if(backwards == newPhrase){
  console.log("This is a palindrome")
}


