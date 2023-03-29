// Iteration 1: Names and Input
let hacker1 = "Aziya"
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "Oguzhan"
console.log(`The driver's name is ${hacker2}`)


// Iteration 2: Conditionals
let hack1Length=hacker1.length
let hack2Length=hacker2.length
if(hack1Length>hack2Length){
  console.log(`The Driver has the longest name, it has ${hack1Length} characters.`)
}
else if(hack2Length>hack1Length){
  console.log(`It seems that the navigator has the longest name, it has ${hack2Length} characters.`)
}
else{
  console.log(`Wow, you both have equally long names, ${hack1Length} characters!.`)
}

// Iteration 3: Loops
//first 1
let newName = "";

for (let i = 0; i < hacker1.length; i++) {
    newName += hacker1[i].toUpperCase() + " ";
}

console.log(newName.trim());

//second one
new1Name=""
for (j=hacker2.length-1;j>=0;j--){
  new1Name += hacker2[j]
}
console.log(new1Name)

let minLength = Math.min(hacker1.length, hacker2.length);

//lexicograpic

for (let i = 0; i < minLength; i++) {
  if (hacker1[i] < hacker2[i]) {
    console.log("The driver's name goes first.");
    break;
  } else if (hacker2[i] < hacker1[i]) {
    console.log("Yo, the navigator goes first, definitely.");
    break;
  }

  if (i == minLength - 1) {
    if (hacker1.length < hacker2.length) {
      console.log("The driver's name goes first.");
    } else if (hacker2.length < hacker1.length) {
      console.log("Yo, the navigator goes first, definitely.");
    } else {
      console.log("What?! You both have the same name?");
    }
  }
}
//bonus1 -  1

longText =`Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
count=0
for (k=0;k<longText.length;k++){
  if (longText[k] !== " "){
    count += 1
  }
    
}
console.log(count)

//bonus1 - et

count1=0
for (l=0;l<longText.length;l++){
   if (longText[l] === "e" && longText[l+1] === "t"){
    count1 += 1
  }
    
}
console.log(count1)

//bonus2 - 

let phraseToCheck = "rar"

let lengthCheck = phraseToCheck.length
for(i=0;i<lengthCheck;i++){
  if (phraseToCheck[i] === phraseToCheck[lengthCheck-1]){
    console.log("It is a palindrome")
  }
  else{
    console.log("Not a palindrome")
  }
}
