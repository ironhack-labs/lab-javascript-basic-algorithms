var hacker1 = "Louis";

console.log("The driver's name is " + hacker1);

var hacker2 = "Baptiste";

console.log(`The navigator's name is ${hacker2}`);

if (hacker2.length < hacker1.length) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
}

else if (hacker2.length === hacker1.length) {
    console.log("Wow, you both have equally long names, " + hacker1.length + " characters!");
}

else {
    console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters.");
}

var driver = "";

for (i = 0 ; i < hacker1.length ; i++) {
    driver = driver + hacker1[i].toUpperCase();
    if (i+1 < hacker1.length) {
        driver = driver + " ";
    }
}

console.log(driver);

var navigator;

for (i = hacker2.length - 1; i >= 0 ; i--) {
    navigator = navigator + hacker2[i];
}

console.log(navigator);

if (hacker2 > hacker1) {
    console.log("The driver's name goes first.");
}

else if (hacker2 === hacker1) {
    console.log("What?! You both have the same name?");
}

else {
    console.log("Yo, the navigator goes first definitely.");
}

var lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pulvinar mauris odio, rutrum scelerisque lorem rutrum sed. Donec pellentesque magna lacus, ut scelerisque nisi placerat non. Suspendisse potenti. Vivamus sollicitudin, leo eu porta dictum, elit purus vehicula risus, vitae sodales mauris lorem in libero. Proin finibus volutpat eros, et sodales arcu luctus et. Donec sodales risus id tortor ullamcorper, porttitor posuere elit ornare. Morbi consectetur pretium diam, et laoreet ante facilisis eget. Cras egestas elit in eros congue egestas porta eu eros. Nunc eget interdum ex, vel pharetra ex. Ut lacus felis, tempus et mi eu, tempus lobortis arcu.

Sed porta consectetur malesuada. Fusce ultrices lacinia libero, ac malesuada tellus consequat sed. Praesent vitae tellus sem. Maecenas a velit a magna mattis rutrum quis efficitur est. In sed felis nec purus varius ultrices et ac risus. Ut finibus neque risus, eget tincidunt urna egestas eget. Aliquam id pretium est. Maecenas commodo convallis arcu, a vestibulum ante finibus convallis.

Nunc pharetra vehicula dignissim. Curabitur nisl metus, sodales a justo ut, convallis lobortis dolor. Mauris feugiat venenatis ipsum ac efficitur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed consequat mollis ipsum at iaculis. Proin congue lectus urna, ut blandit ligula fermentum non. Donec sit amet congue risus. Nulla pulvinar, ex non porttitor elementum, felis est ultricies purus, eu pharetra urna est sed augue. Aenean semper tellus et mauris egestas elementum. Pellentesque ut enim lectus. Nullam non elit ac nisi ultrices blandit. Aliquam erat volutpat. Fusce mollis arcu a finibus commodo. Praesent odio lorem, faucibus et porttitor suscipit, blandit ac enim. Aenean eleifend a tortor nec gravida.`;

var wordsCount = 1;

for (i=0 ; i<lorem.length ; i++) {
    if (lorem[i] === " ") {
        wordsCount += 1;
    } else if (lorem[i] === "\n" && lorem[i+1] != "\n") {
        wordsCount +=1;
    }
}

console.log(wordsCount);

var etCount = 0

for (i=0 ; i < lorem.length ; i++) {
    if (lorem.substring(i, i+4) === " et " || lorem.substring(i, i+4) === " et." || lorem.substring(i, i+4) === " et,") {
        etCount += 1;
    }
}

console.log(etCount);

var phraseToCheck = "A man, a plan, a canal, Panama!";

var phraseOnlyLetters = "";

var palindromeCheck = "" ;

for (i = 0 ; i < phraseToCheck.length ; i++) {
    phraseToCheck = phraseToCheck.toLowerCase();
    if (phraseToCheck[i] >= 'a' && phraseToCheck[i] <= 'z') {
        phraseOnlyLetters += phraseToCheck[i];
    }
}

for (i = phraseOnlyLetters.length-1 ; i >= 0 ; i--) {
    palindromeCheck += phraseOnlyLetters[i];
}

console.log(palindromeCheck === phraseOnlyLetters);