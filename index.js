// Iteration 1: Names and Input
const hacker1 ="Thomas"

console.log(`The driver's name is ${hacker1}`)

const hacker2 ="Igor"

console.log(`The navigator's name is ${hacker2}`)
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
}
else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
else {
    console.log(`Wow you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
let capitalName = "";
for (let i =0; i < hacker1.length ; i++) {
capitalName  += hacker1[i].toUpperCase();
    for (let j=0; j < 1; j++){
    capitalName += " ";
} 
}
console.log(capitalName);
let nameReverse = ""
for (let i = hacker2.length-1; i >= 0; i--){
    nameReverse += hacker2[i];
}

console.log(nameReverse);

if (hacker1.localeCompare(hacker2) < 0) {
    console.log(`${hacker1} goes first`);
}
else if (hacker1.localeCompare(hacker2) > 0){
    console.log(`Yo, ${hacker2} goes first, definetly`);
}
else {
    console.log(`What?! You both have the same name?`)
}

 // Bonus 1:

 const longString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan turpis ac enim porta, et porta augue tincidunt. Suspendisse sit amet varius massa. Sed at ligula nec eros fringilla placerat. Vestibulum ut sapien massa. Nulla facilisi. Pellentesque nec nisl ut ante commodo consectetur at id nulla. Vivamus id mauris porta, molestie augue sed, tincidunt erat. Aenean commodo quis ligula sit amet placerat. Integer at sollicitudin elit. Phasellus vehicula sed metus id varius.

 Donec odio eros, tempus ut nunc tempus, eleifend dictum nunc. Suspendisse vitae eros odio. Duis vitae sem dignissim, tincidunt libero a, aliquet turpis. Nunc venenatis lacus elit, elementum aliquam turpis elementum eget. Proin nisl nulla, pretium eget accumsan pretium, interdum non elit. Nam feugiat justo eget est malesuada pellentesque. Donec convallis vitae magna vehicula rutrum. Mauris nec ipsum et libero finibus lobortis. Ut eget efficitur mauris, dapibus finibus urna.
 
 Integer non quam nulla. Nam lacinia venenatis pellentesque. Aliquam faucibus fringilla dolor non dignissim. Aenean dictum enim id neque ultricies gravida. Nam pharetra odio ac felis pulvinar, vitae sodales ante feugiat. Nulla vitae auctor felis. Cras blandit tortor nec sem consequat, tempor congue metus condimentum. In nulla dui, imperdiet eu consectetur in, egestas at ante. Integer vel sem euismod, efficitur tellus vitae, fermentum turpis. In hac habitasse platea dictumst. Nam odio eros, consectetur ut mattis non, facilisis eu eros. Ut quis tincidunt enim, pulvinar luctus leo. Nulla id dui nec dui vehicula tincidunt.`;

 const wordsArray = longString.split(/\s+/);

 console.log(wordsArray.length);

 let counter =0

 for (let i = 0; i < longString.length; i++){
    if (longString[i]+longString[i+1] === "et"){
        counter++;
    }
 }

 console.log(counter);

  // Bonus 2:

  function palindromeCheck(phrase){
    let noSpaces = "";
    let result;
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] === " " || phrase[i] ===  "," || phrase[i] ===  "!" || phrase[i] ===  "." ){
            continue;
        }
        else {
            noSpaces += phrase[i];
        }
    }
    let lowNoSpaces = noSpaces.toLowerCase();
    for (let j=0; j < lowNoSpaces.length; j++) {
        if (lowNoSpaces[j] === lowNoSpaces[lowNoSpaces.length-1-j]){
            result = "This phrase is a palindrome";
        }
        else {
            result = "This phrase is not a palindrome";
    }
    }
    return result;
  }

  console.log(palindromeCheck(`stack cats`))
  console.log(palindromeCheck(`A man, a plan, a canal, Panama!`))

