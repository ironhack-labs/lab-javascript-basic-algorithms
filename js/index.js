// Iteration 1: Names and Input

let hacker1 = "Lara";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Lisa";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if ( hacker1.lenght < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops

for (value of hacker1){
    console.log(value.toUpperCase());
}

for (let i = hacker2.length - 1; i >= 0; i--){
    console.log(hacker2[i]);
}

let lexicOrder = hacker1.localeCompare(hacker2)

if (lexicOrder === -1){
    console.log("The driver's name goes first.")
} else if (lexicOrder === 1){
    console.log("Yo, the navigator goes first definitely.")
} else {
    console.log("What?! You both have the same name?")
}

// Bonus 1

const loremString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam orci, eleifend et aliquet vitae, luctus vitae urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque suscipit sit amet libero a molestie. Curabitur eleifend velit dictum euismod consequat. Duis id urna in risus sollicitudin mattis. Pellentesque facilisis non augue ut finibus. Sed porttitor, ligula ac condimentum finibus, neque odio porta mi, a dictum eros lectus tincidunt eros. Aliquam tristique, elit vitae bibendum tempus, velit enim euismod velit, vel cursus ligula dui sit amet erat. Mauris vel erat est. Aliquam mattis semper justo, et vulputate urna feugiat eu. Praesent rutrum dolor egestas leo iaculis dignissim. Pellentesque consectetur mollis nulla, non ornare quam consequat eu. Curabitur enim risus, imperdiet a nibh eget, feugiat efficitur quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in ex id dui fermentum blandit.

Donec nec enim dictum, gravida urna ac, eleifend massa. Donec fermentum sapien a libero iaculis, non lobortis neque semper. Aliquam odio nibh, hendrerit ut diam ac, varius pretium eros. Cras convallis in orci non imperdiet. Nam vel tempus neque. In vel euismod felis. In feugiat nibh vitae turpis blandit fringilla. Fusce in sagittis diam, eu aliquet massa. Nullam consequat mattis eros eget condimentum.

Curabitur arcu enim, rhoncus sit amet velit ac, fringilla dignissim odio. Etiam blandit, nulla a mattis consequat, nibh arcu condimentum velit, in eleifend mauris nulla a dolor. Vivamus in auctor nibh, vitae sodales tellus. Nam suscipit elit sit amet augue vulputate, a faucibus felis euismod. Duis fermentum urna felis, vitae consequat mauris aliquet vitae. Suspendisse malesuada rutrum ante nec pretium. Aliquam porttitor augue non neque finibus, ac finibus ante mollis. Donec ac lobortis libero. Praesent efficitur lacinia ornare. Sed ullamcorper ante quis velit porta rhoncus. Fusce condimentum ligula vel lectus molestie blandit sed at turpis. Nam dictum viverra nisi, a molestie neque posuere sit amet. Sed aliquet ultricies sollicitudin. Ut condimentum ipsum nisi, a tempor nunc efficitur id. Nulla porta sed lorem vitae gravida. Nullam iaculis justo a hendrerit porta.`



const arr = loremString.split(/[" ""\n"]+/);
console.log(`There are ${arr.length} words.`);


let numEt = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "et") {
        numEt++;
    }
}

console.log(`There are ${numEt} times the word 'et'.`);


// Bonus 2

let phraseToCheck = "No 'x' in Nixon";
let phraseToCheckFiltered ="";
let palin = false; 

for (char of phraseToCheck) {
    if (char !== " " && char !== "," && char !== "-" && char !== "." && char !== "!" && char !== "?" && char !== "\"" && char !== "'") {
        phraseToCheckFiltered += char.toLowerCase();
    }
}

for (let i= 0; i < phraseToCheck.length; i++) {
    if (phraseToCheckFiltered[i] == phraseToCheckFiltered[phraseToCheckFiltered.length - 1 - i]) {
        palin = true;
    } else {
        palin = false;
        break;
    }
}

if (palin === true) {
    console.log ("Palindrome!");
} else {
    console.log ("No Palindrome!");
}