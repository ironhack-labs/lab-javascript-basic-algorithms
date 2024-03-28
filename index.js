// Iteration 1: Names and Input 
/* Iteration 1: Names and Input
 1.1 Create a variable hacker1 with the driver's name.
 1.2 Print "The driver's name is XXXX".
 1.3 Create a variable hacker2 with the navigator's name.
 1.4 Print "The navigator's name is YYYY".
*/

let hacker1 = "Najeeb";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Hercules";
console.log(`The navigator's name is ${hacker2}`);





// Iteration 2: Conditionals
/*
Iteration 2: Conditionals
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!. 
*/

function findLongestName (name1, name2){
    if (name1.length > name2.length){
        return `The driver has the longest name, it has ${name1.length} characters`;
    } else if (name2.length > name1.length){
        return `It seems that the navigator has the longest name, it has ${name2.length} characters.`;
    }   return `Wow, you both have equally long names, ${name1.length} characters!`;

}

let longestNameIs = findLongestName (hacker1, hacker2);
console.log(longestNameIs);




// Iteration 3: Loops
/*
Iteration 3: Loops
3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

3.3 Depending on the lexicographic order of the strings, print:

The driver's name goes first.
Yo, the navigator goes first, definitely.
What?! You both have the same name?


 */


//3.1 Print the characters of the driver's name, separated by space, and in capital letters, i.e., "J O H N".

function capitalizeAndSeparate(name) {
    let characters = name.split(''); // Split the name into an array of characters
    let capitalizedCharacters = []; // Array to store capitalized characters

    // Iterate over each character
    for (let i = 0; i < characters.length; i++) {
        let char = characters[i];
        capitalizedCharacters.push(char.toUpperCase()); // Capitalize the character and push it to the array
    }

    let result = capitalizedCharacters.join(' '); // Join the characters with spaces
    return result;
}

// Calling back the function:

let formattedName = capitalizeAndSeparate(hacker1);
console.log("Formatted name:", formattedName);





//3.2 Print all the characters of the navigator's name in reverse order, i.e., "nhoJ".

function printNameInReverse(name) {
    let reversedName = "";
    for (let i = name.length - 1; i >= 0; i--) {
        reversedName += name[i];
    }
    return reversedName;
}

//  Calling back the function:

let reversingName = printNameInReverse(hacker2);
console.log(reversingName);



// Depending on the lexicographic order of the strings, print:

// The driver's name goes first.
// Yo, the navigator goes first, definitely.
// What?! You both have the same name?

function compareNames(driverName, navigatorName) {
    if (driverName === navigatorName) {
        return "What?! You both have the same name?";
    } else if (driverName < navigatorName) {
        return "The driver's name goes first.";
    } else {
        return "Yo, the navigator goes first, definitely.";
    }
}

// Example usage:

let lexicographicSorting = compareNames(hacker1, hacker2);
console.log(lexicographicSorting);






/*
Bonus Time!
Bonus 1:
Go to the lorem ipsum generator website and:

Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.

*/

// Generate 3 paragraphs. Store the text in a new string variable named longText.
let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et sem quis mauris consequat volutpat. Ut sed felis quis eros fringilla dignissim. Etiam auctor sapien sed ipsum dignissim, nec lobortis lectus scelerisque. Fusce et quam et mauris malesuada bibendum. Sed et elit id elit sodales elementum. Morbi et pharetra tortor. Etiam bibendum eros eu velit lacinia tempus. Cras suscipit convallis lectus. Sed et leo urna. Duis vitae augue non velit vestibulum tempor non ut ante. Etiam efficitur massa sit amet nunc feugiat gravida. Vivamus suscipit velit vel ligula suscipit ultrices. Curabitur ac semper est.

Quisque at semper lacus. Vivamus vitae nulla et turpis euismod efficitur. Morbi in augue ultricies, tincidunt justo ac, volutpat eros. Ut nec sapien at mauris eleifend egestas. Pellentesque convallis odio sit amet nisl fermentum, vitae suscipit libero molestie. Ut sed nulla sit amet nulla bibendum dapibus. Mauris eu metus eget dolor aliquam varius. Etiam hendrerit justo id tellus dignissim, sit amet bibendum velit ultricies. Cras id magna quam. Proin at turpis eu velit rutrum consequat eget in ante. Curabitur dictum libero non velit elementum laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum tempor varius diam, vel volutpat felis ultrices vel. Integer lacinia risus a sapien fermentum, et varius elit congue. Curabitur fringilla urna vel sagittis lacinia. Duis suscipit orci vitae suscipit ultricies. Etiam id tincidunt neque.

Suspendisse potenti. In hac habitasse platea dictumst. Fusce tincidunt turpis eget lorem faucibus aliquam. Duis bibendum felis sit amet urna blandit, et scelerisque eros dignissim. Sed id sapien vitae purus viverra tincidunt nec et nulla. Phasellus at ex vel ligula blandit feugiat. Donec et risus ut nisi consequat tempor vel sed erat. Donec vel ultricies eros, vel ultrices sapien. Nullam vulputate, arcu vel hendrerit vehicula, odio mi vehicula sem, ac volutpat est metus eget nisi. Nam tempor urna et turpis molestie, sed lacinia tortor elementum. Pellentesque scelerisque arcu vitae odio finibus, sed consequat erat efficitur. Cras rutrum nisi non diam pharetra, in dictum orci eleifend. Duis consequat purus nec lacus viverra, in malesuada quam vehicula.`;

function countWords(str) { 
    const array = str.trim().split(/\s+/); 
    return array.length; 
} 
  
   
console.log("Counted Words are:" , countWords(longText));



//Make your program count the number of times the Latin word et appears.

function countWordOccurrences(str, word) {
    // Split the text into words using whitespace as the delimiter
    const words = str.split(/\s+/);
    
    // Initialize a counter for occurrences
    let count = 0;
    
    // Iterate over each word in the array
    for (let i = 0; i < words.length; i++) {
        // If the current word matches the target word (case-insensitive)
        if (words[i].toLowerCase() === word.toLowerCase()) {
            count++; // Increment the counter
        }
    }
    
    return count;
}

// Example usage:
const wordToCount = "et";
const numberOfOccurrences = countWordOccurrences(longText, wordToCount);
console.log("Number of times '" + wordToCount + "' appears:", numberOfOccurrences);



/*
Bonus 2:
Create a new variable, phraseToCheck, containing some string value. Write a code to check if the value assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".
IMPORTANT: If you use Google to help you to find a solution to this iteration, you might run into some advanced solutions that use string or array methods (such as join(), reverse(), etc.). However, we want you to apply your current knowledge and try to come up with a solution by just using the for loop and if-else statements with some break and continue.

Happy coding! ❤️
*/