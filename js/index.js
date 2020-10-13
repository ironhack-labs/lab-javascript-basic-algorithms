// Iteration 1: Names and Input
let hacker1 = "Alberto"
console.log(`"The driver's name is ${hacker1}"`);
let hacker2 = "Ayhan"
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 2: Conditionals
let hacker1 = "Alberto"
console.log(`"The driver's name is ${hacker1}"`);
let hacker2 = "Ayhan"
console.log(`"The navigator's name is ${hacker2}"`);

// Iteration 3: Loops
//3.1
let spacedName = "";
for (i=0; i < hacker1.length; i++) {
  spacedName = spacedName + hacker1[i].toUpperCase() + " ";
}
console.log(spacedName)

//3.2
let reversedName = "";
for (i = hacker1.length - 1; i >= 0; i--) {
  if (i == (hacker1.length - 1)) {
    reversedName = reversedName + hacker1[i].toUpperCase();
  } else {
  reversedName = reversedName + hacker1[i].toLowerCase();
  }
}
console.log(reversedName);

//3.3
let orderedResult = hacker1.localeCompare(hacker2);
if (orderedResult == -1) {
  console.log(`The driver's name goes first.`);
} else if (orderedResult == 1) {
  console.log(`Yo, the navigator goes first definitely.`);
} else if (orderedResult == 0) {
  console.log(`What?! You both have the same name?`);
} else {
  console.log(`Error, try again`)
}


//BONUS
let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius feugiat ornare. Maecenas vestibulum augue nec ultricies auctor. Suspendisse porta pharetra tristique. Cras in nibh elementum, porta ex non, semper lectus. Maecenas et bibendum quam, quis dignissim neque. Vivamus tempor urna risus, ut ultrices orci molestie id. Nunc consectetur, turpis facilisis rhoncus mattis, sapien arcu congue neque, tincidunt ullamcorper lacus dui a elit. Sed lacinia dapibus faucibus. Nunc eget ex at lectus dictum tincidunt. Etiam varius metus est, at faucibus est tristique ac. Fusce nisi risus, cursus a justo id, posuere malesuada libero. Aenean scelerisque velit id suscipit auctor. Ut at enim feugiat, fringilla ante in, aliquet leo. Integer malesuada eleifend facilisis. Fusce vestibulum eu dui malesuada tincidunt. Proin in mattis orci. Aenean faucibus tristique arcu, et tempus urna porta vitae. Pellentesque a libero et ligula efficitur varius vitae in tortor. Nullam pretium id ligula et porttitor. Aenean volutpat leo felis, at malesuada risus hendrerit nec. Nulla hendrerit, est non pellentesque tempor, turpis orci fringilla ligula, sed facilisis ligula diam a leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate, lacus id fringilla fringilla, ipsum diam viverra elit, sed ultricies urna diam eget est. Vivamus auctor non mauris a interdum. Ut pharetra metus nec leo cursus lacinia. Suspendisse quis pretium nulla. Fusce bibendum scelerisque turpis, a iaculis neque finibus sed. Sed sit amet mi ac ante pulvinar sagittis. Nulla facilisi.`

//Bonus 1
let counter = 0
let splitLorem = loremIpsum

let newArray = splitLorem.split(" ")
console.log(`Word count: ${newArray.length} words`)

for (i = 0; i < newArray.length; i++) {
  if (newArray[i] === "et") {
    counter += 1;
  }
}
console.log(`Number of times "et" appears: ${counter}`)

//Bonus 2
let userPhrase = `"A man, a plan, a canal, Panama!"`
let phrase = userPhrase

for (i = 0; i < phrase.length; i++) {
  phrase = phrase.replace(` `, '')
  phrase = phrase.replace(`,`, '')
  phrase = phrase.replace(`!`, '')
  phrase = phrase.replace(`.`, '')
  phrase = phrase.replace(`"`, '')
  phrase = phrase.replace(`'`, '')
  phrase = phrase.replace(`?`, '')
}
phrase = phrase.toLowerCase()
let isPalindrome = false

for (i = 0; i < phrase.length / 2; i++) {
  reverse = (phrase.length - 1) - i
  //console.log(`${i}:${phrase[i]} ; ${reverse}:${phrase[reverse]}`)
  if (i === reverse) {
    break
  } else if (phrase[i] === phrase[reverse]) {
    isPalindrome = true
  } else {
    isPalindrome = false
    break
  }
}
if (isPalindrome === true) {
  console.log(`${userPhrase} is a palindrome.`)
}
else {
  console.log(`${userPhrase} is not a palindrome.`)
}