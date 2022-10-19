console.log("I'm ready");
// Iteration 1: Names and Input
let hacker1 = "Ekta";
console.log("The drivers name is " + hacker1);
let hacker2 = "Ezequiel";
console.log("The navigator name is "+ hacker2);

// Iteration 2: Conditionals
let count1 = hacker1.length;
let count2 = hacker2.length;

if (count1 > count2) {
    console.log("The driver has the longest name, it has " + hacker1.length + " characters.");
} else if (count1 < count2) {
    console.log(`It seems that navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} charachters!`);
}

// Iteration 3: Loops
// 3.1
let hackerUpper = '';
for(let i=0;i<hacker1.length;i++){
    hackerUpper += hacker1[i].toUpperCase() + ' ';
}
console.log(hackerUpper);

// 3.2
let hackerReverse = '';
for( let i = (hacker2.length-1); i>=0; i-- ){
    hackerReverse += hacker2[i];
}
console.log(hackerReverse);

// 3.3
if (hacker1 < hacker2) {
    console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}

if (hacker1.localeCompare(hacker2) < 0) {
    console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2) == 0) {
    console.log("What?! You both have the same name?");
}

// BONUS 1
let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac nisi egestas, consequat purus et, vehicula leo. Nulla placerat accumsan mauris, eget tristique lectus. Quisque laoreet malesuada quam a commodo. Proin quis dolor velit. Duis congue imperdiet libero nec bibendum. Donec sed maximus tortor, ac lacinia ligula. Phasellus id blandit mi. Phasellus scelerisque dui et sem porttitor, a fringilla lectus consequat. Sed quam ante, laoreet nec urna vel, laoreet tempus lorem. Curabitur feugiat sapien nulla, sed convallis quam iaculis nec. Nunc sapien lacus, pretium non orci in, condimentum interdum justo. Aenean ornare lorem id risus vulputate semper. Donec tristique neque dui, et varius tortor mattis nec. Aenean venenatis feugiat nisl eu consequat. Nam cursus felis eu erat luctus, vel malesuada justo maximus. Suspendisse sed nisl ac arcu placerat convallis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum fermentum turpis vel odio placerat, vel sollicitudin enim finibus. Proin congue velit lectus, sed accumsan nulla dignissim ac. Cras varius nulla urna, sed posuere lacus lobortis in. Vestibulum et massa non ipsum rhoncus lobortis. Integer in lobortis mauris. Ut nisl nisi, congue in felis id, congue vestibulum magna. In sollicitudin accumsan magna a rhoncus. In cursus massa non tellus pellentesque, id pellentesque diam placerat. Integer velit urna, rhoncus eu ullamcorper eget, tincidunt tempor odio. Vestibulum blandit lorem sit amet lectus ultricies condimentum. Vestibulum sed elit massa. Ut pretium risus a ligula porttitor dapibus. Cras gravida purus id dolor semper posuere. Suspendisse in massa vel libero tincidunt viverra varius sit amet ante. Maecenas pellentesque finibus tortor, sed maximus est semper non. Vestibulum rhoncus nisi facilisis, ultrices lectus eget, maximus justo. Quisque quis nisl in justo imperdiet ornare. Nunc tristique risus at sodales vestibulum. Duis tellus lorem, luctus a erat nec, ultricies porttitor augue. Integer congue, augue posuere volutpat pulvinar, arcu dolor interdum lectus, non commodo purus turpis nec libero. Maecenas scelerisque ligula eget mollis viverra. Suspendisse vestibulum elit in eros venenatis sollicitudin. Morbi mattis justo quis mauris semper tempus. Pellentesque suscipit sem in laoreet tristique."

console.log(paragraph.length);

let counter = 0;
for(let i=0;i<paragraph.length;i++){
    const chosenWord= paragraph[i]+ paragraph[i+1];
    if (chosenWord ==="et"){ 
        counter++;
    }
    // else {console.log("error")};
}
console.log(counter);

// BONUS 2
let phraseToCheck = "Was it a, car or .a cat! I saw?";
// var re = /[^A-Za-z0-9]/g;
phraseToCheck = phraseToCheck.replaceAll(' ', '').replaceAll(',', '').replaceAll('.', '').replaceAll('!', '').replaceAll('?', '').replaceAll("'", "");
phraseToCheck = phraseToCheck.toLowerCase();

let phraseReverse = '';
for( let i = (phraseToCheck.length-1); i>=0; i-- ){
    phraseReverse += phraseToCheck[i];
}

if(phraseToCheck === phraseReverse) {
    console.log('Bravo! This is a palindrome');
} else {
    console.log('meh! This is a normal phrase');
}
