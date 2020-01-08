// Iteration 1: Names and Input
var hacker1 = "Pauline";
var hacker2 = "Coline";
console.log(`The drivers name is ${hacker1}. The explorator name is ${hacker2}.`)

// Iteration 2: Conditionals

function nameLength(a,b) {
    if (a.length > b.length) {
        return `${a} The driver has the longest name, it has ${a.length} characters`;
    }
    if (a.length < b.length) {
        return `${b} It seems that the navigator has the longest name, it has ${b.length} characters.`;
    }
    else 
        return `Wow, you both have equally long names, ${a.length}`;
}

console.log(nameLength(hacker1, hacker2)); 

// Iteration 3: Loops

function charactersDriver (a) {
    var nameMaj = "";
    for (var i=0; i < a.length; i++) {
        nameMaj += a[i].toUpperCase() + ` `;
    }
    return nameMaj;
}

function charactersNavigator (a) {
    var nameReverse = a.split("").reverse().join("");
    return nameReverse;
}

function lexicoName (a,b) {
    if (a.localeCompare(b)) {
        return`${b} goes first`
    }
    if (a == b) {
        return `what ?! you both have the same name ?`
    }
    else {
        return `${a} goes first`}
}
console.log(charactersDriver(hacker1));
console.log(charactersNavigator(hacker2));
console.log(lexicoName(hacker1, hacker2));

let loremIpsum = "et et et et et et la la la la la"
function wordCount(a) { 
    console.log(a.split(" ").length);
  }

wordCount(loremIpsum);