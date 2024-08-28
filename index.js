// Iteration 1: Names and Input

const hacker1 = 'Kevin'
const hacker2 = 'Alexandro'

console.log(`The driver's name ${hacker1}`)
console.log(`The navigator's name ${hacker2}`)
// Iteration 2: Conditionals

const hackerLength1 = hacker1.length
const hackerLength2 = hacker2.length

if (hackerLength1 > hackerLength2) {
    console.log(`The driver has the longest name, it has ${hackerLength1} characters.`)
}
else if ( hackerLength1 < hackerLength2) {
    console.log( `It seems that the navigator has the longest name, it has ${hackerLength2} characters.`)
}
else {
    console.log(  `Wow, you both have equally long names, ${hackerLength1} characters!.`)
}
// Iteration 3: Loops
let formattedName = ""
let reverseName = ""
for (let i=0; i < hackerLength1; i++) {
    formattedName += hacker1[i].toUpperCase();
  if (i < hackerLength1 - 1) {
    formattedName += ' ';
  }
}
console.log(formattedName)

for (let i = hackerLength1; i > 0; i--) {
    reverseName += hacker1[i - 1]
}
console.log(reverseName)

for(let i = 0; i < 1; i++){
    if (hacker1 < hacker2){
        console.log("The driver's name goes first.")
    
    } else if (hacker1 > hacker2){
        console.log("Yo, the navigator goes first, definitely.")
    } else {
        console.log("What?! You both have the same name?")
    }
    }
    




// BONUS 

const longText = 

"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pretium est nec rhoncus fermentum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ornare eros ac gravida lobortis. Mauris rhoncus nibh a faucibus consectetur. Ut egestas, diam et suscipit fermentum, metus urna sollicitudin augue, non accumsan orci tellus vel elit. Nunc ultrices malesuada bibendum. Proin quis tellus a eros aliquet viverra. In nulla ante, posuere facilisis mollis eu, tincidunt eget nulla. Duis blandit quam urna, at porttitor ante imperdiet aliquet. Vestibulum iaculis, ligula condimentum venenatis tincidunt, dolor massa commodo tortor, posuere vehicula justo mi at ligula. In ultricies interdum elit, fermentum consequat eros pharetra id. Sed iaculis congue neque porta tincidunt. Mauris odio sapien, tristique id placerat nec, convallis non turpis. Integer non libero non risus pellentesque dignissim. Vivamus euismod nunc sit amet purus molestie, eu laoreet sapien tincidunt. Nulla eleifend mauris quis lorem posuere, sed lobortis quam elementum. Aenean blandit fermentum eros, vitae porttitor velit elementum vitae. Fusce interdum lacus vel arcu molestie venenatis. Mauris mollis dignissim imperdiet. Sed imperdiet sed lectus quis sollicitudin. Maecenas blandit tincidunt congue. Mauris pretium, purus bibendum laoreet porttitor, elit mauris egestas orci, sed laoreet metus diam vel odio. Mauris feugiat ipsum eros, non bibendum sapien sagittis id. Curabitur id nunc nec felis maximus auctor. Donec blandit turpis non egestas dictum. Nullam tincidunt a quam id faucibus. Pellentesque sodales dui lorem, et dignissim sapien tristique ut. Donec iaculis enim massa, in pretium metus efficitur eget."



let numberOfTimes = 0

let numberOfWord = 0

for (let i=0; i < longText.length; i++){
  if (longText[i] === " ") {
    numberOfWord += 1
  }
}
console.log(numberOfWord + 1) 


for (i = 0; i < longText.length; i++){
    if (longText[i]+longText[i+1]+longText[i+2]=== ' et'){
        numberOfTimes += 0
    }
}
console.log(numberOfTimes)


let reverse = "";
let phraseCheck = "A man a plan a canal Panama"
phraseCheck = phraseCheck.toLowerCase().replace(/\s+/g, '');
for ( let i = phraseCheck.length - 1; i >= 0; i--){
  reverse += phraseCheck[i];
}
console.log(reverse === phraseCheck)