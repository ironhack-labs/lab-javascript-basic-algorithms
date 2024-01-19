console.log("I'm ready!");
// Iteration 1: Names and Input
let hacker1="John";
console.log(`The driver's name is ${hacker1}`);
let hacker2="Nil";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length>hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length<hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}

else if (hacker1.length=hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
// 3.1
let text1=hacker1.toUpperCase();
let text2="";
for (let i=0; hacker1.length>i; i++) {
    text2 = text2 + text1[i] + " ";
}
console.log(`${text2}`);
// 3.2
let text3="";
for (let i=hacker2.length-1; i>=0; i--) {
    text3 = text3 + hacker2[i];
}
console.log(`${text3}`);
// 3.3
let nameList = [hacker1,hacker2];
nameList.sort();
if (hacker1 === hacker2) {
    console.log("What?! You both have the same name?");
}

else if (hacker1 = nameList[0]) {
    console.log("The driver's name goes first.");
}
else if (hacker2 = nameList[0]) {
    console.log("Yo, the navigator goes first, definitely.");
}
//Bonus 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at odio dignissim, posuere leo sed, tempus massa. Maecenas vel odio enim. Nunc augue risus, pretium ut semper sed, scelerisque euismod metus. Donec viverra semper eros, efficitur facilisis mi feugiat ac. Aenean dictum ante eu dolor mattis malesuada. Ut at tortor a enim sollicitudin euismod vitae at sapien. Sed vulputate mattis interdum. Aliquam erat volutpat. Ut volutpat, lorem at fermentum sagittis, augue odio commodo quam, ac dignissim lorem ex nec dui. Aliquam viverra massa vel ex vehicula elementum. Fusce suscipit maximus ornare. Integer ultrices id libero venenatis hendrerit. Nullam eget velit id metus volutpat lobortis ac eu purus. Quisque tincidunt imperdiet lectus, in elementum massa. Proin tincidunt dolor eu justo auctor, in facilisis dui pretium. Nullam turpis purus, imperdiet a cursus ac, vestibulum quis nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque consequat libero vel tempor. Cras in iaculis lacus, finibus scelerisque neque. Vestibulum accumsan pharetra felis, a pretium nisi condimentum in. Aliquam mattis ex eget ante malesuada tempus. Etiam ac eros eu tellus tempus cursus at in sapien. Maecenas interdum lectus at eleifend pharetra. Duis non aliquam lectus. Suspendisse elementum ante eu enim dictum, non volutpat nulla varius. Nulla quis nisi velit. Nam eros sem, commodo eu eros ut, semper tristique dolor. Integer ut malesuada risus. Donec congue mauris quis sollicitudin vulputate. Nam sem est, finibus in enim in, tristique varius nisl. Aliquam suscipit semper posuere. Pellentesque sed elit tincidunt, porta eros sodales, maximus urna. In quis massa non metus condimentum finibus vel eget justo. Aliquam quis ligula augue. Phasellus arcu magna, accumsan in sodales vel, pharetra sit amet enim.";
let wordCount = 0;

function counter(text) {
    if (text.length == 0) {
        console.log("There is no text.")
    }
    if (text.length!=0) {
        let i = 0;
        while (i<text.length) {
          if (text[i] === " ") {
                wordCount += 1;
            }
          i++ ;
        }
        return console.log(`There are ${wordCount+1} words in the text.`) ;
    }
}

counter(longText);

let etCount = 0;

function etcounter(text) {
    if (text.length == 0) {
        console.log("There is no text.")
    }
    if (text.length != 0) {
        let i = 0;
        let j = 1;
        while (i<text.length-1 && j<text.length) {
          if (text[i] === "e" && text[j] === "t") {
                etCount += 1;
            }
          i++ ; 
          j++ ;
        }
        return console.log(`There are ${etCount} et in the text.`) ;
    }
}

etcounter(longText);

//Bonus 2
let phraseToCheck="Was it a car or a cat I saw?";
phraseToCheck = phraseToCheck.toLowerCase();
phraseToCheck = phraseToCheck.replace(/ /g, "");
phraseToCheck = phraseToCheck.replace(/,/g, "");
phraseToCheck = phraseToCheck.replace(/\?/g, "");
phraseToCheck = phraseToCheck.replace(/!/g, "");
phraseToCheck = phraseToCheck.replace(/\./g, "");
phraseToCheck = phraseToCheck.replace(/'/g, "");
console.log(phraseToCheck);

function pcheck(text) {
    let abc = 0;
    let i=0;
    let j= phraseToCheck.length - 1;
    while (j>=i) {
        if (text[i] != text[j]) {
            abc = 1;
            break;
        }
        else if (text[i] == text[j]) {
            i++ ;
            j-- ;
        }
}
    if (abc === 1) {
        console.log("This is not a palindrome.")
    }
    else if (abc == 0) {
        console.log("This is a palindrome.")
    }
}

pcheck(phraseToCheck);