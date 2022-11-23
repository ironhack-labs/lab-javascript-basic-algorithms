// Iteration 1: Names and Input
let hacker1 = "Laura";
let hacker2 = "Lovro";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

//
// Iteration 2: Conditionals

const compareNameLength = (name1, name2) => {
    if (name1.length > name2.length) {
        console.log(`The driver has the longest name, it has ${name1.length} characters.`);
    } else if (name1.length < name2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${name2.length} characters.`);
    } else {
        console.log(`Wow, you both have equally long names, ${name1.length} characters!`);
    }
}


// Iteration 3: Loops
compareNameLength(hacker1, hacker2);

const printNameLoop = (name) => {
    let nameWithSpaces = "";
    for (let i = 0; i < name.length; i++) {
        nameWithSpaces += name[i] + " ";
    }
    return nameWithSpaces.toUpperCase();
}

console.log(printNameLoop(hacker1));


const reverseNameLoop = (name) => {
    let reversedName = "";
    for (let i = name.length - 1; i >= 0; i--) {
        reversedName += name[i].toLowerCase();
    }
    return reversedName;
}
console.log(reverseNameLoop(hacker2));



const printName = (name) => name.split("").join(" ").toUpperCase();
console.log(printName(hacker1))
const reverseName = (name) => name.split("").reverse().join("").toLowerCase();
console.log(reverseName(hacker2))



const compareNames = (name1, name2) => {
    if (name1 === name2) {
        console.log("What?! You both have the same name?");
    } else if (name1 < name2) {
        console.log("The driver's name goes first.");
    } else {
        console.log("Yo, the navigator goes first definitely.");
    }
}



compareNames(hacker1, hacker2);


// Bonus 1

const par1 = "Lorem ipsum et  dolor sit amet, consectetur adipisicing elit. Molestiae quisquam quas itaque voluptatibus cumque explicabo  et atque similique et officia adipisci quae."

const par2 = "Magni, illo eveniet deleniti et facilis et dolorum velit. Saepe sequi et voluptas, illum sit odit maxime."
const par3 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quisquam et quas itaque voluptatibus cumque explicabo atque et similique officia adipisci quae. Magni, illo eveniet deleniti facilis dolorum velit. Saepe sequi voluptas, illum sit odit maxime."


const countWords = (paragraph) => paragraph.split(" ").length;



console.log(countWords(par1))
console.log(countWords(par2))
console.log(countWords(par3))



const countEt = (paragraph) => {
    let count = 0;
    let words = paragraph.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i] === "et") {
            count++;
        }
    }
    return count;
}

console.log(countEt(par1))
console.log(countEt(par2))
console.log(countEt(par3))

//

const checkPalindrome = (phrase) => {
    const phraseToCheck = phrase.toLowerCase().split(" ").join("");
    const reversedPhrase = phraseToCheck.split("").reverse().join("");
    return phraseToCheck === reversedPhrase;
}


console.log(checkPalindrome("race car"))
console.log(checkPalindrome("step on no pets"))

