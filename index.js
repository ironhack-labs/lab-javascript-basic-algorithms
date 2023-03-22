// Iteration 1: Names and Input

hacker1 = "driver" //driver
console.log(`The driver's name is ${hacker1}`);

hacker2 = "navigator" //navigator
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

function nameLength(a, b) { 
if (a.length === b.length) {
  return `Wow, you both have equally long names, ${a.length} characters!` } 

else if (a.length > b.length) {
  return `The driver has the longest name; it has 
${a.length} characters!`} 
else {
  return `It seems that the navigator has the longest name, it has ${b.length} characters.`
 }
}

console.log(nameLength(hacker1, hacker2))

// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

function spacer(a) {
let spaced = "";
  for (let i=0; i < a.length; i++) {
    spaced += a[i] + " ";
  }
  return spaced.toUpperCase().slice(0, spaced.length-1);
}

console.log(spacer(hacker1));

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

function reverser(b) {
  let reversed = "";
  for (let i=b.length-1; i >= 0; i--) {
    reversed += b[i];
  }

  return reversed;
}
console.log(reverser(hacker2));

// 3.3 Depending on the lexicographic order of the strings, print:

let driverFirst = `The driver's name goes first.`
let navFirst = `Yo, the navigator goes first, definitely.`;
let sameName = `What?! You both have the same name?`;

    if (hacker1 < hacker2) {
        console.log(driverFirst);
    } else if (hacker1 > hacker2) {
      console.log(navFirst);
    } else {
      console.log(sameName)
    }
// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium venenatis condimentum. Suspendisse pulvinar dignissim faucibus. Ut maximus, tortor a euismod viverra, eros eros interdum tellus, et fringilla risus nulla et felis. Ut augue eros, porta in quam non, egestas eleifend ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce molestie sollicitudin pretium. Suspendisse consectetur accumsan ipsum eget facilisis. Maecenas ac tristique ligula, eget hendrerit augue. Cras efficitur auctor turpis id tempus. Suspendisse vitae egestas felis. Proin a dolor ante. Aenean quis mattis nisi, id porta odio. Mauris eget elementum turpis. Nullam sed risus gravida nunc consequat vehicula. Suspendisse erat odio, suscipit eget eros ut, ultricies suscipit lorem.

Vestibulum nec laoreet sapien. Nam a egestas enim. Nulla semper dolor efficitur erat aliquam malesuada eu ac nisi. Aliquam maximus justo odio, vel suscipit elit commodo venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam fringilla sagittis sapien eu venenatis. Aliquam erat volutpat. Etiam ex sem, venenatis eget dui eget, feugiat porta neque. Praesent sed iaculis nibh, vitae dictum nulla. Vestibulum in tempus libero, sollicitudin mollis dui. Nullam elementum pharetra nunc, vel convallis enim cursus id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo, nulla a facilisis blandit, felis justo condimentum nisl, vitae sodales nibh augue sed mauris. Quisque laoreet mi sit amet risus pretium, ut blandit arcu hendrerit. Quisque cursus convallis velit sit amet volutpat.

Integer quam tellus, ornare et elit vel, vehicula convallis est. Sed sed tincidunt purus. Ut eget urna dolor. Aenean non bibendum tellus. Nullam vel lacus posuere tortor aliquam interdum eu in mauris. Cras ac faucibus lacus. Sed pulvinar porta nibh eget tempor. Integer metus magna, consectetur sit amet ante vel, tempus cursus ipsum. Vestibulum quis nisi mauris. Sed fringilla aliquet felis eu ullamcorper. Praesent a arcu lobortis, accumsan velit vel, sodales enim.`


//Bonus 1 -- Go to the lorem ipsum generator website and:

// Generate 3 paragraphs. Store the text in a new string variable named longText.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears. 

let shortText = "I have a dog et a cat."

function wordAndEtCounter (a, numOfParagraphs) {
  let wordCounter = 1;
  let etCounter =0;
  for (let i = 0; i <= a.length; i++ ) {
    if (a[i] === " ") {
      wordCounter = wordCounter + 1;
    }

    if (a[i] === " " && (a[i+1] === "e" || a[i+1] === "E" ) && a[i+2] === "t"){
            etCounter = etCounter + 1;
      
    }
  }
  let counterText = `${wordCounter + numOfParagraphs-1} words and ${etCounter} instances of et`
return counterText;  
}

//should return '322 words and 7 instances of et'
console.log(wordAndEtCounter(shortText, 1));
console.log(wordAndEtCounter(longText, 3));

let wordToCheck = `oboobo`;

function palindromeChecker(a) {
  let clean = a.replace(/[^0-9A-Z]+/gi,"");
  let cleaner = clean.replace(/\s/g, '');
  let counter = 0;
  
  if (cleaner.length % 2 === 0) {
        console.log("even!")
    
    for (let i = 0; i <= cleaner.length / 2; i++) {
     if (cleaner[i] === cleaner[cleaner.length-1])
       counter = counter + 1;
    }
    if (counter === (cleaner.length / 2) ) {
    return "this is a palindrome"
  } 

  } else if (cleaner.length % 2 === 1) {
    console.log("odd!")
    for (let i = 0; i <= (cleaner+1).length / 2; i++) {
      if (cleaner[i] === cleaner[cleaner.length-1])
       counter = counter + 1;
    }
    if (counter === ((cleaner.length-1) / 2) ) {
    return "this is a palindrome"
  }  
 }
 
    return "this is not a palindrome"
}

console.log(palindromeChecker(wordToCheck));

// Iteration 1: Names and Input

hacker1 = "driver" //driver
console.log(`The driver's name is ${hacker1}`);

