//Iteration 1: Names and Input
var hacker1 = "Jean-Baptiste";
console.log(`The driver's name is ${hacker1}`);
var hacker2 = "Ferran";
console.log(`The navigator's name is ${hacker2}`);

//Iteration 2: Conditionals
//Depending on which name is longer:
if (hacker1.length > hacker2.length) {
    console.log(`The driver ${hacker1} has the longest name, it has ${hacker1.length} characters.`)
};

if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator ${hacker2} has the longest name, it has ${hacker2.length} characters.`)
};

if (hacker1.length === hacker2.length) {
    console.log(`Both have equally long names, ${hacker1.length} characters!.`)
};

//Iteration 3: Loops
//Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
var hackerOne = "";
for (var i = 0; i < hacker1.length; i++) {
    hackerOne = hackerOne + hacker1[i].toUpperCase() + " ";
}
console.log(hackerOne); //Nombre en capital

//Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
var hackerTwo = "";
for (var i = hacker2.length - 1; i >= 0; i--) {
    hackerTwo += hacker2[i];
}
console.log(hackerTwo); //Nombre al revés

//Depending on the lexicographic order of the strings, print:
if (hacker1[0] < hacker2[0]) {
    console.log("The driver's name goes first.");
} else if (hacker1[0] > hacker2[0]) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

//BONUS 1
var threeParagraphs = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget justo commodo, cursus justo nec, finibus tortor. Cras ac dolor posuere enim malesuada mattis nec ac quam. Nam euismod a lectus quis luctus. Aliquam tristique sapien eu urna convallis, non cursus odio elementum. Pellentesque varius sapien non nunc tincidunt, in blandit risus bibendum. Mauris turpis leo, auctor id mi in, malesuada sagittis eros. Aenean id eleifend nibh, et rutrum libero. Donec mi dolor, mattis sed nunc a, vehicula mattis velit. Etiam vulputate cursus semper. Suspendisse potenti. Integer sit amet justo libero. Sed ante sapien, condimentum sit amet euismod sit amet, consequat quis massa. Suspendisse lacus eros, condimentum eget dapibus imperdiet, mattis eget mauris. Proin id enim eu ex fringilla mollis. Morbi condimentum cursus viverra. Sed vel urna condimentum, imperdiet augue in, blandit tellus. Vivamus auctor finibus sodales. Sed et mollis sem. Morbi ut finibus neque, non vestibulum metus. Maecenas laoreet dignissim leo sed pharetra. Nullam dictum ultrices nulla ut placerat. Integer sed turpis eleifend, aliquet nisl eget, tincidunt magna. Morbi vitae pellentesque lorem, a semper elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc malesuada varius quam sed vehicula. Ut non lacus et massa vehicula volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse ac augue orci. Sed ut dapibus sem, sed pharetra ex."

//Make your program count the number of words in the string.
var array = threeParagraphs.split(' ');
console.log('Los paragrafos tienen ' + array.length + ' palabras');

//Make your program count the number of times the Latin word et appears.
var etPalabra = threeParagraphs.split('et');
console.log('En estos paragrafos, hay ' + etPalabra.length + ' veces la palabra "et"');

//BONUS 2
function phraseToCheck(string) {
    let finalArray = [];
    for (var i = 0; i < string.length; i++) {

        if (string[i] === ' ') {
            continue; ///To skip the spaces
        } else if (string[i] === ',') {
            continue; //To skip the ","
        } else {
            finalArray.push(string[i].toLowerCase());
        }
    }
    if (finalArray.join('') === finalArray.reverse().join('')) {
        console.log('Este string es un palindrome');
    } else {
        console.log('Este string no es un palindrome');
    }
}

phraseToCheck('Roma, Amor');
phraseToCheck('step on no pets');
phraseToCheck('fdhkfjafe');