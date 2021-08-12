// Iteration 1: Names and Input

    // 1.1 Create a variable `hacker1` with the driver's name.
    let hacker1= "Michael";
    
    // 1.2 Print `"The driver's name is XXXX"`.
    console.log(`The driver's name is ${hacker1}`);

    // 1.3 Create a variable `hacker2` with the navigator's name.
    let hacker2= "Dario";

    // 1.4 Print `"The navigator's name is YYYY"`.
    console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

    // 2.1. Depending on which name is longer, print:
    // - The driver has the longest name, it has XX characters. or
    // - It seems that the navigator has the longest name, it has XX characters. or
    // - Wow, you both have equally long names, XX characters!

    const longerName = (driver, navigator) => {
        if (driver.length === navigator.length) {
            return `Wow, you both have equally long names, ${driver.length - 1} characters!`
        }
        if (driver.length > navigator.length) {
            return `The driver has the longest name, it has ${driver.length - 1} characters`
        } else {
            return `It seems that the navigator has the longest name, it has ${navigator.length - 1} characters.`
        }
    }
    longerName("Michael","Dario")


// Iteration 3: Loops

    // 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
    console.log(hacker1[0].toUpperCase() + " " + hacker1[1].toUpperCase() + " " + hacker1[2].toUpperCase() + " " + hacker1[3].toUpperCase() + " " + hacker1[4].toUpperCase() + " " + hacker1[5].toUpperCase() + " " + hacker1[6].toUpperCase())
    
    // 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
    console.log(hacker2[4] + hacker2[3] + hacker2[2] + hacker2[1] + hacker2[0])
    // 3.3 Depending on the lexicographic order of the strings, print:
    // - The driver's name goes first.
    // - Yo, the navigator goes first definitely.
    // - What?! You both have the same name?

    