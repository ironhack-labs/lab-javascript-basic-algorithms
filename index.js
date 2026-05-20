// Iteration 1: Names and Input
let hacker1 = "Nazim";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Waze";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if(hacker1.length === hacker2.length){
    console.log('Wow, you both have equally long names, ${hacker1.length} characters!');
}
else if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else{
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
}
// Iteration 3: Loops
let upperHacker1="";
for(let i = 0; i<hacker1.length; i++){
    upperHacker1 += hacker1.charAt(i).toUpperCase();
}
console.log(upperHacker1);

let reversedHacker2="";
for(let i = hacker2.length-1; i>-1; i--){
    reversedHacker2 += hacker2.charAt(i);
}
console.log(reversedHacker2);

let whoIsFirst="";
for(let i = 0; i<hacker1.length || i<hacker2.length; i++){
    if(hacker1.charAt(i).toLowerCase()<hacker2.charAt(i).toLowerCase()){
        whoIsFirst="The driver's name goes first.";
        break;
    }
    else if(hacker1.charAt(i).toLowerCase()>hacker2.charAt(i).toLowerCase()){
        whoIsFirst="Yo, the navigator goes first, definitely.";
        break;
    }
    else{
        whoIsFirst="What?! You both have the same name?";
    }
}
console.log(whoIsFirst);

// Bonus Time!
// Bonus 1:

let longText=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consequat fringilla ipsum, ac vehicula lorem pharetra vitae. Quisque non sapien in massa laoreet vestibulum. Curabitur venenatis pharetra nunc, vitae luctus nulla interdum sed. Curabitur cursus rhoncus hendrerit. Integer purus neque, ultricies eget tortor hendrerit, condimentum rutrum enim. Ut lacinia nec erat vel vulputate. Morbi vel fringilla turpis, eget pulvinar ex. Morbi ac scelerisque urna, vel venenatis leo.
Pellentesque fringilla eros bibendum ultrices mattis. Curabitur sed facilisis tellus, quis placerat justo. Etiam ornare risus eget augue pretium, feugiat eleifend magna tincidunt. Aenean fermentum eros ut nisi interdum rhoncus. Etiam volutpat ante ac velit fermentum, sit amet posuere ante auctor. Etiam volutpat, nisi congue convallis scelerisque, mauris arcu imperdiet nisl, quis efficitur elit turpis vitae purus. Etiam vestibulum luctus est, vel lobortis dui consectetur quis. Nulla eleifend quam in neque auctor eleifend. Nullam eros nibh, sollicitudin nec rutrum nec, bibendum id felis. Maecenas lobortis eu nisi sit amet dictum. Proin tristique placerat tellus quis sollicitudin. Maecenas accumsan est arcu, id scelerisque est volutpat ut. Vivamus dapibus hendrerit tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit sodales erat a fringilla. Etiam bibendum vitae enim vel lobortis.
Nullam et est sed risus tempor pharetra. Nunc gravida ante non eros lobortis finibus. Cras finibus diam dolor, a bibendum lorem vehicula id. Praesent a condimentum ligula. Vestibulum quis sapien tincidunt sapien interdum euismod quis sed enim. Donec risus ante, laoreet ac luctus vel, bibendum a massa. Sed porttitor, libero quis rutrum accumsan, est orci tincidunt dui, sit amet hendrerit dolor leo eu nulla. Proin facilisis ac felis faucibus dictum. In libero justo, porttitor mattis nunc eget, porta finibus mi. Duis mollis sapien nec nulla luctus consequat. Ut mattis dui massa, aliquet elementum ante pharetra ut. Praesent pulvinar nisl mauris, at mattis felis ornare ut. Quisque bibendum, magna quis efficitur dignissim, ligula metus luctus sem, vitae porttitor neque nulla sed ligula. Nullam nec ornare dui, et aliquet elit. Donec pharetra auctor ipsum, non lacinia nisi porta nec. Sed auctor sapien eu fringilla viverra.`;
let words = longText.split(" ");
console.log(words.length);

let countEt = 0;
for (let i = 0; i<words.length; i++){
    if(words[i].toLowerCase()==="et"){
        countEt++;
    }
}
console.log(countEt);

// Bonus 2:

let phraseToCheck = "A man, a plan, a canal, Panama!";
let cleaned = "";
for (let i = 0; i < phraseToCheck.length; i++) {

    let char = phraseToCheck[i].toLowerCase();

    if (
        (char >= "a" && char <= "z") ||
        (char >= "0" && char <= "9")
    ) {
        cleaned += char;
    }
}

let isPalindrome = true;
for (let i = 0; i < cleaned.length / 2; i++) {

    if (cleaned[i] !== cleaned[cleaned.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("It is a palindrome");
} else {
    console.log("It is not a palindrome");
}