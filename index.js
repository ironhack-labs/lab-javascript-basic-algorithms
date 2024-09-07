// Iteration 1: Names and Input
    let hacker1 = "Zack";
    console.log("The driver's name is " + hacker1);
    let hacker2 = "Pedro";
    console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
    if (hacker1.length === hacker2.length) {
        console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
    } else if(hacker1.length > hacker2.length) {
        console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
    } else if (hacker1.length < hacker2.length) {
        console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
    }

// Iteration 3: Loops
    let driverName = "";
    for (let i = 0 ; i < hacker1.length ; i++) {
        driverName += hacker1[i].toUpperCase() + " ";
    } driverName = driverName.trimEnd(" ");
    console.log(driverName);

    let navigatorName = "";
    for (let i = hacker2.length - 1 ; i >= 0 ; i--) {
        navigatorName += hacker2[i];
    } console.log(navigatorName);
    
    if (hacker1 === hacker2) {
        console.log("What?! You both have the same name?");
    } else if (hacker1 < hacker2) {
        console.log("The driver's name goes first.");
    } else if (hacker1 > hacker2) {
        console.log("Yo, the navigator goes first, definitely.");
    }

    let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur gravida nunc. Vestibulum vitae justo id risus dapibus laoreet id et quam. Nullam rhoncus sodales tortor vel rhoncus. In hac habitasse platea dictumst. Donec auctor elit ut diam suscipit, sit amet hendrerit massa elementum. Vivamus quis euismod ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Donec aliquam eu mi ut maximus. Proin pretium, mauris eget molestie tempus, est nisi varius risus, semper sagittis justo lorem nec nunc. Vivamus vel vestibulum massa. Donec vel velit quis massa ornare commodo.

Duis diam urna, volutpat at volutpat eu, malesuada sed elit. Ut nec elit blandit, sollicitudin ipsum a, volutpat magna. Aenean rutrum sed justo at maximus. Morbi sapien turpis, dapibus eget ante vitae, commodo mollis enim. Cras tortor justo, tempus nec urna at, eleifend mollis ante. Quisque aliquam sem quis imperdiet commodo. Nullam placerat ligula sed nunc rhoncus aliquet. Nunc et eros at nisl pulvinar rhoncus. Quisque interdum turpis justo, vel scelerisque massa ultricies in. Nullam dignissim cursus purus id blandit. Nunc condimentum nulla non est suscipit pellentesque. Mauris eu euismod ex. Aenean volutpat pellentesque felis, eu commodo ex semper et.

Maecenas sit amet neque commodo, egestas nisl et, scelerisque mi. Mauris tincidunt condimentum diam non luctus. Cras id turpis malesuada, ultrices dui vel, ornare risus. Phasellus efficitur nibh nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur at cursus libero, non dapibus purus. Fusce ut enim consectetur, pretium eros venenatis, congue magna. Vestibulum auctor sodales quam, vel semper mi consectetur at. Morbi porta quam sed velit vehicula, at consectetur sapien ultricies.`

    let wordCount = 0;
    let etCount = 0;
    let words = longText.split(/\s+/);
    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        if (word.endsWith(".") || word.endsWith(",")) {
            word = word.slice(0, -1);
        }

        if (word.toLowerCase() === "et") {
            etCount++;
        }
    }
    wordCount = words.length;
    console.log("The word count = ", wordCount,"The et count = ", etCount);
    
    let phraseToCheck = "stack cats";
    let cleanedStr = "";
    for (let i = 0 ; i < phraseToCheck.length ; i ++){
        let letter = phraseToCheck[i];
        if (letter !== "," && letter !== "." && letter !== " ") {
            cleanedStr += letter;
        }
    }
    let reversedStr = "";
    for (let i = cleanedStr.length - 1 ; i >= 0 ; i--) {
        reversedStr += cleanedStr[i];
    }
    console.log (cleanedStr === reversedStr ? "It's a palindrome!" : "It's not a palindrome!");