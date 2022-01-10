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


// Bonus question 1

const lorem = `
    
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel aliquet tellus. Aenean quis metus tellus. Proin porttitor odio at elit porttitor interdum. Vestibulum eget turpis non sem viverra finibus a sed risus. Aliquam dolor purus, interdum quis felis et, accumsan tempor metus. Phasellus luctus, est ut bibendum ornare, lorem ipsum sagittis ipsum, quis interdum erat neque vel ante. Aliquam nibh massa, faucibus condimentum leo eget, elementum malesuada diam. Pellentesque commodo orci quis libero porttitor, tincidunt ultrices elit facilisis. Proin nibh libero, ornare nec bibendum in, vehicula vel arcu. Vivamus diam diam, vehicula porta malesuada vel, pellentesque vitae urna. Mauris vehicula malesuada dui quis commodo.

Mauris gravida ante consectetur ante imperdiet vehicula. Maecenas ultricies dapibus purus sed dignissim. Nam elementum augue quis nunc euismod, nec fringilla felis porttitor. Ut viverra finibus vulputate. Suspendisse potenti. Suspendisse ut neque non augue condimentum tincidunt scelerisque a ex. Sed interdum luctus erat in imperdiet. Aenean placerat purus vitae libero aliquet pellentesque. Donec aliquet tellus dui, vel dapibus magna ultricies quis. Nullam eget elit sollicitudin, tempus justo finibus, maximus nibh.

Donec ac rhoncus mauris. Etiam nec arcu est. In hac habitasse et platea et dictumst. Curabitur mattis ex ex. Nullam vestibulum convallis dictum. Duis tristique hendrerit libero eget sollicitudin. Ut ultricies sodales scelerisque. Duis ac dignissim sem. Maecenas magna quam, faucibus quis blandit ac, commodo eget nisi. Mauris auctor elementum malesuada. Duis id lorem elementum diam varius commodo. Morbi pulvinar velit felis, quis varius libero laoreet ac. Cras nisi orci, sodales semper mauris eu, dictum malesuada lacus et?`;

function countNumberOfWords(string) {
    let numberOfWhiteSpaces = 0;
    for (let i=0; i < string.length; i++) {
        if (string[i]= " ") {
            numberOfWhiteSpaces++;
        }

    }
    
    const numberOfWords = numberOfWhiteSpaces - 1;
    console.log("Number of words of Lorem text: ", numberOfWords);
    return numberOfWords;
}

countNumberOfWords(lorem);

function countNumberOfEts(string) {
    
    let index;
    let slicedString;
    let numberOfEts = 0;

    while (true) {
        index = string.indexOf(" et");
    if (index === -1) {
        break;
    }
    if ((index !== -1) &&
        (string[index + 3] === " " ||
        string[index + 3] === "," ||
        string[index + 3] === ";" ||
        string[index + 3] === "." ||
        string[index + 3] === "!" ||
        string[index + 3] === "?")) {
        numberOfEts++;
    }
    string = string.slice(index + 2, string.length);
    }
    console.log("Number of words 'et': ", numberOfEts);
    return numberOfEts;
}

countNumberOfEts(lorem);