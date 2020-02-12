// Iteration 1: Names and Input
let hacker1 = "Joana"
console.log(`The driver´s name is ${hacker1}`)
let hacker2 = "Jo"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wou, you both have equally long names, ${hacker1.length}`)
}

// Iteration 3: Loops
let driverName = ""; let iterationLetter
for (let i = 0; i < hacker1.length; i++) {
      driverName = driverName + " " + hacker1[i].toUpperCase();
  }
 console.log(driverName)
 
let navigatorName = ""; 
  for (let j = hacker2.length-1; j > -1 ; j--) {
     navigatorName = navigatorName + hacker2[j]
  }
console.log(navigatorName)


if (hacker1.length < hacker2.length) {
  stopCond = hacker2.length
} else {
  stopCond = hacker1.length
}
for (i = 0; i < stopCond; i++) {
  if (hacker1[i].localeCompare(hacker2[i]) < 0) {
    console.log ("The driver's name goes first.")
    break
  } else if (hacker1[i].localeCompare(hacker2[i]) > 0) {
    console.log("Yo, the navigator goes first definitely.")
    break
  } else {
    console.log(`The letter number ${i+1} is the same on both names`)
    console.log ("What?! You both have the same name?")
  }
}



// Bonus 1
let loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nibh sit amet augue ullamcorper dapibus. Vivamus neque augue, porttitor sed felis id, dapibus vulputate erat. Donec efficitur dolor in tincidunt convallis. Sed dictum nunc a urna tempus convallis vel id risus. Nunc scelerisque pharetra diam, sit amet interdum risus consequat at. Suspendisse quam enim, facilisis in sem vel, porttitor rutrum arcu. Nam in enim mattis, pretium nisl nec, mollis libero. Mauris imperdiet est diam, ac molestie odio faucibus eget. Nunc id iaculis augue, nec dictum mi. Aliquam viverra lacus et est venenatis dignissim. Pellentesque nec ligula vitae felis bibendum commodo quis in massa. Fusce quis odio ultricies, interdum erat id, malesuada leo. Donec blandit maximus ex, ac pretium libero elementum vel."
// I was getting an error message when copying and pasting 3 PARAGRAPHS so I only copied one.


// https://stackoverflow.com/questions/18679576/counting-words-in-string
  let totalSoFar = 0;
  for (let i = 0; i < loremText.length; i++) {
    if (loremText[i] === " ") { // if a space is found in str
      totalSoFar = totalSoFar + 1; // add 1 to total so far
      // console.log(totalSoFar)
  }
  }
totalSoFar += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
console.log(`There are ${totalSoFar} words in this text.`)


totalSoFar = 0;
for (let i = 0; i < loremText.length; i++) {
    if (loremText[i] === " et " || loremText[i] === " et."  ) { // if a space is found in str
      totalSoFar = totalSoFar + 1; // add 1 to total so far
      // console.log(totalSoFar)
  }
}
totalSoFar += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
console.log(`The word et is repeated ${totalSoFar} times in this text.`)

// Bonus 2
let phraseToCheck = "amorroma"; let lastLetterIndex = phraseToCheck.length-1;
for (let i = 0; i < Math.floor(phraseToCheck.length/2) ; i++) {
  console.log(i)
  if (phraseToCheck[i].localeCompare(phraseToCheck[lastLetterIndex-i]) !== 0)  {
     console.log("The phrase is not a palindrome")
      break
  } else {
      if (i !== (Math.floor(phraseToCheck.length/2)-1)) {
        continue
      } else {
          console.log("The phrase is a palindrome")
      }
      
  }
}