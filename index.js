// Iteration 1: Names and Input
// 1.1

let hacker1 = "Josh";
console.log("The driver's name is " + hacker1);
let hacker2 = "Nick";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
// 2.1.

if (hacker1.length > hacker2.length) {
  // if they are the same length console log doesnt print anything only when is different.
  console.log(
    `The driver has the longest name , ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `it seems that the navigator has the longest name , it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters.`
  );
}

// Iteration 3: Loops
//3.1

let driverInCaps = " ";
for (let i = 0; i < hacker1.length; i++) {
  driverInCaps += hacker1[i].toUpperCase();
  if (i < hacker1.length - 1) {
    driverInCaps += " ";
  }
}
console.log(driverInCaps);

//3.2

let reverseNavigatorName = " ";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseNavigatorName += hacker2[i];
}
console.log(reverseNavigatorName);

//3.3

 if (hacker1 < hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first , definetely.")
} else {
    console.log("what?! you both have the same name?")
} 

// Bonus 1 

let longtext = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Aenean rhoncus blandit lacinia. Suspendisse blandit suscipit enim,
 eget consectetur ex cursus ac. Nulla pharetra nisi at quam bibendum,
  ac gravida est accumsan. Vestibulum sagittis leo ut ante placerat gravida. 
  Aenean tellus ante, sodales sit amet fringilla vel, mollis quis mauris.
   Aliquam vehicula malesuada rhoncus.
    Sed accumsan massa elit, eget sollicitudin lectus pharetra vel.
     Curabitur sit amet vestibulum magna, at pharetra odio.
      Pellentesque sollicitudin iaculis consectetur. Sed congue mollis quam, 
      pharetra ullamcorper neque consequat sed.
Praesent risus est, tincidunt ac tristique in, imperdiet et est.
 Nulla facilisi. Etiam vel elit tempor ante vulputate sollicitudin nec a turpis.
  Curabitur eget rhoncus sem, nec posuere quam.
   Aliquam tempus consectetur arcu vel malesuada. Cras ultricies est mi,
    vitae laoreet lectus viverra in. Duis bibendum felis sed turpis porttitor tempor.
Morbi cursus vehicula eros non congue. Curabitur non tempus est,
 non tincidunt nisi. Cras consequat nulla sed est ornare, ac viverra ligula ultricies.
  Morbi nec tellus sapien. Suspendisse potenti. Nullam feugiat a ipsum a ultricies.
   Mauris vitae eros sit amet libero euismod vehicula. Vestibulum neque nisi,
    dignissim ac ultrices eu, luctus eget quam. Proin eget lacus elit. In sed luctus orci. 
    Sed dapibus rutrum dui. Cras dapibus interdum ex, non tristique eros malesuada vel.
     Sed et interdum nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus.`

  let wordCount = 0
for(let i = 0 ; i<longtext.length ; i++ ) {
    if(longtext[i]== " ") 
        wordCount ++
    else{
        continue
    }
}
console.log(wordCount)

let etcount = 0
for (let i=0; i< longtext.length;i++){
    const char = longtext[i] + longtext[i+1]
    if(char === "et") {
        etcount ++
    }
}
console.log(etcount)

// Bonus 2

let phraseToCheck = "race car"
let cleanedPhrase = ""
let wordReversed = ""
let palindrome
for (let i = 0; i < phraseToCheck.length; i++) {
    const char = phraseToCheck[i].toLowerCase();
    if (char >= 'a' && char <= 'z')
      cleanedPhrase += char;
    }
for (let i = cleanedPhrase.length-1; i >=0; i-- ) {
wordReversed += cleanedPhrase[i]

if( wordReversed === cleanedPhrase ) {
    palindrome = true 
}

else {
    palindrome = false
}
}
console.log(palindrome)