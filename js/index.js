// Iteration 1: Names and Input
//1.1
const hacker1 = "Alexis";
//1.2
console.log(`The driver's name is ${hacker1}`);
//1.3
const hacker2 = "Alan";
//1.4
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
const longitud1 = hacker1.length;
const longitud2 = hacker2.length;
console.log (longitud1,longitud2)
if (longitud1>longitud2) {
  console.log (`The driver has the longest name, it has ${longitud1} characters.`)
} else if (longitud1<longitud2){
  console.log (`It seems that the navigator has the longest name, it has ${longitud2} characters.`)
} else if (longitud1===longitud2){
  console.log (`Wow, you both have equally long names, ${longitud1} characters!`)
}

// Iteration 3: Loops
//3.1

const driver = hacker1.toUpperCase().split("").join(" ").replace(/\s+/g, " ");
console.log(driver);

//3.2

function reverseString(s){
    return s.split("").reverse().join("");
}
reverseString(hacker2);
console.log(reverseString(hacker2));

//3.3

const comparativaHackers = hacker1.localeCompare(hacker2)

if (comparativaHackers === 1) {
  console.log("Yo, the navigator goes first definitely.")
} else if (comparativaHackers === -1) {
  console.log("The driver's name goes first")
} else if (comparativaHackers === 0) {
  console.log("What?! You both have the same name?") }

  // BONUS 1

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in feugiat risus, at pulvinar nibh. Praesent enim est, congue non sem a, vulputate ullamcorper nisi. Fusce hendrerit aliquet dolor ut bibendum. Sed interdum, massa ac iaculis placerat, neque ipsum ultrices dolor, id fermentum tellus enim ac arcu. Pellentesque tempus, lacus sit amet tincidunt condimentum, nibh est maximus nisl, sed iaculis nisl eros nec est. Duis sollicitudin, risus ut suscipit mattis, eros nisi fringilla massa, non condimentum libero sapien euismod est. Donec dui enim, pulvinar tincidunt interdum non, blandit et mauris. Suspendisse sit amet enim eget nibh maximus scelerisque sit amet nec ante. Fusce ut erat varius, malesuada augue sed, sodales nibh. Donec elit lectus, pretium non tempor non, vulputate a ipsum. Suspendisse quis mi sit amet diam dictum fermentum nec in neque. Morbi placerat, nunc vel ultrices feugiat, ipsum orci suscipit diam, sed lobortis felis tellus nec mauris. In sed quam dignissim, vestibulum sem sed, porttitor dui. Fusce vitae sagittis erat. Integer egestas ligula et est finibus blandit. Suspendisse at tellus sed velit maximus commodo sit amet sit amet magna. Nulla orci sapien, euismod ut ante id, gravida feugiat ligula. Vivamus ornare bibendum condimentum. Integer a condimentum enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer porttitor semper metus. Cras eget aliquet est. Cras mollis metus et nulla rhoncus viverra. Proin faucibus tempus libero, eget aliquam nunc tincidunt eu. Donec ornare, libero eget pharetra bibendum, neque lacus faucibus tortor, in imperdiet odio ante at turpis. Donec et tellus scelerisque, ultrices leo nec, consequat magna. Aenean consequat pellentesque velit, at mattis elit vehicula non. Vestibulum faucibus est in eleifend hendrerit. Vivamus dui mauris, accumsan vitae euismod ut, tristique et eros."

const words = lorem.match(/(\w+)/g).length;
console.log(words);

const palabraEt = lorem.match(/ et /g).length;
console.log(palabraEt)

// BONUS 2

const phraseToCheck = "Race car"
phrasewospaces = phraseToCheck.replace(/ +/g, "")
console.log(phrasewospaces)

for (let i=0;i<=phrasewospaces.length;i++){
  console.log(phrasewospaces[i]==phrasewospaces[phrasewospaces.length-i])
}