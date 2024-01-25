// Iteration 1: Names and Input
let hacker1 = "Juan"; //Driver's name
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Antonio"; //Navigator's Name
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
//Function to compare names in the previous declared variables
function whoHaveLongerName(name1 = hacker1, name2 = hacker2) {

    if (name1.length > name2.length) {
        console.log(`The driver has the longest name, it has ${name1.length} characters.`);
    } else if (name1.length < name2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${name2.length} characters.`);
    } else {
        console.log(`Wow, you both have equally long names, ${name1.length} characters!`);
    }
}
whoHaveLongerName();

// Iteration 3: Loops

//Function to convert the name of the Driver to Upper Case separated by space 
function upperDriver(name = hacker1) {
    let upperName = "";
    for (let i = 0; i < name.length; i++) {
        upperName += name[i].toUpperCase() + " ";
    }
    return console.log(upperName.trim()); //Using trim for delete the last space added for the function
}
upperDriver();

//Function to invert the Navigator's name
function invertedNavigator(name = hacker2) {
    let invertedName = "";
    for (let letter of name) {
        invertedName = letter + invertedName;
    }
    return console.log(invertedName);
}
invertedNavigator();

//Function to do a lexicographic compare of both names
function lexicographicCompare(name1 = hacker1, name2 = hacker2) {
    let res = `What?! You both have the same name?`

    if (name1 > name2) {
        res = `The driver's name goes first.`;
    } else if (name1 < name2) {
        res = `Yo, the navigator goes first, definitely`;
    }

    console.log(res)
}
lexicographicCompare();


//Bonus1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at dui pretium, imperdiet metus ut, aliquam sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis turpis lacus, ornare eget pharetra nec, dictum sed eros. Etiam vestibulum nunc non massa facilisis, sit amet sagittis tellus volutpat. Etiam eleifend sagittis vulputate. Nullam turpis augue, blandit quis blandit a, bibendum eu nisl. Nulla sagittis est massa, ut fringilla odio hendrerit in. Curabitur eget sapien eget diam vestibulum condimentum dignissim in tortor. Phasellus lobortis ipsum at dui interdum, eu pharetra velit viverra. Nullam suscipit dignissim leo, quis viverra mauris vestibulum sed. Suspendisse posuere ipsum id tempus posuere. Suspendisse potenti. Fusce consequat eu mi tristique ullamcorper. Duis in ex et purus scelerisque rutrum. Sed placerat nulla id enim cursus, et molestie augue cursus. In viverra varius purus, ac vestibulum ante facilisis eget. Maecenas ultricies pharetra augue, et malesuada velit rhoncus quis. Donec luctus, ex a mollis fermentum, nisi lectus gravida justo, ut bibendum leo lacus a nisl. Integer suscipit purus in lorem pretium dapibus. Vivamus ornare, eros nec pretium lobortis, leo ante sollicitudin orci, ut finibus quam lectus sit amet magna. Quisque vitae ipsum lorem. Fusce sed erat ac elit semper vehicula quis eu augue. Aenean tempus purus eget tortor elementum, ut finibus risus luctus. Nunc malesuada quis sapien at commodo. Donec varius in odio ut posuere. Phasellus eu tincidunt nisi, vel sollicitudin ipsum.";
//Function to count all the letters of the Text
function wordsCounter(text) {
    let count = 0;
    let words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
        count++
    }
    console.log(`The text have ${count} words`);
}
wordsCounter(longText);

//Function to count how many times the latin word "et" appears
function etCounter(text) {
    let count = 0;
    let words = text.split(" ");
    for (let word of words) {
        if (word === "et") {
            count++;
        }
    }
    return console.log(`The word "et" appears ${count} times`);
}
etCounter(longText);

//Bonus2
let phraseToCheck1 = "A man, a plan, a canal, Panama!";
let phraseToCheck2 = "This phrase is obiusly not a Palindrome";

//Function to check if a phrase is a Palindrome or not
function isPalindrome(phrase) {
    let phraseWithoutSpace = phrase.toLowerCase().replace(/[^a-zA-Z]/g, '');
    let invertedPhrase= "";
    let res = `This phrase is a Palindrome!`;
    for(let letter of phraseWithoutSpace){
        invertedPhrase= letter + invertedPhrase;
    }
    if (phraseWithoutSpace !== invertedPhrase) {
        res = `This phrase is not a Palindrome!`;
    }
    return console.log(res)

}
isPalindrome(phraseToCheck1);
isPalindrome(phraseToCheck2);
