// Iteration 1 : names and imput 
var hacker1 = "Noemie";
console.log("the driver's name is " + hacker1);
var hacker2 = "Marion";
console.log("the navigator's name is " + hacker2);

// Iteration 2 : conditionals 
function longestName() {
    if (hacker1.length > hacker2.length) {
        return `the driver has the longest name, it has ${hacker1.length} characters`;
    } else if (hacker2.length > hacker1.length) {
        return `Yo, navigator got the longest name, it has ${hackers2.length} characters`;
    } else if (hacker1.length === hacker2.length) {
        return `Wow, you both got equally long names, they have ${hacker2.length} characters!`;
    }
}

console.log(longestName());

var upperCased = hacker1.toUpperCase();
console.log(upperCased);

let str = "";
for (var i = 0; i < hacker1.length; i++) {
    str += hacker1.toUpperCase()[i] + " ";
    console.log(str);
}

function reverseString(noe) {
    var splitString = noe.split("");
    console.log(splitString);
    var reverseArray = splitString.reverse();
    console.log(reverseArray);
    var joinArray = reverseArray.join("");
    console.log(joinArray);
    return joinArray;
}

console.log(reverseString(hacker1));


//ITERATION 3 : Loops 
function alphabet(driver, navigator) {
    for (let i = 0; i < driver.length; i++) {
        if (driver[i] < navigator[i]) {
            return `The driver's name goes first.`;
        } else if (driver[i] > navigator[i]) {
            return `Yo, the navigator goes first definitely.`;
        } else if (driver === navigator) return `What?! You both got the same name?`;
    }
}

console.log(alphabet("Marie", "marie"));

//BONUS 

var lorem1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec finibus urna";

//Generated 3 paragraphs, 279 words, 1936 bytes of Lorem Ipsum ;

function wordcount(paragraphes) {
    var sum = 0;
    for (let i = 0; i < paragraphes.length; i++) {
        if (paragraphes[i] === " ") {
            sum += 1;
        }
    }
    return sum;
}
console.log(wordcount(lorem1));