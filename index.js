// Iteration 1: Names and Input
let hacker1 = "Ionela";
console.log("The driver's name is " + hacker1);

let hacker2 = "Cristina";
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
console.log("The driver's name lenght is " + hacker1.length);

console.log("The navigator's name lenght is " + hacker2.length);

const a = "hacker1";
const b = "hacker2";

if(a < b){
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
}
else if(a > b){
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
}
else {
    console.log("Wow, you both have equally long names, " + hacker1.length + hacker2.length + " characters!");
}

// Iteration 3: Loops

// 1. The characters of the driver's name, separated by space, and in capital letters

let driverName = "Ionela";
let result = "";

for(let i=0; i < driverName.length; i++){
    result += driverName[i].toUpperCase();
    if(i<driverName.length - 1) {
        result += " ";
    }
}
console.log(result);

// 2. Print all the characters of the navigator's name in reverse order

let navigatorName = "Cristina";
let resultNav = "";

for (let i = navigatorName.length - 1; i>=0; i--){
    resultNav += navigatorName[i];
}

console.log(resultNav);

// 3.  Lexicographic order of the strings using compare

if (driverName.localeCompare(navigatorName) < 0) {
    console.log("The driver's name goes first.");
} else if (driverName.localeCompare(navigatorName) > 0){
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}


// ------- Bonus 1  -------

// Generate 3 paragraphs. Store the text in a new string variable named longText.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vitae leo aliquet, scelerisque urna a, maximus ipsum. Nulla sit amet ultricies odio, iaculis lacinia sem. Fusce rutrum viverra diam at vestibulum. Mauris eu blandit lorem. Aenean iaculis nunc id iaculis aliquet. Cras pellentesque bibendum sapien non ultricies. Nam fermentum felis in mollis elementum. Mauris fermentum fringilla enim at vestibulum. Donec et iaculis lacus. In sollicitudin est sagittis arcu egestas laoreet. Etiam pulvinar rhoncus scelerisque. Pellentesque ac quam massa. Suspendisse non ultrices elit. Mauris lobortis velit tincidunt dui venenatis, eu ullamcorper velit gravida. Praesent tempus eget tortor non consectetur. Praesent sodales lorem vel massa ultrices, nec bibendum dolor luctus. Aliquam dignissim urna nec orci efficitur aliquam. Etiam ornare aliquet quam. Vestibulum pharetra dapibus neque ac tincidunt. Suspendisse vel consequat tortor, eu molestie sem. Nulla facilisi. Morbi pretium quis dolor eget vehicula. Integer blandit finibus ante, ut maximus lacus venenatis et. Mauris fermentum vestibulum odio. Etiam diam dolor, tristique vel felis non, malesuada fermentum nibh. Suspendisse sagittis arcu sit amet lectus porta facilisis. Quisque ultricies luctus purus, at varius erat aliquet in. Duis vitae tellus vel dolor viverra congue quis ac lacus.";

console.log("The long text has a total of " + longText.length + " characters."); // I don't know how to count words, only characters

// console.log("The word et appears a total number of " + longText.count('et') + " times."); // doesn't work like this


// ------- Bonus 2  -------

// I don't understand this