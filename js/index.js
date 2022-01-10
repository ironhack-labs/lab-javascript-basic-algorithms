// Iteration 1: Names and Input
// 


let hacker1 = "Johnson";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "John";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}


// Iteration 3: Loops

function printInCapitalsWithSpaces(name) {
    let nameInUpperCase = name.toUpperCase();
    let newString = "";
    for (let i = 0; i < name.length; i++) {
        if (name[i+1]) {
            newString += `${nameInUpperCase[i]} `; 
        } else {
            newString +=`${nameInUpperCase[i]}`;
        }
    }
    console.log("New string is: ", newString);
    return newString;
}

printInCapitalsWithSpaces(hacker1);
printInCapitalsWithSpaces(hacker2);

function commentOnLexicographicalOrder(driver, navigator) {
    let comesFirst = "";
   
    for (let i= 0; i < driver.length; i++) {
        if (navigator[i]) {
            if (driver[i] < navigator[i]) {
                comesFirst = driver;
                break;
            } else if (driver[i] > navigator[i]) {
                comesFirst = navigator;
                break;
            } else if (driver[i] === navigator[i]) {
                comesFirst = "equal";
            }
        } else {
            comesFirst = navigator;
            break;
        }
    }

    if (comesFirst === "equal" && navigator.length > driver.length) {
        comesFirst = driver;
    }

    console.log("First: ", comesFirst);
    
    switch (comesFirst) {
        case driver:
            console.log("The driver's name goes first");
            break;
        case navigator:
            console.log("Yo, the navigator goes first definitely.");
            break;
        case "equal":
            console.log("What?! You both have the same name?");
    }
}

commentOnLexicographicalOrder(hacker1, hacker2);

