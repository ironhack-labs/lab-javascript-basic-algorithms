// Iteration 1: Names and Input
const hacker1 = "Mobina";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "navi";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let a = hacker1.length;
let b = hacker2.length;
if (a >b){ 
    console.log(`The driver has the longest name, it has ${a} characters.`)
}
else if (b > a){
    console.log(`It seems that the navigator has the longest name, it has ${b} characters.`)
}
else {
    console.log(`Wow, you both have equally long names, ${a} characters!`)
}

// Iteration 3: Loops
//* 3-1 and 3-2
let hacker1Upper= "";
for (let i = 0; i< hacker1.length; i++){
    hacker1Upper += hacker1[i].toUpperCase()+ " ";
}
let hacker2Reverse = "";
for (let i = hacker2.length-1; i >=0 ; i--){
    hacker2Reverse += hacker2[i]
}
console.log(hacker1Upper);
console.log(hacker2Reverse);
//* 3-3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} 
else if (hacker1 > hacker2) {
  console.log("Yo, the navigator goes first definitely.");
} 
else {
  console.log("What?! You both have the same name?");
}

// Bonus 1
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sagittis felis eget ligula varius, quis molestie dolor dignissim. Curabitur eget lectus non arcu vehicula fringilla. Praesent vulputate in massa vel mattis. Integer nec sem id ante dictum pretium quis ut arcu. Duis congue, enim eu faucibus rhoncus, dolor nibh bibendum ex, sit amet consectetur leo odio ac elit. Aliquam finibus erat non metus lobortis tristique. Sed finibus dui ac nulla elementum, vel semper quam dignissim. Proin dolor ante, placerat in ultrices eget, cursus at justo. Sed vel est dignissim, efficitur velit non, dictum diam. Praesent a leo eget ante gravida consectetur. Quisque quis ornare arcu. Vivamus viverra, ante sodales ornare venenatis, tellus diam aliquam nibh, vel euismod magna dui id ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate feugiat metus, vel lacinia erat vulputate in. Integer et orci vel sem posuere pretium id quis magna. Donec eget tincidunt sem, nec vehicula tellus. Vestibulum et ligula mollis, condimentum nunc vitae, faucibus orci. Praesent bibendum fermentum sapien, eget commodo nisi congue at. Maecenas a congue libero. Aenean vel nunc vestibulum, bibendum nisl id, ullamcorper diam. Quisque nec auctor felis. Cras nisl dui, aliquet nec tellus non, feugiat tristique nunc. Maecenas sit amet tristique ante, vitae lacinia risus. Donec in justo enim. Sed ut nisl libero. Praesent finibus odio nisi, eu fermentum nisi semper ac. Fusce vitae nunc sodales, rutrum quam ut, imperdiet ligula. Aenean egestas nulla quis diam lacinia, eu ornare purus efficitur. Cras vulputate ex massa, id mattis erat mollis egestas. Mauris nibh ex, elementum quis justo non, convallis maximus sem. Morbi porttitor ipsum felis, et varius augue finibus quis. Nullam commodo ex a eros facilisis, vel tristique nunc maximus. Vestibulum arcu sapien, volutpat a vestibulum vel, aliquam ac metus. Phasellus finibus tristique molestie. Donec neque est, efficitur tincidunt posuere vitae, consectetur sed augue. Nunc nec semper mi."
let words = longText.split(" ");
console.log(words.length);
let count = 0;
for (let i = 0; i< words.length; i++){
    if (words[i]=== "et"){
        count++;    }
}
console.log(count);

//Bonus 2
let phraseToCheck = "Was it a car or a cat I saw??!";
let clean1 = phraseToCheck.split(" ").join("");
let clean2 = clean1.toLowerCase();
let clean3 = "";
for (let j = 0; j < clean2.length; j++) {
if (clean2[j] === "?" || clean2[j] === "!"){
     continue;
    }
    clean3 += clean2[j];
}

let reversed = "";
for (let i =  clean3.length-1; i>=0; i--){
reversed += clean3[i];
}
if (clean3 === reversed) {
    console.log("It is a palindrome.");
}
else {
    console.log("It is not a palindrome.");
}