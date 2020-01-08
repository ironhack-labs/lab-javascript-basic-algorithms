// Iteration 1: Names and Input

var hacker1 = `Yannick`;
console.log(`The driver's name is ${hacker1}`);

var hacker2 = `Anthony`;
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
function longestName(driverName, navigatorName) {
    if (driverName.length > navigatorName.length) return (`The driver has the longest name, it has ${driverName.length} characters.`);
    if (navigatorName.length > driverName.length) return (`The navigator has the longest name, it has ${navigatorName.length} characters.`);
    return (`Wow, you both have equally long names, ${driverName.length} characters!.`);
}

longestName(hacker1, hacker2);

// Iteration 3: Loops
function printName(driverName) {
    var output = ``;
    for (let i = 0; i < driverName.length; i++) {
        output += driverName[i] + ` `;

    }
    return output.toUpperCase();
}

console.log(printName(hacker1));

function printNameReverse(navigatorName) {
    var output2 = ``;
    for (let i = navigatorName.length - 1; i >= 0; i--) {
        output2 += navigatorName[i];

    }
    return output2;
}

console.log(printNameReverse(hacker2));

function orderName(driverName, navigatorName) {

    if (driverName < navigatorName) return `The driver's name goes first.`;
    if (driverName > navigatorName) return `Yo, the navigator goes first definitely.`;
    return `What?! You both have the same name?`;

}

console.log(orderName(hacker1, hacker2));