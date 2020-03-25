// Iteration 1: Names and Input
// 1.1
let hacker1 = "Guillaume";
console.log(hacker1);

let hacker2 = "Teddy";
console.log(hacker2);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
// 3.1
let nameUpperCase = "";
for (let i = 0; i < hacker1.length; i++) {
    nameUpperCase += hacker1.charAt(i).toUpperCase() + " ";
}
console.log(nameUpperCase);

//3.2
let nameReverse = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    nameReverse += hacker2.charAt(i);
}
console.log(nameReverse);

//3.3

function LexicoCompare(a, b) {
    if (a === b) {
        console.log(`What?! You both have the same name?`);
    } else if (a > b) {
        console.log(`Yo, the navigator goes first definitely.`);

    } else {

        console.log(`The driver's name goes first.`);

    }
}

LexicoCompare(hacker1, hacker2);

// Bonus

let text = `lLorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nunc ipsum, hendrerit eget lectus at, egestas interdum ligula. Vivamus id ornare felis, et consectetur dolor. Etiam efficitur finibus purus, a convallis urna dignissim eget. Etiam aliquet elit non aliquam tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus eget tellus condimentum, pulvinar ligula ac, blandit eros. Phasellus maximus, mi sit amet ultrices aliquam, augue felis finibus turpis, nec rutrum sapien nunc vitae nunc. Phasellus luctus massa at neque aliquam, eget sodales tellus euismod. Donec blandit quam sed ex rhoncus cursus. Suspendisse orci diam, ornare vel finibus eu, vehicula vel dui.
Cras suscipit arcu et congue ultricies. In vitae justo laoreet, gravida mauris in, porta turpis. Donec dapibus ultrices purus et bibendum. Donec fringilla leo tellus, sed sollicitudin tellus bibendum quis. Vestibulum et laoreet risus. Donec tempus lectus sed mattis volutpat. Aliquam malesuada ligula sit amet ipsum dictum pretium. Pellentesque commodo lorem lorem, at tristique massa luctus malesuada. Praesent ipsum lacus, faucibus eget urna nec, vulputate finibus orci. Sed faucibus lectus sit amet aliquam pulvinar. Donec vel varius mi. Fusce sed aliquet massa. Vivamus sagittis tellus nulla, ultrices luctus mi dignissim a. Proin et ullamcorper velit, id aliquam tellus. Aenean placerat sapien quis nisi efficitur, et consectetur metus efficitur. Nulla laoreet quam mauris, ut consectetur dolor varius in.
Phasellus aliquet massa tincidunt eros finibus, vel molestie ex lacinia. Integer mollis semper velit. Phasellus semper, justo volutpat tristique feugiat, orci sapien tincidunt nulla, non egestas magna arcu et tellus. Sed vitae sapien blandit, luctus metus in, eleifend risus. Vestibulum commodo ultricies mi, nec condimentum arcu vestibulum non. Praesent malesuada sagittis nisi, a lobortis velit laoreet quis. Vestibulum ipsum velit, ullamcorper nec purus et, ultrices tincidunt ligula.`

let count = 0;

for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === " ") {
        count++;
    }
}
console.log(count + 1); // pour tenir compte du dernier mot //

let counter = 0;

for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === "e" && text.charAt(i + 1) === "t" && text.charAt(i - 1) === " " && text.charAt(i + 2) === " ") {
        counter++;
    }
}
console.log(counter);