// Iteration 1: Names and Input

const hacker1 = "Josh"
console.log(`The drivers name is ${hacker1}`)

const hacker2 = "Bernd"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals

console.log(`The navigator has the longest name, it has ${hacker2.length} characters`)

// Iteration 3: Loops

//3.1
let inCapitals = "";
for (let i = 0; i < hacker1.length; i++) {
  inCapitals += `${hacker1[i].toUpperCase()} `;
}
console.log(inCapitals);

//3.2
let backwardsName = "";
for (let i = hacker2.length; i > 0; i--) {
  backwardsName += `${hacker2[i - 1]}`;
}
console.log(backwardsName);

//3.3
if (hacker1.toUpperCase() < hacker2.toUpperCase()) {
  console.log("The driver's name goes first.");
} else if (hacker1.toUpperCase() > hacker2.toUpperCase()) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name? Crazy...");
}


// Bonus 1

const lorum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius diam nec vestibulum consectetur. Nulla non nisi rutrum, sodales lectus ut, fringilla tortor. Quisque ipsum ipsum, semper ac ultrices fringilla, aliquam id odio. Vivamus libero justo, euismod eget tempor a, pretium eu tellus. Sed ac vehicula risus. Fusce accumsan facilisis sem non mollis. Phasellus non tempor nulla. Curabitur mollis eleifend odio, eget porta magna sagittis eu. Donec eu magna venenatis, volutpat leo eget, tristique enim. Etiam placerat in nulla nec congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare ex vitae congue aliquam. Suspendisse rhoncus est ut odio ullamcorper aliquet. Praesent sit amet elementum tortor, ut mollis nibh. Integer facilisis condimentum vestibulum. Nulla sit amet vehicula tellus. Suspendisse maximus nulla nibh, ac feugiat odio viverra sit amet. Phasellus id sapien luctus, suscipit dui at, tempus erat. Morbi nec feugiat dui, non accumsan augue. Mauris ut velit est. Cras magna lorem, commodo non dui eget, lacinia pulvinar purus. Donec placerat turpis eu scelerisque consectetur. Nam vulputate ut ipsum sit amet auctor. Vestibulum erat ligula, porta non blandit vitae, interdum vel ipsum. Vestibulum non fermentum nisi. Nunc faucibus urna a sem vestibulum, vel sodales lectus mollis. Duis dapibus tincidunt nisl non lacinia. Sed bibendum porttitor sem volutpat eleifend. Curabitur at felis congue, faucibus dui nec, condimentum nibh. Sed nec porttitor neque, quis fermentum tellus. Mauris lacinia lectus purus, pulvinar accumsan lorem vehicula non. Mauris pulvinar ultricies tincidunt. Integer vulputate orci vitae risus ullamcorper tristique. Nam ac semper libero, eu tincidunt augue. Etiam cursus lacus in orci aliquet ullamcorper. In dictum orci quis ipsum rhoncus, non cursus eros tincidunt. Morbi accumsan ultrices mauris. Cras volutpat porta nunc, et maximus enim ullamcorper nec."

const lorumCount = lorum.split(" ").length

console.log(lorumCount)

//Bonus 2

//Enter phrase or text to check here:
const phraseToCheck = "put it up"

let phraseConcat = ""
let phraseReversed = ""

for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] === " ") {
    continue
  } else {
 phraseConcat += phraseToCheck[i]
      }
}

for (let i = phraseToCheck.length; i > 0; i--) {
  if (phraseToCheck[i - 1] === " ") {
    continue
  } else {
 phraseReversed += phraseToCheck[i -1]
      }
}

if (phraseConcat.toLowerCase() === phraseReversed.toLowerCase()) {
  console.log("Congradulations, you've found a palindrome.")
} else {
  console.log("Sorry, that's not a palindrome. Try again.")
}