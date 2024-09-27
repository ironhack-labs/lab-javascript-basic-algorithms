console.log("I'm ready!");
// Iteration 1

const hacker1 = "Luca";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Pablo";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2 

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
};

// Iteration 3

let newName = '';

for (let i = 0; i < hacker1.length; i++) {
    const charUpperCase = hacker1[i].toUpperCase()

    newName += charUpperCase;

    if (i !== hacker1.length - 1) {
        newName += " ";
    }

}

console.log(newName);

let reversedNavigatorName = '';

for (let i = hacker2.length - 1; i >= 0; i--) {
    reversedNavigatorName += hacker2[i];
}

console.log(reversedNavigatorName);

// iteration 3.3

if (hacker1.localeCompare(hacker2) === 0) {
    console.log("Hola");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("hola2");
} else {
    console.log("hola3");
}

// Bonus Iteration 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor libero, mollis vitae diam ut, mattis finibus urna. Suspendisse venenatis id dolor ac lacinia. Vestibulum pellentesque mollis lectus, non efficitur urna scelerisque id. Nunc ornare dolor sed lacus auctor tempus. Sed eget aliquam dolor. Morbi vel libero vel magna finibus dapibus bibendum ac augue. Quisque aliquet mollis luctus. Nam lobortis nulla ut suscipit posuere. Cras laoreet pharetra urna, vitae pellentesque lorem maximus et. Morbi porta, nulla non aliquet luctus, tortor ligula placerat nisl, id facilisis justo odio vitae eros. Nullam feugiat tempor nibh, ut bibendum metus aliquam sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent dictum tortor ac posuere porta. Aenean non nisi vitae sem feugiat venenatis et vel nibh. Cras a erat augue. Vestibulum consectetur, metus nec suscipit dapibus, nisl est fringilla quam, vitae imperdiet tellus est ut lorem.Pellentesque vitae facilisis est. Sed luctus viverra ex, non tempor leo mollis vel. Donec tempus feugiat enim, at blandit urna malesuada a. Ut consectetur est eget augue vestibulum gravida. Suspendisse ullamcorper tristique nunc, id rhoncus nisi imperdiet nec. Nam sit amet velit at nibh pulvinar convallis a sit amet ipsum. Phasellus eu erat sit amet leo imperdiet lacinia et non metus.Aliquam erat volutpat. Donec congue, justo at feugiat condimentum, augue tortor porta augue, ac elementum risus lectus sed ante. Curabitur sagittis ullamcorper nisi, a sodales metus finibus fringilla. Vestibulum nec pulvinar dolor. Nam luctus dui sit amet nisl volutpat, sed pharetra mauris efficitur. Mauris ultricies ullamcorper vulputate. Maecenas laoreet rhoncus vulputate. Quisque viverra vehicula rhoncus. Phasellus tincidunt imperdiet porttitor. Aenean commodo lacinia felis, a consequat massa bibendum sed.";

let countWord = 0;

for (let i = 0; longText.length > i; i++) {
    if (longText[i] === ' ') {
        countWord++
    }

}

console.log(countWord);

let etWord = 0;

for (let j = 0; j < longText.length; j++) {
    const etTwo = longText[j] + longText[j + 1];
    if (etTwo === "et") {
        etWord++;
    }
}

console.log(etWord);


const phraseToCheck = "A man, a plan, a canal, Panama!";
