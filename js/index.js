// Iteration 1: Names and Input

const hacker1 = "Jack";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Tobias";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }

    else if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    }

    else if (hacker1.length === hacker2.length) {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }

// Iteration 3: Loops

let driver = "";

for (let i = 0; i < hacker1.length; i++) {

    driver += hacker1[i].toUpperCase();
    driver += " "

    for (let j = 0; j < 1; j++) {
        driver += " "
    }
}

console.log(driver.slice(0, driver.length -2));

driver = ""

for (i = hacker1.length -1; i >= 0; i--) {
    driver += hacker1[i];
}

console.log(driver);


let lexCompareNames = hacker1.localeCompare(hacker2);



console.log(lexCompareNames)

if (lexCompareNames === -1) {
    console.log("Yo, the navigator goes first definitely.");
}

else if (lexCompareNames === 1) {
    console.log("The driver's name goes first.");
}

else if (lexCompareNames === 0) {
    console.log("What?! You both have the same name?");
}
