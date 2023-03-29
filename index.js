// Iteration 1: Names and Input


let driver = "Ahmed"
console.log(`The driver's name is ${driver}`)

let navigator = "Heba"
console.log(`The navigator's name is ${navigator}`) 






// Iteration 2: Conditionals



if (driver.length > navigator.length) 
  console.log(`The driver has the longest name, it has ${driver.length} characters.`)

else if (driver.length < navigator.length)
  console.log(`It seems that the navigator has the longest name, it has ${navigator.length} characters.`)

else 
  console.log(`Wow, you both have equally long names, ${driver.length} characters!`)



// Iteration 3: Loops


let navigatorUpper = "Heba"
let spaceNavigator = " ";

for (let i=0; i <navigatorUpper.length; i++){
spaceNavigator += navigatorUpper[i].toUpperCase() + " "; 
}

console.log(spaceNavigator);


let hacker3 = "Heba"
 reverse3 = ""


for ( let i= hacker3.length - 1; i >= 0; i--) {
  reverse3 += hacker3[i];
}

console.log(`reverse3`)



let driver1 = "Ahmed"
let navigator1 = "Heba"
let names = [driver1, navigator1]

names.sort();
if( names[0] === driver1){
  console.log("The driver's name goes first.");
}
else if (names[0] === navigator1){
  console.log("Yo, the navigator goes first, definitely.")
}
else {
  console.log("What?! You both have the same name?")
}
 
let longText = "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet comes from a line in section 1.10.32.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."




let wordcount = 0;
let wordArray = longText.split(" ");


for (let i = 0; i < longText.length; i++){
  if (longText[i] === " ") {
    wordcount++;
  }
}
console.log(wordcount);



let etCount = 0;

for (let i = 0; i < wordArray.length; i++){
  if (wordArray[i] === "et") {
    etCount++;
  }
}

console.log(etCount);


