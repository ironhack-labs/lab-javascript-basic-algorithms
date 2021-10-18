// Group 10 => Olena, Mahsa, Julien

// Iteration 1: Names and Input
const hacker1 = "Julien";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Olga";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(
        `The driver has the longest name, it has ${hacker1.length} characters.`
    );
} else if (hacker2.length > hacker1.length) {
    console.log(
        `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
    );
} else if (hacker1.length === hacker2.length) {
    console.log(
        `Wow, you both have equally long names, ${hacker1.length} characters!`
    );
}

// Iteration 3: Loops

let driverName = hacker1.toUpperCase();
let newDriverName = "";

for (let i = 0; i < driverName.length; i++) {
    newDriverName += driverName[i] + " ";
}

console.log(newDriverName);

let navigatorName = hacker2;
let newNavigator = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    newNavigator += navigatorName[i];
}

console.log(newNavigator);

// Locale compare
const arr = [newDriverName, newNavigator];
const sorted = arr.sort((a, b) => a.localeCompare(b));

console.log(sorted);

if (sorted[0] < sorted[1]) {
    console.log("The driver's name goes first.");
} else if (sorted[0] > sorted[1]) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

// Bonus 1
let paragraphs =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae eros et ante ullamcorper aliquam at nec erat. Sed porttitor ullamcorper ligula. Sed interdum imperdiet mauris, sed elementum ex. Nullam sit amet gravida odio. Nullam semper lacus id dolor feugiat, ac suscipit quam vehicula. Praesent nec arcu et quam vehicula viverra. Integer in neque suscipit, imperdiet ligula ac, mattis eros. Duis neque neque, bibendum sed sapien eget, sodales tempor urna. Donec sed risus et erat accumsan consequat nec in quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam at suscipit nisl. Integer malesuada interdum purus, ac faucibus sem lobortis ut.\n\nAliquam ultricies mollis enim, non congue mi gravida sit amet.Duis malesuada at tortor nec laoreet.Maecenas tempor arcu id gravida sollicitudin.Nulla a ullamcorper nulla, ac maximus neque.Suspendisse euismod augue vitae ipsum laoreet, hendrerit rutrum nunc cursus.Etiam eu sem commodo, feugiat libero nec, ultrices purus.Fusce non mi at velit porttitor interdum pharetra consequat nulla.\n\nAenean imperdiet magna at posuere ullamcorper. Nunc tellus metus, interdum sed felis eget, consectetur ullamcorper turpis. Vestibulum sed justo porttitor, vestibulum nulla a, porta turpis. Phasellus eleifend pulvinar luctus. Suspendisse quis sapien urna. Fusce id rutrum lacus. Donec facilisis sed magna sit amet aliquet. Proin quis risus ut diam tempus tincidunt non id quam. Curabitur quis viverra dui. Nam eget ex ex. Nunc at eros commodo, cursus lectus ac, pharetra diam. Vivamus sit amet dolor dapibus, congue ligula eu, porta lorem. In lectus turpis, aliquet vel nisi vitae, lacinia egestas purus.";
let numberWords = paragraphs.match(/(\w+)/g).length
console.log(numberWords)

let numberEt = paragraphs.split(" et ").length - 1
console.log(numberEt)


// Bonus 2
let phraseToCheck = "race car";
let phraseWords = phraseToCheck.replace(/\s/g, "").replace(/!/g, "").replace(/,/g, "").toLowerCase()

let splitPhrase = ""
let endPhrase = ""

for (let i = 0; i <= phraseWords.length / 2; i++) {
    splitPhrase += phraseWords[i]
}

console.log(splitPhrase)

for (let i = (phraseWords.length - 1) / 2; i >= 0; i--) {
    endPhrase += phraseWords[i]
}



console.log(endPhrase)