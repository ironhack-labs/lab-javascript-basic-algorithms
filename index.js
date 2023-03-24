// Iteration 1: Names and Input ---------------------------------

let hacker1 = "John";
console.log(`The driver's name is ${hacker1}`); // Use the backtick method here for strings

let hacker2 = "Andrew";
console.log(`The navigator's name is ${hacker1}`); // Use the backtick method here for strings


// Iteration 2: Conditionals ---------------------------------

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}

else if (hacker1.length < hacker2.length) {
    console.log(`The navigator has the longest name, it has ${hacker2.length} characters.`);
}

else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}


// Iteration 3: Loops ---------------------------------

// 3.1

let nameWithSpace = "";

for (let i = 0; i < hacker1.length; i++) {
    nameWithSpace += hacker1[i] + " ";
}

console.log(nameWithSpace.toUpperCase());

// 3.2

let backwardsName = "";

for (let i = hacker1.length - 1; i >= 0; i--) {
    backwardsName += hacker1[i];
}

console.log(backwardsName);


// 3.3

if (hacker1.localeCompare(hacker2) === -1) {
    console.log("The driver's name goes first");
}

else if (hacker1.localeCompare(hacker2) === 1) {
    console.log("Yo, the navigator goes first definitely.");
}

else console.log("What?! You both got the same name?");


// Bonus 1 ---------------------------------

// Counting total strings

let longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eleifend ultricies sodales. Vestibulum blandit risus nec vulputate hendrerit. Aliquam congue augue id dui feugiat, venenatis consequat tortor maximus. Nam ac erat efficitur, fringilla odio id, fringilla magna. Nunc volutpat tortor et diam lobortis dictum. Mauris euismod viverra enim, ut ultricies diam hendrerit vitae. Aliquam orci lorem, finibus nec sodales vitae, eleifend vel lectus. Aenean tincidunt est a scelerisque accumsan. Sed sollicitudin orci enim, sit amet vulputate felis faucibus eu. Maecenas interdum elit id sem posuere, facilisis bibendum elit porta. Mauris neque orci, elementum non gravida vitae, accumsan ac tortor. In a maximus risus. Phasellus neque ante, lacinia at augue a, gravida semper ex. Etiam massa ligula, interdum facilisis gravida sed, bibendum ut diam. Nam sit amet ornare tortor, vitae tempor quam.

Fusce ultricies ultricies tincidunt. Aenean posuere magna tortor, in facilisis libero laoreet at. Maecenas sit amet enim dignissim, dignissim orci vehicula, condimentum purus. Fusce volutpat ultricies lacus sit amet vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus scelerisque ante quis dapibus convallis. Duis a volutpat odio. Quisque in odio vel sapien mollis venenatis.

Donec ex velit, varius a eros a, hendrerit scelerisque tellus. Fusce mollis eget sem et vulputate. Quisque lectus nibh, fermentum ac sem quis, porta ultricies diam. Curabitur consequat rutrum leo vel venenatis. Vestibulum consequat pretium congue. Sed rhoncus eros vel purus finibus, sit amet aliquam libero fermentum. Suspendisse rutrum maximus mi. Mauris ultricies tortor purus, non pharetra felis imperdiet et.`;

let strings = longText.split(" ");

let totalStrings = strings.length;

console.log(totalStrings);

// Counting occurences of "et"

let targetString = "et";

let count = 0;

for (let i = 0; i < totalStrings; i++) {

    if (strings[i] === targetString) {
        count++;
    }
}

console.log(`The paragraph contains "et" ${count} times`);

