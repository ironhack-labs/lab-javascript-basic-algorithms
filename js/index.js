// Iteration 1: Names and Input
let hacker1 = "Josipa";
console.log(`The Driver's name is ${hacker1}`);

let hacker2 = "Ivo";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let driverLength = hacker1.length;
let navigatorLength = hacker2.length;

if (driverLength > navigatorLength) {
  console.log(`The driver has the longest name, it has ${driverLength} characters.`)
} else if (navigatorLength > driverLength) {
  console.log(`It seems that the navigator has the longest name, it has ${navigatorLength} characters.`)
} else {
  console.log(`Wow, you both have equally long names, ${driverLength} characters!`);
}

// Iteration 3: Loops

//3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let newString = "";

for (let i = 0; i < hacker1.length; i++) {
  newString += hacker1[i] + " "; 
}
//Added to remove the last space after the last letter
newString = newString.slice(0, -1);

console.log(newString.toUpperCase());



// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseName += hacker2[i]; 
}
console.log(reverseName);


//3.3 Lexicographic order of the strings

let order = hacker1.localeCompare(hacker2);

switch (order) {
  case -1:
    console.log("The driver's name comes first.");
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely.");
    break;
  case 0:
    console.log("What? You both have the same name?");
    break;
}

// Bonus 1

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam gravida erat a ante tristique accumsan. Donec purus nulla, tempus ac ex vel, placerat dapibus quam. Nullam finibus, lectus quis pretium vulputate, augue sem mollis arcu, at aliquet lorem erat non arcu. Fusce at mollis neque. Aliquam commodo orci ligula, sit amet interdum erat fringilla sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris hendrerit vestibulum velit, at semper ex facilisis nec. Pellentesque dapibus nisl odio. Suspendisse et justo ante. Donec tempor blandit convallis. Sed quis ante sed lacus rutrum ultricies non in eros. Morbi et dapibus metus. Fusce a mi metus. In maximus, metus non tincidunt convallis, ex odio consectetur nulla, nec consequat nisl lectus in turpis. Donec non felis et massa fringilla efficitur in sed dui. Nullam at dui viverra, consectetur leo varius, pretium tellus. Duis eu cursus arcu. Suspendisse dapibus maximus felis, vitae interdum justo pulvinar quis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum aliquet, risus sit amet tristique lobortis, lorem ligula eleifend sem, vel faucibus mauris nisl eget orci. Aenean lectus velit, tempor sed mi non, viverra ornare eros. Nam a metus vitae libero molestie dapibus. Nulla a vestibulum tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis dapibus purus placerat nibh venenatis elementum. Suspendisse potenti. Phasellus venenatis laoreet nisl ac varius. Praesent feugiat at metus et fermentum. Curabitur non ex eget ligula dictum efficitur molestie vitae ante. Suspendisse mollis a felis sed iaculis. Vestibulum lacinia, nibh semper mollis convallis, lorem magna lobortis nunc, at cursus tellus ipsum non ante.`

  let totalWords = 0;
  for (let i = 0; i < loremIpsum.length; i++){
    if (loremIpsum[i] === " ") { 
      totalWords += 1; 
  }
    }
  totalWords += 1; // add another word to account for the last word of the last paragraph

console.log(totalWords);

let numberOfEt = 0;
for (let i = 0; i < loremIpsum.length; i++){
    if (loremIpsum[i] === " " && loremIpsum[i + 1] === "e" && loremIpsum[i + 2] === "t" && loremIpsum[i + 3] === " ") { 
      numberOfEt += 1; 
  }
}

console.log(numberOfEt);


// Bonus 2
let phraseToCheck = "racecar!";
let checker;

    let j = phraseToCheck.length -1;
    for(let i = 0 ; i < j/2 ;i++)
    {
      let firstCharacter = phraseToCheck[i] ;//forward character
      let lastCharacter = phraseToCheck[j-i];//backward character
      
      //Checks if there are any special characters in the string
      if (firstCharacter.toLowerCase() !== firstCharacter.toUpperCase() || lastCharacter.toLowerCase() !== lastCharacter.toUpperCase())
      {
      if( firstCharacter != lastCharacter)
      {
        // return false if string not match
        checker = false;
        break;
      } else {
    /// return true if string is palindrome
    checker = true;
      }
  }

 }
    if( checker === true )
    {
      console.log("passed string is palindrome ");
    }
    else
    {
      console.log("passed string not a palindrome");
    }


