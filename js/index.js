let hacker1 = "Amalia", hacker2 = "Alberte";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

function checkLength(hacker1, hacker2){
    if (hacker1.length > hacker2.length) {
        return `The driver has the longest name, it has ${hacker1.length} characters.`
    } else if (hacker2.length > hacker1.length) {
        return `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`;
    } else {
        return `Wow, you both have equally long names, ${hacker1.length} characters.`;
    }
}
console.log(checkLength(hacker1, hacker2));

function moveToUpper(hacker1) {
    return hacker1.toUpperCase().split("").join(" ");
}
console.log(moveToUpper(hacker1));

function reverseOrder(hacker2) {
    return hacker2.split("").reverse().join("");
}
console.log(reverseOrder(hacker2));

function lexicalCompare(hacker1, hacker2) {
    let lexicalResult = hacker1.localeCompare(hacker2);
    switch(lexicalResult) {
        case 0: 
            return "What?! You both have the same name?"
        case 1:
            return "Yo, the navigator goes first definitely."
        case -1:
            return "The driver's name goes first."
    }
    return lexicalResult;
} 
console.log(lexicalCompare(hacker1, hacker2));

let loremIpsum = "Lorem et ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna neque, iaculis in odio non, euismod euismod lacus. Praesent imperdiet, enim a aliquet porta, odio dolor molestie velit, finibus scelerisque mi enim at eros. Sed tincidunt dictum odio eget efficitur. Sed nec turpis ut felis tincidunt tristique at at ex. Mauris vitae ligula turpis. Duis elementum rhoncus tincidunt. Nam consequat orci non feugiat dignissim. Vestibulum in lorem mi. Vivamus ut molestie mauris. Donec vulputate luctus maximus. Nunc aliquam nunc urna, ac rutrum leo elementum ut. Aenean eu rhoncus dui. \
Pellentesque eleifend ligula vel sodales interdum. Suspendisse sed tortor scelerisque, vulputate ligula vel, placerat mi. Nam accumsan, tortor in commodo finibus, ante erat cursus libero, condimentum tincidunt mauris nunc a ipsum. Integer malesuada justo vel enim vulputate, sit amet vehicula ante vulputate. Nunc pretium, risus ac imperdiet cursus, magna nisl pretium orci, ac dapibus tortor mauris nec dui. Nullam magna tortor, aliquet ut mi id, viverra consectetur mi. Donec elementum, nisl tincidunt venenatis interdum, velit erat finibus nunc, rhoncus malesuada justo elit posuere risus. Nullam tristique sem vitae nulla scelerisque commodo. Mauris ut tortor arcu. Duis porta dolor arcu, in tincidunt dolor commodo pharetra. \
Integer vel dolor id sapien placerat facilisis interdum vitae justo. Nullam vehicula ligula vitae vulputate pretium. Sed volutpat massa quis bibendum pulvinar. Proin hendrerit neque mauris, vitae tincidunt enim vulputate a. Donec sed purus lorem. Maecenas nec metus sit amet risus tincidunt euismod. Nam venenatis dui eu metus hendrerit fringilla. Praesent dui nunc, pellentesque vel condimentum eget, ullamcorper quis justo. Quisque vel lorem tempus, vehicula ipsum sed, malesuada tellus. Phasellus quis hendrerit tortor. Quisque non gravida magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae"

function countWorks(loremIpsum){
    return loremIpsum.split(" ").length
}

console.log(countWorks(loremIpsum))

function checkEt(loremIpsum){
    let count = 0;
    arrayLorem = loremIpsum.split(" ");
    for (let i = 0; i < arrayLorem.length; i++) {
        if (arrayLorem[i] === "et"){
            count++;
        }
    }
    return count;
}
console.log(checkEt(loremIpsum))

let phraseToCheck = ["A man, a plan, a canal, Panama!","prueba","Amor, Roma","race car","stack cats","step on no pets","taco cat","put it up","Was it a car or a cat I saw?","No 'x' in Nixon"]

function checkPalindrome(phraseToCheck) {
    let checkPalin = ""
    for (let i = 0; i < phraseToCheck.length; i++) {
        newPhrase = phraseToCheck[i].replace(/[\W_]/g,'').split("").reverse().join('').toLowerCase()
        oldPhrase = phraseToCheck[i].replace(/[\W_]/g,'').split("").join('').toLowerCase()
        if (oldPhrase === newPhrase){
            checkPalin += `${phraseToCheck[i]} is Palindrome\n`
        } else {
            checkPalin += `${phraseToCheck[i]} is NOT Palindrome\n`
        }
    }
    return checkPalin
}
console.log(checkPalindrome(phraseToCheck))