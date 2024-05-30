// Iteration 1: Names and Input

// 1.1 Create a variable hacker1 with the driver's name.
let hacker1 = "Toni";

// 1.2 Print "The driver's name is XXXX".
console.log(`The driver's name is ${hacker1}`);

// 1.3 Create a variable hacker2 with the navigator's name.
let hacker2 = "Toni";

// 1.4 Print "The navigator's name is YYYY".
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

// 2.1 Depending on which name is longer, print:
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);

} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);

} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops

// 3.1 Print the characters of the driver's name, separated by space, and in capital letters
let driverNameWithSpaces = "";
for (let i = 0; i < hacker1.length; i++) {
    driverNameWithSpaces += hacker1[i].toUpperCase() + " ";
}
console.log(driverNameWithSpaces);

// 3.2 Print all the characters of the navigator's name in reverse order
let navigatorNameReversed = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorNameReversed += hacker2[i];
}
console.log(navigatorNameReversed);

// 3.3 Depending on the lexicographic order of the strings, print
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker1 > hacker2) {
    console.log("Yo, the navigator goes first, definitely.");
} else {
    console.log("What?! You both have the same name?");
}
// 3.3 Depending on the lexicographic order of the strings, print (second method)
if (hacker1.localeCompare(hacker2)<0){
    console.log("The driver's name goes first.");
}else if (hacker1.localeCompare(hacker2)>0){
    console.log("Yo, the navigator goes first, definitely.");
    } else {
        console.log("What?! You both have the same name? Wait, are you the same person?");
    }
 
    //BONUS
    let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id sapien odio. Proin sagittis nunc in mauris sodales, a placerat libero efficitur. Sed a lacus lacus. Donec feugiat quis nisi sed lacinia. Proin vestibulum magna ut erat pulvinar dignissim. Suspendisse sed volutpat libero, at efficitur et tellus. Aliquam tincidunt, tortor vitae tempus placerat, nisi nisi sollicitudin mi, non cursus sapien urna ultricies tortor. Nullam fringilla justo eget congue interdum. Integer viverra a eros ut commodo. Ut ut ligula vel et justo rhoncus aliquam a vitae enim. Aenean egestas mattis pretium. Curabitur dapibus elit vitae orci porttitor finibus.';

    let wordsArray = [];
    let position = 0;

    for (let i = 0; i<=longText.length; i++){
        if((longText[i]===' ') || (i===longText.length)){
            wordsArray.push(longText.slice(position+1,[i]))
            position = i;
            }
        
        
        }

    console.log(wordsArray);
    console.log(wordsArray.length);

    let etCounter = 0;

    for (i=0;i<wordsArray.length;i++){
        if (wordsArray[i]==='et'){
            etCounter++;
        }
    }
    console.log(`There are ${etCounter} et's`);
    
