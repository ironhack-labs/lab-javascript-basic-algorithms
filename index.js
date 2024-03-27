// Iteration 1: Names and Input
let hacker1 = "Camila"; //driver
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Greg"; //navigator
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
function verifyName (hacker1, hacker2) {
    if (hacker1.length > hacker2.length) {
        console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
    } else if
    (hacker1.length < hacker2.length) {
            console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    } else {
        console.log("Wow, you both have equally long names, XX characters!");
    }
}

verifyName (hacker1, hacker2);

// Iteration 3: Loops

//3.1 - print the characters of driver's name, separated by space and in capital leters 
let driversNameEditted = `${hacker1[0].toUpperCase()} ${hacker1[1].toUpperCase()} ${hacker1[2].toUpperCase()} ${hacker1[3].toUpperCase()}`;
console.log(driversNameEditted);

//3.2 - Print all the characters of the navigator's name in reverse order

function reverseString(str) { //creating a function that accepts a str as parameter
    let reversedName = ""; //saving the value as a new variable
    for (let i = str.length - 1; i >= 0; i--) { //loop through the characters of the string
        reversedName += str[i]; //from back to front add each character
    }
    return reversedName; //return the editted variable
}
console.log(reverseString(hacker2)); //it worked, yay :) 

 //also possible using a reverse method 
 /*
    let originalString = "Hello World!"; 
    let reversedString = originalString.split('').reverse().join('');
    console.log(reversedString);
*/

//3.3 - lexographics order: alphabetically and less characters 
let namesArray = [];  //create an array with the names to be sorted
namesArray.push(hacker1); //push each variable into this array
namesArray.push(hacker2);

console.log(namesArray.sort()); //sorted array => Camila, Greg


//bonus 01 

/*
Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.
*/

//example found online to count the words, is actually counting empty spaces 

    /*
    function WordCount(str) {
  var totalSoFar = 0;
  for (var i = 0; i < WordCount.length; i++)
    if (str[i] === " ") { // if a space is found in str
      totalSoFar = +1; // add 1 to total so far
  }
  totalsoFar += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
}

console.log(WordCount("Random String"));

You could also do it with .split():

return str.split(' ').length; */

//example from W3Schools
    /*
    let text = "How are you doing today?";
    const myArray = text.split(" "); //this splits the characters excluding spaces!!
    console.log(myArray); // => [ 'How', 'are', 'you', 'doing', 'today?' ]
    */

//BONUS 01 

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac ante tempus, iaculis nunc iaculis, pharetra mauris. Nunc sollicitudin scelerisque interdum. Phasellus egestas diam at tempus venenatis. Fusce felis neque, hendrerit ac aliquam sed, tempor bibendum erat. Mauris scelerisque ligula non risus commodo, vel tempor diam vulputate. Suspendisse sit amet tempor arcu, in egestas lorem. Maecenas pretium ipsum vel tortor dapibus, nec interdum dui pretium. Maecenas fermentum dolor vitae mi ultrices, non pretium ex dapibus. Cras pulvinar justo ac felis sodales rhoncus. Morbi facilisis risus ac ultricies vestibulum. Aliquam accumsan, ante ac efficitur porttitor, mi nunc lobortis felis, non tempus nibh mi sed diam. Cras leo sapien, finibus eu lobortis eu, ornare fermentum urna. Nullam cursus consequat tellus, ac porta purus. Proin efficitur enim in lorem imperdiet luctus. Aenean vel purus faucibus, ultricies urna eu, fringilla felis. Maecenas sed diam tincidunt elit imperdiet fermentum. Quisque aliquet, tellus non vehicula viverra, ligula nunc condimentum ligula, vel ullamcorper lacus leo nec erat. Duis a tristique magna, sed blandit tellus. Donec vehicula magna sem, id egestas tortor luctus in. Donec faucibus venenatis lacus, in volutpat est tempus egestas. Proin mollis urna id lacus vulputate mollis. Vestibulum diam eros, tincidunt sed nibh vel, malesuada feugiat ligula. Nulla elementum erat non nibh fermentum scelerisque. Pellentesque vehicula justo sed eros rutrum pharetra. In tristique, est at sollicitudin porttitor, tellus metus molestie dolor, et faucibus sem nibh id lectus. Nulla facilisi. Suspendisse pharetra consectetur sem, eget auctor eros luctus a. Integer et pharetra risus. Curabitur convallis, metus sed iaculis malesuada, dolor libero viverra diam, at scelerisque metus est eu ex. Nam non dolor rutrum felis commodo finibus quis sodales quam. Nunc ut finibus augue. Pellentesque dignissim malesuada hendrerit. Sed finibus convallis dui a ultrices. Donec ornare lacinia risus vel fermentum. Nulla facilisi. Maecenas sit amet quam sit amet tortor varius auctor. Praesent semper elit at felis cursus, ut condimentum magna aliquam"

//lets split the string into an array cutting when we find a space 
    // console.log(longText.split(" "));
//and now count this 
console.log(longText.split(" ").length);

//BONUS 02

let phraseToCheck = "Check if this string is a Palindrome";
let testPhrase = "amorroma"

function reversePhrase(str) { //creating a function that accepts a str as parameter
    let backPhrase = ""; //saving the value as a new variable
    for (let i = str.length - 1; i >= 0; i--) { //loop through the characters of the string
        backPhrase += str[i]; //from back to front add each character
    }
    return backPhrase; //return the editted variable
}

//console.log(reversePhrase(testPhrase));


if (reversePhrase(phraseToCheck) === phraseToCheck) { //change the test variable to the phraseToCheck
    console.log("Congrats, palindrome found!");
} else {
    console.log("not a palindrome");
}
