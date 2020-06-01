// Iteration 1: Names and Input
let hacker1 = 'Rachel';
console.log(hacker1);
let hacker2 = 'Majd';
console.log(hacker2);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}
// Iteration 3: Loops
let driverName = hacker1;
let finalName = '';
for (let i=0;i<driverName.length;i++) {
  finalName = finalName + driverName.charAt(i).toUpperCase() + ' ';
}
console.log(finalName);
let reversedDriverName = '';
for (let i=0;i<driverName.length;i++) {
    reversedDriverName = reversedDriverName + driverName.charAt(driverName.length -1 - i);
}
console.log(reversedDriverName);
if (hacker1.toLowerCase().localeCompare(hacker2.toLowerCase()) > 0) {
    console.log("Yo, the navigator goes first definitely.");
}
else if (hacker1.toLowerCase().localeCompare(hacker2.toLowerCase()) < 0) {
    console.log("The driver's name goes first.");
}
else {
    console.log("What?! You both have the same name?");
}
// Bonus 1
let text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium consequat ex at rhoncus. Etiam vitae sollicitudin nunc, condimentum blandit ligula. Suspendisse commodo eros turpis, sit amet hendrerit purus facilisis sed. Nam sem sem, lobortis sed dui eget, posuere suscipit velit. In aliquet orci eros, finibus finibus nisi scelerisque a. Sed non vestibulum elit. Etiam luctus dui maximus bibendum sollicitudin. Integer faucibus viverra lacus, non consectetur nisl auctor ultrices. Pellentesque ac lorem urna. Nunc convallis venenatis nulla, eget lacinia ligula tempus eu. Vivamus commodo maximus tellus.

Praesent tincidunt turpis ipsum, tincidunt suscipit nisl sollicitudin non. Etiam consequat viverra leo, at efficitur nisi commodo vestibulum. Vestibulum pulvinar ut erat et varius. Etiam quis consequat tellus, quis efficitur eros. Donec elementum lectus ac egestas faucibus. Phasellus vehicula eu ipsum ut dapibus. Sed ac eros ac velit cursus sagittis. Mauris ut lectus urna. Ut commodo, nisi eu maximus congue, augue dui euismod purus, et tristique ligula ligula quis nibh. Nam ac augue velit. Pellentesque facilisis turpis sapien, luctus mattis lectus sollicitudin a.

Vestibulum sodales turpis quis dolor finibus elementum in et quam. Cras dapibus venenatis felis, vitae posuere risus. Suspendisse vehicula nisl vel dolor gravida, sit amet fringilla ligula varius. Maecenas dui massa, interdum et risus et, ullamcorper consectetur libero. Donec sed ex semper, ullamcorper massa eget, egestas tortor. Etiam euismod, mauris in imperdiet pulvinar, arcu mauris luctus odio, a pharetra sapien sem in tellus. Duis placerat, nulla a tristique sagittis, velit lorem ornare neque, ac eleifend lectus sapien vitae nisl. Praesent sed hendrerit velit. In feugiat dolor eget odio feugiat, eu feugiat justo eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.`;
let removeWhiteSpaces = text.split(/\s+/);
console.log(`The text contains ${removeWhiteSpaces.length} words.`);
let count = 0;
let editedText = text.toLowerCase().replace(/[^A-Z0-9]/ig, " ");;
let words = editedText.split(' ');
let wordCount = 0;
for (let i=0; i<words.length; i++) {
    if (words[i] === 'et') {
        wordCount++;
    }
}
console.log(`The Latin word "et" appeared ${wordCount} times in the text.`);
// Bonus 2
let phraseToCheck = 'Was it a car or a cat I saw?';
let isPalindrome = true;
let cleanedPhrase = phraseToCheck.toLowerCase().replace(/[^A-Z0-9]/ig, "");
for (let i=0; i<=cleanedPhrase.length;i++) {
    if (cleanedPhrase.charAt(i) === cleanedPhrase.charAt(cleanedPhrase.length - 1 - i)) {
        continue;
    }
    else {
        isPalindrome = false;
        break;
    }
}
if (isPalindrome) {
    console.log('The entered text is a palindrome.');
}
else {
    console.log('The entered text is not a palindrome');
}
