// Iteration 1: Names and Input
let hacker1 = "Matulan";
console.log("The driver's name is", hacker1);

let hacker2 = "Miguel";
console.log("The navigator's name is", hacker2);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The Driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} `)
} else {
    console.log(`They both have equal long names, with ${hacker1.length}`)
}

// Iteration 3: Loops

let capitalName = "";
let lowercaseName = "";

for (let i = 0; i < hacker1.length; i++) {
    capitalName += (hacker1[i].toUpperCase() + " ")
    
}

console.log(capitalName)

for (let i = hacker2.length - 1; i >= 0; i--) {
    lowercaseName += (hacker2[i])
    
}

console.log(lowercaseName)

if (hacker1 < hacker2) {
    console.log("The driver's name goes first.") 
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

//Bonus 1

let lorum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dictum, urna pretium scelerisque tincidunt, tortor eros vehicula eros, at vehicula quam tellus quis nulla. Curabitur nec odio pellentesque, varius nisl non, varius tortor. Aenean maximus risus eu varius egestas. Suspendisse blandit enim vitae auctor porta. Nullam pharetra viverra lectus, vel sodales ante porta sit amet. Pellentesque euismod convallis nibh vel elementum. Phasellus sit amet quam id est sollicitudin facilisis in non magna. Etiam tristique quis mi a suscipit. Nulla tristique molestie faucibus. Mauris hendrerit tortor augue, id efficitur eros mollis quis. Duis ut risus nibh. Curabitur id elit lectus. Aliquam quis ultrices justo. Sed nec tincidunt magna. Nunc pretium efficitur magna ultricies pellentesque. Pellentesque malesuada porta erat interdum sodales. Vivamus lacus nibh, eleifend sed lectus ut, lobortis volutpat ante. Phasellus finibus facilisis magna, quis blandit libero porta vel. Ut nec ipsum ac eros sollicitudin volutpat a at nisl. Cras ante enim, porta quis consectetur convallis, auctor ut quam. Donec auctor sapien eget justo lobortis volutpat. Donec accumsan, elit non pretium venenatis, nisi est semper libero, rutrum rhoncus neque nulla vel est. Praesent venenatis ipsum sed nulla sollicitudin viverra. Praesent eget dapibus nisl, vel malesuada orci. Duis quis lorem elementum enim tristique dictum maximus in libero. Cras ornare venenatis egestas. Suspendisse quam diam, mattis eget tincidunt vitae, lacinia non lectus. In vitae ex dignissim turpis blandit rhoncus. Nullam molestie scelerisque ipsum, eget egestas felis maximus et. Donec auctor libero sit amet imperdiet congue."

let wordCount = lorum.split(" ");
let etCount = lorum.split("et");

console.log(wordCount.length);
console.log(etCount.length);


//Bonus 2

let phraseToCheck = "racecar";

const phraseLength = phraseToCheck.length;

for (let i = 0; i < phraseLength / 2; i++) {
    if (phraseToCheck[i] !== phraseToCheck[phraseLength - 1]) {
        console.log("This is not a palindrome")
        break;
    } else {
        console.log("This is a palindrome");
        break;
    }
}