hacker2 = "navigator" //navigator
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

function nameLength(a, b) { 
if (a.length === b.length) {
  return `Wow, you both have equally long names, ${a.length} characters!` } 

else if (a.length > b.length) {
  return `The driver has the longest name; it has 
${a.length} characters!`} 
else {
  return `It seems that the navigator has the longest name, it has ${b.length} characters.`
 }
}

console.log(nameLength(hacker1, hacker2))

// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

function spacer(a) {
let spaced = "";
  for (let i=0; i < a.length; i++) {
    spaced += a[i] + " ";
  }
  return spaced.toUpperCase().slice(0, spaced.length-1);
}

console.log(spacer(hacker1));

// 3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

function reverser(b) {
  let reversed = "";
  for (let i=b.length-1; i >= 0; i--) {
    reversed += b[i];
  }

  return reversed;
}
console.log(reverser(hacker2));

// 3.3 Depending on the lexicographic order of the strings, print:

let driverFirst = `The driver's name goes first.`
let navFirst = `Yo, the navigator goes first, definitely.`;
let sameName = `What?! You both have the same name?`;

    if (hacker1 < hacker2) {
        console.log(driverFirst);
    } else if (hacker1 > hacker2) {
      console.log(navFirst);
    } else {
      console.log(sameName)
    }
// Bonus 1

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium venenatis condimentum. Suspendisse pulvinar dignissim faucibus. Ut maximus, tortor a euismod viverra, eros eros interdum tellus, et fringilla risus nulla et felis. Ut augue eros, porta in quam non, egestas eleifend ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce molestie sollicitudin pretium. Suspendisse consectetur accumsan ipsum eget facilisis. Maecenas ac tristique ligula, eget hendrerit augue. Cras efficitur auctor turpis id tempus. Suspendisse vitae egestas felis. Proin a dolor ante. Aenean quis mattis nisi, id porta odio. Mauris eget elementum turpis. Nullam sed risus gravida nunc consequat vehicula. Suspendisse erat odio, suscipit eget eros ut, ultricies suscipit lorem.

Vestibulum nec laoreet sapien. Nam a egestas enim. Nulla semper dolor efficitur erat aliquam malesuada eu ac nisi. Aliquam maximus justo odio, vel suscipit elit commodo venenatis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam fringilla sagittis sapien eu venenatis. Aliquam erat volutpat. Etiam ex sem, venenatis eget dui eget, feugiat porta neque. Praesent sed iaculis nibh, vitae dictum nulla. Vestibulum in tempus libero, sollicitudin mollis dui. Nullam elementum pharetra nunc, vel convallis enim cursus id. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo, nulla a facilisis blandit, felis justo condimentum nisl, vitae sodales nibh augue sed mauris. Quisque laoreet mi sit amet risus pretium, ut blandit arcu hendrerit. Quisque cursus convallis velit sit amet volutpat.

Integer quam tellus, ornare et elit vel, vehicula convallis est. Sed sed tincidunt purus. Ut eget urna dolor. Aenean non bibendum tellus. Nullam vel lacus posuere tortor aliquam interdum eu in mauris. Cras ac faucibus lacus. Sed pulvinar porta nibh eget tempor. Integer metus magna, consectetur sit amet ante vel, tempus cursus ipsum. Vestibulum quis nisi mauris. Sed fringilla aliquet felis eu ullamcorper. Praesent a arcu lobortis, accumsan velit vel, sodales enim.`


//Bonus 1 -- Go to the lorem ipsum generator website and:

// Generate 3 paragraphs. Store the text in a new string variable named longText.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears. 

let shortText = "I have a dog et a cat."

function wordAndEtCounter (a, numOfParagraphs) {
  let wordCounter = 1;
  let etCounter =0;
  for (let i = 0; i <= a.length; i++ ) {
    if (a[i] === " ") {
      wordCounter = wordCounter + 1;
    }

    if (a[i] === " " && (a[i+1] === "e" || a[i+1] === "E" ) && a[i+2] === "t"){
            etCounter = etCounter + 1;
      
    }
  }
  let counterText = `${wordCounter + numOfParagraphs-1} words and ${etCounter} instances of et`
return counterText;  
}

//should return '322 words and 7 instances of et'
console.log(wordAndEtCounter(shortText, 1));
console.log(wordAndEtCounter(longText, 3));

//Bonus 2

let wordToCheck = `oboobo`;

function palindromeChecker(a) {
  let clean = a.replace(/[^0-9A-Z]+/gi,"");
  let cleaner = clean.replace(/\s/g, '');
  let counter = 0;
  
  if (cleaner.length % 2 === 0) {
        console.log("even!")
    
    for (let i = 0; i <= cleaner.length / 2; i++) {
     if (cleaner[i] === cleaner[cleaner.length-1])
       counter = counter + 1;
    }
    if (counter === (cleaner.length / 2) ) {
    return "this is a palindrome"
  } 

  } else if (cleaner.length % 2 === 1) {
    console.log("odd!")
    for (let i = 0; i <= (cleaner+1).length / 2; i++) {
      if (cleaner[i] === cleaner[cleaner.length-1])
       counter = counter + 1;
    }
    if (counter === ((cleaner.length-1) / 2) ) {
    return "this is a palindrome"
  }  
 }
 
    return "this is not a palindrome"
}

console.log(palindromeChecker(wordToCheck));



