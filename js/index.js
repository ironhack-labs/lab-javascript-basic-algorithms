// Iteration 1: Names and Input
let hacker1 = "Andre";
console.log(hacker1);

let hacker2 = "Caio";
console.log(hacker2);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops
let nameUpper = hacker1.toUpperCase();
let nameSpace = "";
for (let i = 0; i < hacker1.length; i++) {
    nameSpace = nameSpace + nameUpper[i] + " ";
}
console.log(nameSpace);

let nameReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    nameReverse = nameReverse + hacker2[i];
}
console.log(nameReverse);

let iLenght = hacker1.length > hacker2.length ? hacker1.length : hacker2.length;
if (hacker1 !== hacker2) {
    for (let i = 0; i < iLenght; i++) {
        if (hacker1[i] < hacker2[i] || hacker1[i] === undefined) {
            console.log("The driver's name goes first.");
            break;
        } else if (hacker1[i] > hacker2[i] || hacker2[i] === undefined) {
            console.log("Yo, the navigator goes first definitely.");
            break;
        }
    }
} else {
    console.log("What?! You both have the same name?");
}

//Bonus
let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies ipsum mi, eu laoreet tellus malesuada vel. Cras sed finibus purus. Etiam a justo quam. Donec tincidunt vel quam at tristique. Vivamus viverra dolor sem, quis imperdiet nulla fermentum sit amet. Etiam venenatis in quam et feugiat. Maecenas ut dignissim urna. Suspendisse auctor molestie nulla sit amet lacinia. Phasellus aliquam dignissim dolor tempor malesuada. Sed maximus hendrerit aliquam. Aenean a dui blandit, pellentesque metus eu, malesuada libero. Suspendisse in justo varius, tempus mi et, blandit quam. Aliquam sed aliquet quam. Donec posuere sagittis ante, ac imperdiet lacus bibendum aliquam. Fusce bibendum velit ut ex rutrum, a suscipit lorem tristique. Nulla elementum elit magna, nec feugiat est facilisis non. Sed pretium id arcu id ultrices. Ut ac semper felis. Praesent fermentum nunc sem, at cursus nunc ornare eget. Proin lacinia aliquet lacus, a auctor ante eleifend sed. Vivamus vel molestie ex. Proin vel libero eu mi pharetra congue. Nam ut sem rutrum, pellentesque libero a, luctus libero. Proin tincidunt odio massa, et lacinia massa gravida in. Ut dolor sapien, mollis vel eros non, maximus suscipit neque. Donec eget nulla faucibus, vulputate ipsum sit amet, semper lacus. Sed tempor velit et maximus iaculis. Curabitur dolor lectus, interdum id ligula sed, aliquam convallis ante. Donec id risus eget urna euismod dignissim. Sed porttitor pulvinar ex, in ultricies sem convallis non. Sed fermentum convallis imperdiet. Donec nunc metus, blandit at tincidunt eget, ornare at sapien."
console.log(text.split(" ").length);
console.log(text.match(/\set\W/gi).length);

console.log("Teste chave ssh")