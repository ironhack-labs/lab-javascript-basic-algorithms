// Iteration 1: Names and Input
let hacker1 = "XXXX";
console.log(`The driver's name is ${hacker1}`)
let hacker2 = "YYYY";
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`) 
} else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else if (hacker1.length === hacker2.length) {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let separateHacker1 = "";
 
for(let i = 0; i <= hacker1.length-1; i++) {
  separateHacker1 += hacker1[i] + " "   
} 
let upperHacker1 = separateHacker1.toUpperCase().slice(0, separateHacker1.length -1)
console.log(upperHacker1)


let separateHacker2 = "";

for(let i = hacker2.length -1; i >= 0; i--) {
  separateHacker2 += hacker2[i] 
}
let upperHacker2 = separateHacker2.toUpperCase()
 console.log(upperHacker2)

if (hacker1.localeCompare(hacker2) === -1) {
  console.log(`The driver's name goes first.`)
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log(`Yo, the navigator goes first, definitely.`)
} else if (hacker1.localeCompare(hacker2) === 0) {
  console.log(`What?! You both have the same name?`)
}

// Bonus 1 : 

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A cras semper auctor neque vitae tempus quam. Tincidunt praesent semper feugiat nibh. Malesuada fames ac turpis egestas sed tempus. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Semper viverra nam libero justo laoreet sit amet. Cursus sit amet dictum sit. Sed libero enim sed faucibus turpis. Pharetra pharetra massa massa ultricies mi quis hendrerit. Lacinia at quis risus sed vulputate odio ut enim et."

function countWord(longText) {
  let counter = 0;
  for(let i = 0; i<= longText.length -1; i++) {
    if(longText[i] === " ")  
    counter++; 
  }
  return counter;
}

console.log(countWord(longText));

function countET(longText) {
  let counter = 0;
  for(let i = 0; i<= longText.length -3; i++) {
    const char1 = longText[i];
    const char2 = longText[i + 1];
    const char3 = longText[i + 2];
    const char4 = longText[i + 3];

    if(char1 === " " && char2 === "e" && char3 === "t" && (char4 === " " || char4 === "," || char4  === "."))

    counter++; 
  }
  return counter;
}
console.log(countET(longText));

