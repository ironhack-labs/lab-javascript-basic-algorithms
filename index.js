// Iteration 1: Names and Input
const hacker1 = "Alex";
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "Merna";
console.log(`The navigators's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
  }
else if (hacker1.length < hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length || hacker2.length} characters!`)
}

// Iteration 3: Loops
const hacker1 = "Alex";
console.log(hacker1.split("").join(" ").toUpperCase())
const hacker2 = "Merna";
console.log(hacker2.split("").reverse().join(""))

const result = hacker1.localeCompare(hacker2);

if (result < 0) {
  console.log(`The driver's name goes first.`)
  }
else if (result > 0) {
  console.log(`Yo, the navigator goes first, definitely.`)
} else {
  console.log(`What?! You both have the same name?`)
}

//BONUS 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vulputate dignissim pellentesque. Sed sit amet ultrices ex, nec placerat nisl. Proin dui tellus, viverra et efficitur sit amet, pellentesque non quam. Donec bibendum tortor eu elit tempus, nec dignissim felis cursus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec orci enim, ultrices eget elementum eget, efficitur non quam. Quisque commodo erat ut purus fermentum venenatis. Aenean placerat tortor quam. Etiam hendrerit ultrices risus in rhoncus. Fusce congue ex at tincidunt malesuada. Morbi orci velit, consectetur eget odio nec, hendrerit dapibus libero. Vestibulum dictum eros eu placerat volutpat. Vestibulum sollicitudin odio nulla, in aliquam ligula dapibus sed. Proin fermentum diam ut eros auctor, a volutpat purus blandit. Vestibulum maximus ullamcorper felis at varius. Proin purus lacus, rhoncus eget ligula vitae, hendrerit vestibulum augue. Morbi consectetur arcu eu sapien tincidunt, at vestibulum mauris congue. Vestibulum congue odio felis, id porta lorem bibendum ut. Ut quis euismod risus. Duis quis auctor nisi. Maecenas sollicitudin purus neque, in volutpat risus venenatis id. Ut consequat viverra eros, et volutpat dui venenatis id. Proin iaculis pretium ipsum quis sagittis. Suspendisse potenti. Donec id urna sed arcu euismod mollis et et leo. Curabitur vitae odio in turpis rutrum molestie. Sed ultrices est metus, id fringilla arcu tincidunt sed. Curabitur hendrerit, ipsum sit amet condimentum malesuada, ex quam varius eros, eu ultricies dui nisi sed nisl. Sed et lacinia purus, id placerat arcu. Sed non mauris velit. Ut nisi libero, posuere maximus porta vitae, volutpat non massa. Quisque convallis varius mauris vel porttitor. Aenean non gravida magna. Nullam feugiat dictum urna, non tristique massa pretium eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer posuere sodales erat, vel pharetra massa mollis nec. Praesent malesuada vel est vel accumsan."

function countWords (text) {
  const words = text.split(" ");
  let counter = 0;
  for (let i = 0; i < words.length; i++) {
    counter++
  }
  return counter
}

console.log(countWords(longText));


const words = longText.split(" et ");
console.log(words.length -1)

//BONUS 2

// Solution 1

const phraseToCheck = "hannah";

if (phraseToCheck.split("").reverse().join("") === phraseToCheck) {
  console.log("Palindrome")
} else {
  console.log("Not palindrome")
}

// Solution 2

const phraseToCheck2 = "Hannah";
let reversed = "";
for (let i = phraseToCheck2.length - 1; i >= 0; i--) {
  reversed = phraseToCheck2[i];
  console.log(reversed) 
}
  if (reversed === phraseToCheck2) {
    console.log("Palindrome")
}   
  else {
    console.log("Not palindrome")
}
  
