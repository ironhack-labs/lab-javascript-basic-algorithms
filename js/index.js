// Iteration 1: Names and Input
const hacker1 = "Mario"
console.log(`The driver's name is ${hacker1}` )
const hacker2 = "Luigi"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) { 
    console.log(`The driver has the longest name, it has ${hacker1.lenght} characters`)  
  }
  else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
  
  }
  else { console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
  }
  

// Iteration 3: Loops
let driverUppercaseName = "";
for (let i = 0; i < hacker1.length ; i++) {
  driverUppercaseName += hacker1[i].toUpperCase() + " ";
 }
 console.log(driverUppercaseName)

let navigatorInverseName= ""
 for (let i = hacker2.length-1; i >= 0  ; i--) {
  navigatorInverseName += hacker2[i] ;
 }
 console.log(navigatorInverseName)

const namesOrder = hacker1.localeCompare(hacker2)


   if (namesOrder === -1) { 
        console.log (`The driver's name goes first.`)}
     else if (namesOrder === 1) {
       console.log (`Yo, the navigator goes first definitely.`)}
     else {
       console.log(`What?! You both have the same name?`)
     }
 
//Bonus 1

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed mi facilisis, vulputate nunc id, aliquam diam. Integer elit diam, rutrum convallis felis non, egestas tincidunt tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis feugiat tincidunt lacus non accumsan. In hac habitasse platea dictumst. Morbi ipsum leo, tempor vel mattis vel, lobortis non diam. Pellentesque ac nisi pulvinar, pellentesque odio pellentesque, consequat massa. Maecenas at lectus orci. Aenean aliquam tempor ex maximus tincidunt. Nunc tempor auctor est tincidunt rutrum. Suspendisse porttitor mi risus, sit amet tempus mi accumsan a. Phasellus efficitur magna sed porttitor pulvinar. Aliquam vel bibendum nulla, sed fringilla eros. Cras convallis consequat iaculis. Sed quis ligula lorem. Pellentesque id lobortis elit, et fermentum quam. Nam sagittis id erat eget condimentum. Morbi pharetra sollicitudin tristique. Proin metus diam, imperdiet sed lacinia quis, lacinia at nisi. Ut a nulla quis ex tempus tincidunt. Ut sit amet feugiat nunc. Vestibulum cursus mauris est, ut convallis lacus blandit vel. Proin id varius libero. Aenean id risus vestibulum erat fringilla fermentum. Phasellus lobortis risus ac dui laoreet bibendum. Morbi volutpat sapien est, semper efficitur mauris feugiat nec. Nam tincidunt rutrum ipsum, id laoreet nulla malesuada tincidunt. Nam ut lorem est. Donec ultrices at elit id tristique. Phasellus luctus diam orci, dignissim tincidunt nunc fermentum sed. Sed vitae egestas est, eget tempus ipsum. Aliquam lacus sem, auctor quis dui a, interdum ullamcorper ante. Cras gravida convallis urna, sit amet auctor leo facilisis in. Integer sollicitudin gravida diam non tempus. Nam quis tempor nibh, scelerisque commodo nibh. In hac habitasse platea dictumst."

let wordsNumber = 0
for (i = 0; i < loremIpsum.length; i++){
 if (loremIpsum[i] != " "){
   wordsNumber ++
 }

}

console.log(wordsNumber)

let countWordEt = 0
for (i = 0; i < loremIpsum.length; i++){
 if (loremIpsum[i] === "et") {
    countWordEt ++
  }
}
console.log(countWordEt)

//Bonus2
const palindrome ="step on no pets"

let palindromeInverse = ""
for (i = palindrome.length -1; i >= 0; i--){
 palindromeInverse += palindrome[i]
}

if (palindrome == palindromeInverse) {
console.log(`Wow! It seems that your string it's a palindrome!`)}
else {console.log(`Oh! Your string it's not a palindrome`)}