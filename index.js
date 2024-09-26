// Iteration 1: Names and Input

let hacker1 = 'John';

console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Bob';

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}

    else if (hacker1.length < hacker2.length) {
        console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
    }

    else {
        console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
    }

// Iteration 3: Loops

let capitalName = '';

for (let i = 0; i < hacker1.length; i++) {

       capitalName += hacker1[i].toUpperCase();
       capitalName += ' ';

    }


console.log(capitalName);

let reverseName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseName += hacker2[i];
}

console.log(reverseName);

if (capitalName.localeCompare(reverseName) === -1) {
    console.log("The driver's name goes first.");
}

else if (capitalName.localeCompare(reverseName) === 1) {
    console.log("Yo, the navigator goes first, definitely.");
}

else {
    console.log("What?! You both have the same name?");
}


// Bonus 1

let wordCount = 0;

let longText =
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nulla felis, laoreet et vulputate nec, congue ac tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent consequat condimentum mauris sagittis bibendum. Donec ex nisi, tempor eget facilisis eu, eleifend at tellus. Pellentesque elementum quam mi, egestas pretium ante aliquet in. Sed sit amet diam sapien. Maecenas quis nisl vitae leo molestie sodales ac ut mi. In et metus molestie, posuere urna ac, interdum lacus. Vestibulum imperdiet, lectus quis imperdiet sagittis, mauris ante consectetur odio, vel efficitur odio sapien eu ex. Nullam urna eros, auctor id leo vitae, ultricies rhoncus sem. Nulla mi sapien, semper id iaculis eget, posuere ac ligula. Nulla elementum nisl purus, quis sodales elit laoreet ac. Duis et pellentesque magna, vel placerat orci. Phasellus faucibus nisi augue, eu posuere ligula ultrices ac. Donec viverra massa vitae nunc aliquet euismod. Donec quis velit in dolor tempor efficitur id vitae velit. Fusce rhoncus congue felis id iaculis. Praesent dictum luctus erat, et placerat nisl. In hac habitasse platea dictumst. Proin id vehicula massa. Sed consectetur, erat at ullamcorper tempus, est sapien iaculis velit, vel dignissim turpis arcu ut dolor. Integer euismod eros sed est finibus, ac posuere neque placerat. Mauris imperdiet interdum orci in mollis. Vestibulum imperdiet nulla nec vehicula convallis. Maecenas ac semper mauris. Integer convallis molestie maximus. Fusce ultricies ex nibh, ac ornare eros feugiat ultrices. Nullam tincidunt facilisis placerat. Suspendisse a erat tellus. Morbi dignissim tortor id mi gravida, eget congue enim elementum. In nec erat vel magna tempus pellentesque pulvinar efficitur leo. Maecenas sit amet eros vel leo ullamcorper sagittis. Pellentesque ac mollis nulla, quis fringilla risus. Fusce odio eros, commodo sit amet ultrices vitae, imperdiet vitae erat. Quisque malesuada erat vestibulum eros gravida molestie. Quisque volutpat vitae libero vitae tincidunt. ";

for (let x = 0; x < longText.length; x++) {
    if (longText[x] === ' ') {
        wordCount ++
    }
}

console.log(wordCount);
