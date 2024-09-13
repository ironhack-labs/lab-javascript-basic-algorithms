let hacker1 = "Jane_Doe";
let hacker2 = "Jane_Poe";

//Iteration 1: Names and Input
console.log("Driver's name is " + hacker1);
console.log("Navigator's name is " + hacker2);


//Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
}

else if (hacker1.length < hacker2.length) {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters. ");
}
else {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

//Iteration 3: Loop
// 3.1 - spaced uppercase
let str = '';
for (let i = 0; i < hacker1.length; i++) {
    str += hacker1[i].toUpperCase() + ' ';
}
console.log(str);

// 3.2 - reverse
let str2 = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
    str2 += hacker2[i];
}
console.log(str2);

// 3.3
let a = "The driver's name goes first.";
let b = "Yo, the navigator goes first, definitely.";
let c = "What?! You both have the same name?";

// if (hacker1 > hacker2) {
//     console.log(b);
// } else if (hacker1 < hacker2) {
//     console.log(a);
// } else {
//     console.log(c);
// };

let hacker1Up = hacker1.toUpperCase();
let hacker2Up = hacker2.toUpperCase();

for (i = 0; i < hacker1.length && i < hacker2.length; i++) {

    if (hacker1Up === hacker2Up) {
        console.log(c);
    }

    else if (hacker1Up[i] === hacker2Up[i]) {
        continue;
    }
    else {
        if (hacker1Up[i] < hacker2Up[i]) {
            console.log(a);
        }
        else if (hacker1Up[i] > hacker2Up[i]) {
            console.log(b);
        }
    }
};



// // BONUS 1
let longText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod eaque nihil laudantium explicabo exercitationem suscipit, adipisci consectetur maiores facere quasi dolore voluptatum recusandae accusantium, error magnam? Beatae vitae id a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic voluptatibus soluta odit quia excepturi adipisci, sunt aliquid quidem? Placeat eveniet delectus harum voluptate sint voluptates sed minima necessitatibus eligendi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur doloribus natus deserunt maiores vero sapiente aperiam necessitatibus consequatur fuga, quod ipsum doloremque consequuntur et ratione laboriosam nostrum cumque qui nisi!";
let totalSoFar = 0;

for (let i = 0; i < longText.length; i++) {
    if (longText[i] === ' ') {
        totalSoFar += 1;
        continue;
    }
    totalWordCount = totalSoFar + 1
}
console.log(totalWordCount);


/// Searching for et

let shortText = longText.toLowerCase();
let maSoFar = 0;

if (shortText[0]==='e' && shortText[1]==='t' && shortText[2]===' ' || shortText[2]==='!'|| shortText[2]==='?'){
    maSoFar += 1;
};

for (let i = 3; i < shortText.length; i++) {
    if (shortText[i] === ' ') {
        if (shortText[i + 1] === 'e') {
            if (shortText[i + 2] === 't') {
                if (shortText[i + 3] === ' ') {
                    maSoFar += 1;
                }
                else if (shortText[i + 3] === '.') {
                    maSoFar += 1;
                }
                else if (shortText[i + 3] === '!') {
                    maSoFar += 1;
                }
                else if (shortText[i + 3] === '?') {
                    maSoFar += 1;
                }
                else {
                    continue;
                }
            }
            else {
                continue;
            }
        }
        else {
            continue;
        }
    }
    else {
        continue;
    }
};
console.log(maSoFar);



// //BONUS 2
let phraseToCheck = "No 'x' in Nixon";
let phraseNoSpaces = '';
let phrase2 = '';

for (let i = 0; i < phraseToCheck.length; i++){
    if(phraseToCheck[i]===' '){
        continue;
    }
    else{
        phraseNoSpaces += phraseToCheck[i];
    }
};

phraseNoSpecialCharacters = phraseNoSpaces.replace(/[^a-zA-Z]/g, "")
phraseClean = phraseNoSpecialCharacters.toLowerCase();

for (let i = phraseClean.length - 1; i >= 0; i--) {
    phrase2 += phraseClean[i];
}

for (i = 0; i < phraseClean.length && i < phrase2.length; i++) {

    if (phraseClean === phrase2) {
        console.log("Yay! It's a palindrome!");
    }
    else {
        console.log("Unfortunately it's not a palindrome")
    }
};