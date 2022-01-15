// Iteration 1: Names and Input

let hacker1 = 'Albert'; {
    console.log(`The driver's name is ${hacker1}.`);
}

let hacker2 = 'Beatri'; {
    console.log(`navigator's name is ${hacker2}.`);
}

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
} 


// Iteration 3: Loops

let result = hacker2.toUpperCase().split("").join(" ").replace(/\s+/g, " ");
    console.log(result);

let reverseResult = (hacker2.split('').reverse().join(''));
    console.log(reverseResult);

    hacker1 = hacker1.toLowerCase();
    hacker2 = hacker2.toLowerCase();
    
    if (hacker1 > hacker2) {
      console.log("The driver's name goes first.")
    }
    else if (hacker1 < hacker2) {
      console.log("Yo, the navigator goes first definitely.")
    }
    else {
      console.log("What?! You both have the same name?")
    } 