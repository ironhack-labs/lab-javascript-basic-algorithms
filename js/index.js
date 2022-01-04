// Iteration 1: Names and Input
console.log("im ready")

const hacker1 = "Bo"
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Niels"
console.log(`The navigator name is ${hacker2}`);

// Iteration 2: Conditionals
let driverNameLength = hacker1.length;
let navigatorNameLength = hacker2.length;


if (driverNameLength > navigatorNameLength) {
    console.log(`The driver has the longest name, it has ${driverNameLength} characters`)
}else if (driverNameLength < navigatorNameLength){
    console.log(`The navigator has the longest name, it has ${navigatorNameLength} characters`)
}else if (driverNameLength === navigatorNameLength){
    console.log(`Wow, you both have equally long names, ${navigatorNameLength} characters!`);
}

// Iteration 3: Loops

// Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
let driverUppercase = hacker1.toUpperCase()
let outPutDriver =""
for(let i = 0; i <= driverNameLength; i++ ) {
    outPutDriver += driverUppercase.slice(i, i + 1) + " ";
}
console.log(outPutDriver);

// Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let outPutNavigator =""
for(let i = navigatorNameLength -1; i >= 0 ; i-- ) {
    outPutNavigator += hacker2[i];
}
console.log(outPutNavigator);

// Depending on the lexicographic order of the driver and navigator.
switch (hacker1.localeCompare(hacker2)){
    case 0:
        console.log("What?! You both have the same name?")
        break;
    case 1:
        console.log("Yo, the navigator goes first definitely.")
        break;
    default:
        console.log("The driver's name goes first.")
}

//Done













