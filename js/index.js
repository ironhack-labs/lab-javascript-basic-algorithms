// Iteration 1

var hacker1 = "Sam Littlefair";

console.log("The driver's name is " + hacker1);

var hacker2 = "Yuval Bugajski"

console.log("The navigator's name is " + hacker2);

// Iteration 2

if(hacker1.length > hacker2.length){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if(hacker1.length < hacker2.length) {
    console.log("The navigator has the longest name, it has " + hacker2.length + " characters");
} else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters");
}

// Iteration 3

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

var name1 = "";

for(i = 0; i < hacker1.length; i++){
    name1 += hacker1[i].toUpperCase() + " ";
}

console.log(name1);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

var name2 = "";

for(i = hacker2.length - 1; i >= 0; i--){
    name2 += hacker2[i];
};

console.log(name2);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

var results = hacker1.localeCompare(hacker2);

if(results > 0){
    console.log("Yo, the navigator goes first definitely.")
} else if(results < 0){
    console.log("The driver's name goes first.")
} else {
    console.log("What?! You both have the same name?")
}

// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.

var lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra suspendisse potenti nullam ac tortor vitae purus. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Sed tempus urna et pharetra. Sit amet porttitor eget dolor. Lectus urna duis convallis convallis tellus. Euismod lacinia at quis risus sed vulputate odio ut. Ullamcorper dignissim cras tincidunt lobortis feugiat. Mauris sit amet massa vitae. Ridiculus mus mauris vitae ultricies leo. Eget mauris pharetra et ultrices neque ornare aenean euismod. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Dictumst quisque sagittis purus sit amet. Placerat in egestas erat imperdiet sed euismod. Sagittis vitae et leo duis ut diam quam. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Mauris pellentesque pulvinar pellentesque habitant. Commodo odio aenean sed adipiscing diam donec adipiscing tristique risus. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Aliquet nibh praesent tristique magna sit amet. Sed sed risus pretium quam vulputate dignissim suspendisse in. Egestas diam in arcu cursus euismod quis viverra. Sem fringilla ut morbi tincidunt augue. Sed augue lacus viverra vitae congue eu consequat ac felis. Sit amet massa vitae tortor. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. Ullamcorper velit sed ullamcorper morbi tincidunt. Est ullamcorper eget nulla facilisi. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Sem integer vitae justo eget magna fermentum iaculis. Consectetur lorem donec massa sapien. Lectus nulla at volutpat diam. Vestibulum lectus mauris ultrices eros. Enim sed faucibus turpis in eu mi bibendum. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Ultrices neque ornare aenean euismod. Tortor posuere ac ut consequat semper viverra nam libero. Ut faucibus pulvinar elementum integer enim neque volutpat ac tincidunt. Viverra tellus in hac habitasse platea dictumst vestibulum. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor."

// Make your program count the number of words in the string.

var regex = /[a-zA-Z]+/g;

var regexOutput = lorem.match(regex);

console.log("Number of words: " + regexOutput.length);

// Make your program count the number of times the Latin word et appears.

var et = /( et | Et )/g;

var regexOutput = lorem.match(et);

console.log("Number of 'et's: " + regexOutput.length);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome.


var palindromes = [
"A man, a plan, a canal, Panama!",
"Amor, Roma",
"race car",
"stack cats",
"step on no pets",
"taco cat",
"put it up",
"Was it a car or a cat I saw?",
"No 'x' in Nixon"
]

function checkPalindrome(str) {
    str = str.toLowerCase();
    str2 = "";
    for(i = 0; i < str.length; i++){
        if(str[i] == "a" || str[i] == "b" || str[i] == "c" || str[i] == "d" || str[i] == "e" || str[i] == "f" || str[i] == "g" || str[i] == "h" || str[i] == "i" || str[i] == "j" || str[i] == "k" || str[i] == "l" || str[i] == "m" || str[i] == "n" || str[i] == "o" || str[i] == "p" || str[i] == "q" || str[i] == "r" || str[i] == "s" || str[i] == "t" || str[i] == "u" || str[i] == "v" || str[i] == "w" || str[i] == "x" || str[i] == "y" || str[i] == "z"){
            str2 += str[i];
        }
    }
    var str3 = str2.split('').reverse().join('');
    console.log("Forward: " + str2);
    console.log("Backward: " + str3);
    if(str2 == str3){
        console.log("Palindrome!");
    } else {
        console.log("Not a palindrome!");
    }
}

checkPalindrome("Is this a plaindrome?");