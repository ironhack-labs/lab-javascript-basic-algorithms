// Iteration 1: Names and Input

let hacker1 = "Natalia";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Juanito";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log (`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log (`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters! `);
} else {
    console.log("Something went wrong");
};

// Iteration 3: Loops

// 3.1

let spacedAndCapitalized = "";

for (let i=0; i < hacker1.length; i++) {
    let upperChar = hacker1[i].toUpperCase() + " ";
    spacedAndCapitalized += upperChar;
}

console.log (spacedAndCapitalized);


// 3.2

let reversedName = "";

for (let i=hacker2.length-1; i >= 0; i--) {
    reversedName += hacker2[i];
}

console.log (reversedName);

// 3.3

/*let hacker1 = "Natalia";
let hacker2 = "Juanito";*/

if ('hacker1'.localeCompare('hacker2') === 1) {
    console.log("The driver's name goes first.")
} else if ('hacker1'.localeCompare('hacker2') === -1) {
    console.log("Yo, the navigator goes first, definitely.")
} else if ('hacker1'.localeCompare('hacker2') === 0) {
    console.log("What?! You both have the same name?")
} else {
    console.log("Something went wrong")
}

// BONUS 1

/*Generate 3 paragraphs. Store the text in a new string variable named longText.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/

let longText ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel tempus diam, ac vulputate nisi. Nulla consequat est quis ante cursus, quis efficitur nunc placerat. Duis sollicitudin vestibulum nulla non molestie. Integer aliquet maximus neque, eu vehicula neque. Suspendisse sapien tortor, faucibus ut tempor non, tempor eu quam. Quisque ut risus tortor. Proin id mattis arcu. Praesent sit amet turpis lacinia justo pharetra sollicitudin nec quis justo. Etiam venenatis risus vel rutrum cursus. In hac habitasse platea dictumst. Sed aliquet sagittis neque vitae porta. Proin porta semper purus quis tempus. Duis eu pulvinar diam. Maecenas egestas velit et sapien sodales, sit amet mollis tortor malesuada. Nulla facilisi.Fusce placerat feugiat tempor. Nulla quis turpis posuere, lobortis arcu a, lobortis augue. In mi nibh, ullamcorper finibus sagittis vitae, pellentesque ac lectus. Vivamus id sapien in velit gravida consectetur sit amet ac mi. Donec dapibus urna sit amet quam consequat, a vestibulum tellus viverra. Aliquam a odio massa. Ut lacinia vulputate facilisis. Praesent ac odio ut lorem accumsan sollicitudin ut non velit. Sed nec augue consequat, porttitor urna mollis, pellentesque dui. Integer at dui turpis. Donec varius eleifend rhoncus. Praesent id molestie nunc. Nullam feugiat dolor vel massa iaculis, eget accumsan massa elementum. Sed accumsan magna vitae justo tincidunt, sit amet volutpat mi suscipit. Vivamus eleifend neque vitae nulla tempor gravida. Aenean finibus nisl sed augue hendrerit, at convallis massa dignissim. Nulla a sem suscipit ipsum congue convallis. Vestibulum euismod dapibus malesuada. Integer venenatis dictum pretium. Ut id augue iaculis, iaculis nibh vehicula, eleifend ligula."

function countWords(str) {
    return str.trim().split(/\s+/).length;
  } //found this in stackOverflow!

  console.log(countWords(longText));


//console.log(longText.indexOf(" et"));
//console.log(longText.indexOf(" et", 658));
// looks like it only appears once, not so happy with this method tho, if a very long text, then this is super manual work, should it be a loop??? //

function countWords (text) {
let etCount = 0;
for (let i=0; i<text.length;) {
    i = text.indexOf(" et", i);
    if (i !== -1) {
    etCount ++;
    i += 3;
    } else {
        break;
    }
}; 

if (etCount === 1) {
    return (`The string "et" appears ${etCount} time.`);
} else if (etCount > 1) {
    return (`The string "et" appears ${etCount} times.`);
}

};

countWords(longText);

//got lost, asked chatgpt to correct my code and analyzed it step by step.



// BONUS 2 //

let phraseToCheck = "saippuakauppias"

function checkPhrase (phrase) {
    let phrase1 = "";
    for (let i = 0; i < phrase.length; i++) {
        phrase1 += phrase [i];
    };
    let phrase2 = "";
    for (let i = phrase.length - 1; i >= 0; i--) {
        phrase2 += phrase[i]
    };
    if (phrase1 === phrase2) {
        return ("The phrase is a plaindrome!")
    } else {
        return ("Not a palindrome!")
    }
}

console.log(checkPhrase(phraseToCheck));


// created the function on my own and then had chat help me with += and not ++ for the phrases and I forgot the [i]
// it works for simple words, but not sure if this works for entire sentences, like in the example