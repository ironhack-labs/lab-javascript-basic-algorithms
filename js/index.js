// Iteration 1: Names and Input
let hacker1= "mateo";
console.log(`The driver's name is: ${hacker1}`)
let hacker2= "lucio";
console.log(`"The navigator's name is: ${hacker2}`)

// Iteration 2: Conditionals
if( hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has  ${hacker1.length} characters.`);
}else if(hacker2.length > hacker1.length){
 console.log(`It seems that the navigator has the longest name, it has: ${hacker2.length} characters.`)
}else{
  console.log(`Wow, you both have equally long name: ${hacker1.length} characters.`)
}

// Iteration 3: Loops

// Iteration 3.1

let driverCapitals = ""
for(var i=0; i< hacker1.length; i++){
  driverCapitals = driversCapitals + hacker1[i].toUpperCase();
}
console.log(driverCapitals)

// Iteration 3.2  

let reversedName = ""
for(var i=hacker2.length - 1; i >= 0; i--){
 reversedName = reversedName + hacker2[i]
}
onsole.log("reversedName", reversedName)

//lexicographic

for (let i = 0; i < hacker1.length; i++) {
  if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?")
    break;
  } else if (hacker1[i] < hacker2[i]) {
    console.log(`The driver ${hacker1} goes first.`);
    break;
  } else if (hacker2[i] < hacker1[i]) {
    console.log(`Yo, the navigator ${hacker2} goes first definitely.`)
    break;
  }
}

// Bonus 1: Iorem Ipsum

let ipsumStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet est at justo tempor mollis. Aliquam consequat lacinia interdum. Fusce sodales dui a elit pulvinar ornare. Integer ullamcorper nunc vel finibus venenatis. Sed lectus velit, lacinia non posuere a, porta fringilla turpis. Cras sagittis erat malesuada risus posuere fringilla. Etiam vulputate dolor metus, in pharetra velit dictum non. Vivamus eu augue nec est tempus viverra. Phasellus eu augue volutpat, fermentum risus et, dapibus purus. Quisque vel augue mauris. Maecenas mattis ipsum sit amet metus dictum, quis pharetra enim cursus. Sed ac ullamcorper turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. In consectetur diam ac turpis malesuada rutrum. Sed porta nulla id enim vulputate, eu tristique tortor cursus."

// to count all words
let wordCount = 1;
for (let i = 0; i < ipsumStr.length; i++) {
  if (ipsumStr[i] === " ") {
    wordCount++
  }
}
console.log("Amount of words: " + wordCount)

// to count only "et" words
let etCount = 0;
for (let i = 0; i < ipsumStr.length; i++) {
  if (ipsumStr[i] === "e" && ipsumStr[i + 1] === "t") {
    etCount++
  }
}
console.log("Amount of et: " + etCount)

// Bonus 2: Palindrome
  
let phraseToCheck = "put it up";

var reverse = phraseTocheck.split("").reverse().join("");

  
  if(phraseToCheck == reverse){
    console.log('is a palindrome')
  }

  


