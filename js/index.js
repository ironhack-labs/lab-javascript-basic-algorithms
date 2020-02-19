// Iteration 1: Names and Input
let hacker1 = 'Gustavo';
console.log(`The driver's name is ${hacker1}`);

let hacker2 = 'Gabriel';
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.lenght > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.lenght < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops
let name = "";

for (let i = 0; i < hacker1.length; i+=1) { 
    name = name + hacker1[i].toUpperCase() + ' ';
}

console.log(name);

let eman = "";

for (let i = hacker2.length-1; i >= 0 ; i-=1) {
    eman = eman + hacker2[i];
}

console.log(eman);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.")
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}


// BONUS 1
let lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet urna a augue blandit mattis sed et metus. Curabitur massa arcu, auctor non urna eget, varius egestas ligula. Sed convallis sem eget leo suscipit interdum. Phasellus lacinia odio quam, in faucibus arcu accumsan sit amet. Morbi at tortor in magna mollis pellentesque. Phasellus feugiat blandit dui, sit amet venenatis quam commodo ac. Integer ut pharetra sapien, nec fermentum justo. Nunc ut auctor metus, non finibus lorem. Aenean in felis accumsan, auctor eros quis, dapibus metus. Donec cursus dui at elementum mattis. Cras quis congue justo, vitae pharetra purus. Sed sollicitudin lorem vitae ligula molestie, non molestie nisi bibendum. Pellentesque id massa turpis. Fusce bibendum, enim quis sodales varius, diam urna fringilla nunc, eget ullamcorper ante lorem in quam. Sed at lectus nulla. 
Nam a massa eget libero volutpat laoreet feugiat eu purus. Suspendisse ut quam eu lectus molestie vulputate ut eu tortor. Sed gravida tristique nunc. Maecenas sed porttitor ex. Donec congue euismod tortor, sed venenatis eros laoreet ac. Nullam fringilla massa consectetur placerat finibus. Integer a velit vitae quam vulputate accumsan eget a sem. Proin hendrerit malesuada sapien ac tempor. Etiam ac arcu ac diam condimentum rutrum eu eget tortor. Phasellus nec justo quam. Mauris dictum ipsum ante, id gravida erat suscipit sed. Morbi posuere dolor nibh, in ultrices leo facilisis vel. Duis magna tellus, condimentum vitae mi eu, aliquam porttitor ex. Quisque faucibus pulvinar augue et efficitur. Suspendisse nunc ante, cursus eu diam in, placerat ullamcorper odio. Maecenas vehicula nisi et maximus feugiat. Praesent ultrices tortor sed quam scelerisque condimentum. Fusce viverra semper elit, id pharetra ipsum congue et. Donec elementum libero nisi, ac mattis orci aliquet interdum. In nec lacus dui.`;

let words = 1, et=0;

for (i=0 ; i < lorem.length-1; i++) {
    if (lorem[i] === " ") {
        words += 1;
    }
    if (lorem[i-1] + lorem[i] + lorem[i+1] + lorem[i+2] === " et ") {
        et += 1;
    }
}

console.log(words, et);


// BONUS 2
let phraseToCheck = 'A man, a plan, a canal, Panama!';
    // 'Amor, Roma',
    // 'race car',
    // 'stack cats',
    // 'step on no pets',
    // 'taco cat',
    // 'put it up',
    // 'Was it a car or a cat I saw?',
    // 'No "x" in Nixon'];

let palindrome = '';

let palindromeRw = '';

for (let i = phraseToCheck.length-1; i >= 0 ; i-=1) {
    if (phraseToCheck[i] === " " || phraseToCheck[i] === ',' || phraseToCheck[i] === '!' || phraseToCheck[i] === '?' || phraseToCheck[i] === `'` || phraseToCheck[i] === `"`) {
        continue;
    } else {
        palindrome = palindrome + phraseToCheck[i];
    }
}

for (let i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] === " " || phraseToCheck[i] === ',' || phraseToCheck[i] === '!' || phraseToCheck[i] === '?' || phraseToCheck[i] === `'` || phraseToCheck[i] === `"`) {
        continue;
    } else {
        palindromeRw = palindromeRw + phraseToCheck[i];
    }
}

if (palindromeRw.toLowerCase() === palindrome.toLowerCase()) {
    console.log("It's a palindrome");
} else {
    console.log("It's not a palindrome");
}